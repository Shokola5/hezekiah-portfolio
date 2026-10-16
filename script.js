const lightbox=document.getElementById('lightbox');
const image=document.getElementById('lightbox-img');
const title=document.getElementById('lightbox-title');
const type=document.getElementById('lightbox-type');
const close=()=>{lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');document.body.style.overflow=''};
document.querySelectorAll('.work-card').forEach(card=>card.addEventListener('click',()=>{image.src=card.dataset.image;image.alt=card.dataset.title;title.textContent=card.dataset.title;type.textContent=card.dataset.type;lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}));
document.querySelector('.lightbox-close').addEventListener('click',close);
lightbox.addEventListener('click',e=>{if(e.target===lightbox)close()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
