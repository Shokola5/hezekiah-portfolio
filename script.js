const lightbox=document.getElementById('lightbox');
const image=document.getElementById('lightbox-img');
const title=document.getElementById('lightbox-title');
const type=document.getElementById('lightbox-type');
const close=()=>{lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');document.body.style.overflow=''};
document.querySelectorAll('.work-card').forEach(card=>card.addEventListener('click',()=>{image.src=card.dataset.image;image.alt=card.dataset.title;title.textContent=card.dataset.title;type.textContent=card.dataset.type;lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}));
document.querySelector('.lightbox-close').addEventListener('click',close);
lightbox.addEventListener('click',e=>{if(e.target===lightbox)close()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
// Curved ribbon (VK Fest treatment): centre item faces you and is largest; neighbours turn away and shrink.
document.querySelectorAll('.ribbon > div').forEach(track=>{
  const items=[...track.children];
  const update=()=>{const c=track.scrollLeft+track.clientWidth/2;items.forEach(el=>{const m=el.offsetLeft+el.offsetWidth/2;const d=Math.max(-3,Math.min(3,(m-c)/el.offsetWidth));el.style.setProperty('--ry',(-d*22)+'deg');el.style.setProperty('--s',(1-Math.min(Math.abs(d),3)*.14).toFixed(3));el.style.setProperty('--b',(1-Math.min(Math.abs(d),3)*.12).toFixed(3));el.style.setProperty('--o',Math.abs(d)<.5?1:0);el.style.zIndex=10-Math.round(Math.abs(d))})};
  track.addEventListener('scroll',()=>requestAnimationFrame(update),{passive:true});window.addEventListener('resize',update);
  const start=items[Math.min(1,items.length-1)];track.scrollLeft=start.offsetLeft+start.offsetWidth/2-track.clientWidth/2;update();
  if(!matchMedia('(prefers-reduced-motion: reduce)').matches){let t=setInterval(()=>{const i=items.findIndex(el=>+el.style.zIndex===10);const n=items[(i+1)%items.length];track.scrollTo({left:n.offsetLeft+n.offsetWidth/2-track.clientWidth/2,behavior:'smooth'})},3500);['pointerdown','wheel','focusin','mouseenter','touchstart'].forEach(e=>track.addEventListener(e,()=>clearInterval(t),{once:true,passive:true}))}
});
