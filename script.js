const lightbox=document.getElementById('lightbox');
const image=document.getElementById('lightbox-img');
const title=document.getElementById('lightbox-title');
const type=document.getElementById('lightbox-type');
const close=()=>{lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');document.body.style.overflow=''};
// delegated so the looped copies open the lightbox too
document.addEventListener('click',e=>{const card=e.target.closest('.work-card');if(!card||card.dataset.dragged)return;image.src=card.dataset.image;image.alt=card.dataset.title;title.textContent=card.dataset.title;type.textContent=card.dataset.type;lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'});
document.querySelector('.lightbox-close').addEventListener('click',close);
lightbox.addEventListener('click',e=>{if(e.target===lightbox)close()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});

/* Endless curved row (after the VK Fest motion pin): items are duplicated, the track slides at a constant speed and wraps
   by exactly one set width, so there is no start, end or jump. Centre item is biggest; sides shrink, darken and turn away.
   Pauses on hover, keyboard focus, touch, an open lightbox or a playing video. "Reduce motion" keeps the static Theme 2 grid. */
(()=>{
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.querySelectorAll('.work-grid,.video-grid').forEach(grid=>{
    const originals=[...grid.children];
    const track=document.createElement('div');track.className='loop-track';
    originals.forEach(el=>track.appendChild(el));
    grid.appendChild(track);grid.classList.add('loop');
    const speed=grid.classList.contains('video-grid')?52:65; // px per second
    let setW=0,x=0,items=[],pos=[],paused=0,hover=false,touchHold=0,last=performance.now(),drag=null;
    const cloneSet=()=>originals.forEach(el=>{const c=el.cloneNode(true);c.setAttribute('aria-hidden','true');c.classList.add('loop-clone');
      c.querySelectorAll('button,a,video').forEach(n=>n.setAttribute('tabindex','-1'));if(c.matches('button'))c.setAttribute('tabindex','-1');track.appendChild(c)});
    let lastW=-1;
    const playingHere=()=>[...grid.querySelectorAll('video')].some(v=>!v.paused&&!v.ended);
    const measure=(force)=>{
      // never rebuild while a video in this row is playing (that would destroy the element being watched),
      // and ignore height-only resizes (mobile address bar showing / hiding while scrolling)
      if(playingHere()){grid._pending=true;return}
      const gap=parseFloat(getComputedStyle(track).columnGap)||0;
      const newSet=originals.reduce((s,el)=>s+el.offsetWidth+gap,0);
      if(!force&&grid.clientWidth===lastW&&newSet===setW&&items.length){return}
      lastW=grid.clientWidth;grid._pending=false;
      track.querySelectorAll('.loop-clone').forEach(c=>c.remove());
      setW=newSet;
      const sets=Math.max(3,Math.ceil((grid.clientWidth*2)/setW)+2);
      for(let i=1;i<sets;i++)cloneSet();
      items=[...track.children];pos=items.map(el=>el.offsetLeft+el.offsetWidth/2);x%=setW;render();
    };
    // touch: a single tap on a paused video plays it (with sound) instead of only revealing the controls;
    // taps on the bottom control bar are left to the native controls
    grid.addEventListener('pointerup',e=>{if(e.pointerType==='mouse')return;const v=e.target.closest('video');if(!v)return;
      const r=v.getBoundingClientRect();if(e.clientY>r.bottom-48)return;const sx=e.clientX;
      setTimeout(()=>{if(v.paused&&!(drag&&drag.moved)){v.muted=false;v.play().catch(()=>{})}},250)});
    // one video at a time; resume a deferred rebuild once playback stops
    grid.addEventListener('play',e=>{document.querySelectorAll('video').forEach(v=>{if(v!==e.target&&!v.paused)v.pause()})},true);
    ['pause','ended'].forEach(t=>grid.addEventListener(t,()=>{if(grid._pending)setTimeout(()=>measure(true),300)},true));
    const render=()=>{
      const base=setW; // start one set in, so the left side is always filled
      track.style.transform=`translate3d(${-(x+base)}px,0,0)`;
      const mid=grid.clientWidth/2,w=items[0].offsetWidth||1;
      items.forEach((el,i)=>{const d=(pos[i]-x-base-mid)/w;const a=Math.min(Math.abs(d),3.2);
        if(Math.abs(d)>6){el.style.visibility='hidden';return}el.style.visibility='';
        el.style.transform=`perspective(1200px) rotateY(${(-Math.sign(d)*Math.min(a,2.6)*20).toFixed(2)}deg) scale(${(1.12-a*.13).toFixed(3)})`;
        el.style.filter=`brightness(${(1-a*.16).toFixed(3)})`;el.style.zIndex=String(100-Math.round(a*10));
        el.classList.toggle('is-centre',a<.5)});
    };
    const tick=t=>{const dt=Math.min(t-last,64)/1000;last=t;
      const playing=playingHere();
      if(!drag&&!hover&&!paused&&!playing&&!lightbox.classList.contains('open')&&performance.now()>touchHold){x=(x+speed*dt)%setW;render()}
      requestAnimationFrame(tick)};
    grid.addEventListener('mouseenter',()=>hover=true);grid.addEventListener('mouseleave',()=>hover=false);
    grid.addEventListener('focusin',()=>paused++);grid.addEventListener('focusout',()=>paused=Math.max(0,paused-1));
    // touch / pen: hold pauses; swipe drags the loop
    grid.addEventListener('pointerdown',e=>{if(e.pointerType==='mouse')return;drag={sx:e.clientX,sxv:x,moved:false,el:e.target.closest('.work-card')}});
    grid.addEventListener('pointermove',e=>{if(!drag)return;const dx=e.clientX-drag.sx;if(Math.abs(dx)>6)drag.moved=true;if(drag.moved){x=((drag.sxv-dx)%setW+setW)%setW;render()}});
    const end=()=>{if(!drag)return;const el=drag.el;if(drag.moved&&el){el.dataset.dragged='1';setTimeout(()=>delete el.dataset.dragged,50)}drag=null;touchHold=performance.now()+2500};
    grid.addEventListener('pointerup',end);grid.addEventListener('pointercancel',end);
    window.addEventListener('resize',()=>{clearTimeout(grid._r);grid._r=setTimeout(()=>measure(false),150)});
    measure(true);addEventListener('load',()=>measure(false));requestAnimationFrame(tick);
  });
})();
