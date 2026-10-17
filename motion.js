/* Motion layer (theme-2-motion). Only runs when <html> has .motion, i.e. the visitor has not asked for reduced motion.
   Everything animates transform / translate / opacity only; per-frame work goes through requestAnimationFrame. */
(()=>{
  const root=document.documentElement;
  if(!root.classList.contains('motion'))return;
  const fine=matchMedia('(hover: hover) and (pointer: fine)').matches;
  const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];

  /* 1. Hero entrance: split the brush headline into words that rise out of a mask, staggered */
  // machine-translated pages keep the headline whole, so the translator sees one sentence (it gets a plain fade instead)
  const h1=$('.hero h1');
  if(h1&&!root.classList.contains('lang-mt')){
    h1.setAttribute('aria-label',h1.textContent.replace(/\s+/g,' ').trim());
    let i=0;
    const wrap=node=>{[...node.childNodes].forEach(n=>{
      if(n.nodeType===3){const frag=document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach(t=>{if(!t)return;if(/^\s+$/.test(t)){frag.appendChild(document.createTextNode(t));return}
          const o=document.createElement('span');o.className='w';o.setAttribute('aria-hidden','true');
          const inner=document.createElement('span');inner.textContent=t;inner.style.setProperty('--i',i++);o.appendChild(inner);frag.appendChild(o)});
        n.replaceWith(frag)}
      else if(n.nodeType===1)wrap(n)})};
    wrap(h1);
  }
  requestAnimationFrame(()=>requestAnimationFrame(()=>root.classList.add('ready')));

  /* 2. Lime service strip → seamless marquee (two identical sets, track moves exactly -50%) */
  const ticker=$('.ticker');
  if(ticker){
    const set=document.createElement('div');set.className='marquee-set';
    while(ticker.firstChild)set.appendChild(ticker.firstChild);
    const track=document.createElement('div');track.className='marquee-track';
    track.append(set,set.cloneNode(true),set.cloneNode(true),set.cloneNode(true));
    ticker.appendChild(track);ticker.classList.add('is-marquee');
  }

  /* 3. Scroll reveals */
  const groups=[['.section-head',0],['.continuous-strip',0],['.work-grid',0],['.video-grid',0],['.about > div',90],['.skill-list span',40],['.tool-row span',50],['.contact > *',90],['footer span',80]];
  groups.forEach(([sel,step])=>$$(sel).forEach((el,k)=>{el.classList.add('reveal');el.style.setProperty('--d',(step*k)+'ms')}));
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -12% 0px',threshold:.08});
  $$('.reveal').forEach(el=>io.observe(el));
  // near the very bottom the shrunken root margin can never be reached, so reveal whatever is left
  addEventListener('scroll',()=>{if(innerHeight+scrollY>=document.documentElement.scrollHeight-4)$$('.reveal:not(.in)').forEach(el=>el.classList.add('in'))},{passive:true});

  /* 4. Hero parallax (rAF, only while the hero is on screen) */
  const hero=$('.hero'),art=$('.hero-art'),copy=$('.hero-copy');let ticking=false,heroOn=true;
  new IntersectionObserver(([e])=>heroOn=e.isIntersecting).observe(hero);
  const par=()=>{ticking=false;if(!heroOn)return;const y=Math.min(scrollY,900);
    art&&(art.style.transform=`translate3d(0,${(y*.18).toFixed(1)}px,0)`);copy&&(copy.style.transform=`translate3d(0,${(y*.07).toFixed(1)}px,0)`)};
  addEventListener('scroll',()=>{if(!ticking){ticking=true;requestAnimationFrame(par)}},{passive:true});

  if(!fine)return; // the rest is for mouse / trackpad only

  /* 5. Magnetic, springy buttons */
  $$('.button,.nav-cta,.contact-email,.lightbox-close').forEach(b=>{b.classList.add('magnetic');
    b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();const dx=(e.clientX-r.left-r.width/2)/r.width,dy=(e.clientY-r.top-r.height/2)/r.height;
      b.style.translate=`${(dx*14).toFixed(1)}px ${(dy*10).toFixed(1)}px`});
    b.addEventListener('pointerleave',()=>b.style.translate='0 0')});

  /* 6. Cursor dot (desktop only; the normal cursor stays visible) */
  const dot=document.createElement('div');dot.className='cursor-dot';dot.setAttribute('aria-hidden','true');document.body.appendChild(dot);
  let mx=-100,my=-100,cx=-100,cy=-100,shown=false;
  addEventListener('pointermove',e=>{if(e.pointerType!=='mouse')return;mx=e.clientX;my=e.clientY;if(!shown){shown=true;cx=mx;cy=my;dot.classList.add('on')}
    dot.classList.toggle('big',!!e.target.closest('a,button,video,.work-card'))},{passive:true});
  document.addEventListener('pointerleave',()=>{shown=false;dot.classList.remove('on')});
  const follow=()=>{cx+=(mx-cx)*.22;cy+=(my-cy)*.22;dot.style.transform=`translate3d(${cx.toFixed(1)}px,${cy.toFixed(1)}px,0)`;requestAnimationFrame(follow)};
  requestAnimationFrame(follow);
})();
