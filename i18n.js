/* Languages (theme-2 i18n).
   English and Italian are hand-written (dictionary below, keys = data-i18n / data-i18n-attr in index.html).
   Any other language is machine-translated from the English page with the Google Translate website element; its banner,
   tooltips and highlight are hidden in style.css, and brand names / poster text / email carry translate="no".
   Choice order: ?lang=xx in the URL (for scripted recordings and shared links; not saved) > the visitor's saved pick
   (localStorage "hksLang") > the browser's first preferred language (navigator.languages).
   Switching language always reloads the page, so the endless rows, marquee and hero animation are rebuilt from the
   translated text instead of being patched live. Runs before script.js / motion.js. */
(()=>{
  const DICT={
  en:{
    "meta.title": "HKS — Creative & Digital Portfolio",
    "nav.work": "Work",
    "nav.video": "Video",
    "nav.about": "About",
    "nav.cta": "Let's talk ↗",
    "hero.eyebrow": "CREATIVE & DIGITAL MEDIA · ITALY",
    "hero.h1": "I turn ideas into <em>visual experiences.</em>",
    "hero.text": "Graphic design, video production, social media, branding and digital concepts — from first idea to final delivery.",
    "hero.explore": "Explore my work ↓",
    "hero.touch": "Get in touch ↗",
    "tick.gd": "GRAPHIC DESIGN",
    "tick.vp": "VIDEO PRODUCTION",
    "tick.sm": "SOCIAL MEDIA",
    "tick.br": "BRANDING",
    "tick.dc": "DIGITAL CREATIVE",
    "work.eyebrow": "01 / SELECTED WORK",
    "work.h2": "Graphic design & campaigns",
    "work.note": "Real client, ministry and campaign work across social media, event communication and visual storytelling.",
    "card.campEd": "CAMPAIGN / EDITORIAL",
    "card.event": "EVENT CAMPAIGN",
    "card.brand": "BRANDING / FORMAT",
    "card.social": "SOCIAL MEDIA",
    "card.socCamp": "SOCIAL CAMPAIGN",
    "pw.eyebrow": "01B / CAMPAIGN SERIES",
    "pw.note": "A continuous three-panel campaign visual for Youth Summer Camp — designed to read as one composition across the full strip.",
    "yo.eyebrow": "01C / SOCIAL CAMPAIGN",
    "yo.h2": "<span class=\"notranslate\" translate=\"no\">Youth Outreach</span> — Isaiah 41:10 series",
    "yo.note": "A two-post carousel for Youth Outreach built on Isaiah 41:10 — “I Am Here” and “Jesus Is Here” — pairing live worship photography with bold scripture typography.",
    "lr.eyebrow": "01D / CAROUSEL / CHURCH EVENT",
    "lr.note": "“Practical Steps for Churches to Train Their Workers” — a two-slide carousel where the speaker and lectern run across both slides, designed to read as one continuous image.",
    "vid.eyebrow": "02 / MOTION",
    "vid.h2": "Video production",
    "vid.note": "Short-form storytelling, event content and creative video edits built for digital audiences.",
    "vid.event": "VIDEO / EVENT",
    "vid.sweden": "<span class=\"notranslate\" translate=\"no\">Sweden</span> — Event Content",
    "about.eyebrow": "03 / ABOUT HKS",
    "about.h2": "Design is how I make an idea visible.",
    "about.p1": "I'm Hezekiah Kolawole Shobowale, a creative and digital professional working across graphic design, video production, social media content and branding.",
    "about.p2": "My work combines visual communication with hands-on production — from campaign artwork and event graphics to edited video and digital concepts.",
    "skill.gd": "Graphic Design",
    "skill.ve": "Video Editing",
    "skill.cg": "Colour Grading",
    "skill.sm": "Social Media",
    "skill.br": "Branding",
    "skill.cd": "Creative Direction",
    "tools.eyebrow": "04 / TOOLS",
    "contact.eyebrow": "05 / CONTACT",
    "contact.h2": "Have an idea?<br><em>Let's make it visual.</em>",
    "footer.loc": "Italy · Creative & Digital Media",
    "meta.desc": "HKS — Hezekiah Kolawole Shobowale. Graphic design, video production, social media and digital creative work.",
    "nav.home": "HKS home",
    "lang.more": "More languages",
    "type.campEd": "Campaign / Editorial Design",
    "alt.0": "Legacy: Two Men, One Vision campaign design",
    "type.eventId": "Event Campaign / Visual Identity",
    "alt.1": "Media Booth event design",
    "type.eventTy": "Event Campaign / Typography",
    "alt.2": "Mega Praise 2025 event design",
    "type.brandFmt": "Branding / Content Format",
    "alt.3": "Seed Talk visual identity",
    "type.socDes": "Social Media Design",
    "alt.4": "Grace and Mercy social media design",
    "type.socCamp": "Social Media Campaign",
    "alt.5": "Welcome to June campaign design",
    "alt.6": "Happy Mother's Day design",
    "alt.7": "Happy Mother's Month design",
    "pw.aria": "Prayer Walk continuous campaign artwork",
    "type.campEvent": "Campaign / Event Design",
    "title.pw1": "Prayer Walk — Panel 1",
    "alt.8": "Prayer Walk campaign artwork panel 1",
    "title.pw2": "Prayer Walk — Panel 2",
    "alt.9": "Prayer Walk campaign artwork panel 2",
    "title.pw3": "Prayer Walk — Panel 3",
    "alt.10": "Prayer Walk campaign artwork panel 3",
    "yo.aria": "Youth Outreach Isaiah 41:10 series",
    "type.socYouth": "Social Campaign / Youth Outreach",
    "alt.11": "I Am Here — Youth Outreach graphic with Isaiah 41:10, be not dismayed; for I am thy God",
    "alt.12": "Jesus Is Here — Youth Outreach graphic with Isaiah 41:10, fear thou not for I am with thee",
    "lr.aria": "RCCG EMR 5 Leaders Retreat continuous carousel",
    "type.carChurch": "Carousel / Church Event",
    "title.lr1": "Leaders Retreat — Slide 1",
    "alt.13": "Practical Steps for Churches to Train Their Workers — RCCG EMR 5 Leaders Retreat title slide",
    "title.lr2": "Leaders Retreat — Slide 2",
    "alt.14": "Notepad slide listing steps: train leaders first, encourage theological education, organise regular Bible training classes, develop discipleship and leadership programmes, promote Bible study and doctrinal teaching, support ministers attending theological institutions, build a culture of lifelong learning",
    "lb.close": "Close"
  },
  it:{
    "meta.title": "HKS — Portfolio creativo e digitale",
    "meta.desc": "HKS — Hezekiah Kolawole Shobowale. Graphic design, produzione video, social media e progetti creativi digitali.",
    "nav.home": "HKS — home",
    "nav.work": "Lavori",
    "nav.video": "Video",
    "nav.about": "Chi sono",
    "nav.cta": "Parliamone ↗",
    "lang.more": "Altre lingue",
    "hero.eyebrow": "CREATIVITÀ & MEDIA DIGITALI · ITALIA",
    "hero.h1": "Trasformo le idee in <em>esperienze visive.</em>",
    "hero.text": "Graphic design, produzione video, social media, branding e concept digitali — dall’idea iniziale alla consegna finale.",
    "hero.explore": "Scopri i miei lavori ↓",
    "hero.touch": "Contattami ↗",
    "tick.gd": "GRAPHIC DESIGN",
    "tick.vp": "PRODUZIONE VIDEO",
    "tick.sm": "SOCIAL MEDIA",
    "tick.br": "BRANDING",
    "tick.dc": "CREATIVITÀ DIGITALE",
    "work.eyebrow": "01 / LAVORI SELEZIONATI",
    "work.h2": "Graphic design & campagne",
    "work.note": "Progetti reali per clienti, chiese e campagne: social media, comunicazione per eventi e storytelling visivo.",
    "card.campEd": "CAMPAGNA / EDITORIALE",
    "card.event": "CAMPAGNA EVENTO",
    "card.brand": "BRANDING / FORMAT",
    "card.social": "SOCIAL MEDIA",
    "card.socCamp": "CAMPAGNA SOCIAL",
    "type.campEd": "Campagna / Design editoriale",
    "type.eventId": "Campagna evento / Identità visiva",
    "type.eventTy": "Campagna evento / Tipografia",
    "type.brandFmt": "Branding / Format di contenuti",
    "type.socDes": "Grafica per i social",
    "type.socCamp": "Campagna social",
    "type.campEvent": "Campagna / Grafica per eventi",
    "type.socYouth": "Campagna social / Youth Outreach",
    "type.carChurch": "Carosello / Evento ecclesiale",
    "alt.0": "Grafica della campagna Legacy: Two Men, One Vision",
    "alt.1": "Grafica per l’evento Media Booth",
    "alt.2": "Grafica per l’evento Mega Praise 2025",
    "alt.3": "Identità visiva di Seed Talk",
    "alt.4": "Grafica social Grace and Mercy",
    "alt.5": "Grafica della campagna Welcome to June",
    "alt.6": "Grafica per la Festa della mamma (Happy Mother’s Day)",
    "alt.7": "Grafica per il mese della mamma (Happy Mother’s Month)",
    "pw.eyebrow": "01B / SERIE DI CAMPAGNA",
    "pw.note": "Una grafica continua in tre pannelli per lo Youth Summer Camp, pensata per leggersi come un’unica composizione lungo tutta la striscia.",
    "pw.aria": "Grafica continua della campagna Prayer Walk",
    "title.pw1": "Prayer Walk — Pannello 1",
    "title.pw2": "Prayer Walk — Pannello 2",
    "title.pw3": "Prayer Walk — Pannello 3",
    "alt.8": "Prayer Walk, grafica della campagna — pannello 1",
    "alt.9": "Prayer Walk, grafica della campagna — pannello 2",
    "alt.10": "Prayer Walk, grafica della campagna — pannello 3",
    "yo.eyebrow": "01C / CAMPAGNA SOCIAL",
    "yo.h2": "<span class=\"notranslate\" translate=\"no\">Youth Outreach</span> — serie Isaia 41:10",
    "yo.note": "Un carosello di due post per Youth Outreach ispirato a Isaia 41:10 — “I Am Here” e “Jesus Is Here” — che unisce fotografie dal vivo dei momenti di lode a una tipografia biblica d’impatto.",
    "yo.aria": "Youth Outreach, serie Isaia 41:10",
    "alt.11": "I Am Here — grafica Youth Outreach con Isaia 41:10: «non smarrirti, perché io sono il tuo Dio»",
    "alt.12": "Jesus Is Here — grafica Youth Outreach con Isaia 41:10: «non temere, perché io sono con te»",
    "lr.eyebrow": "01D / CAROSELLO / EVENTO ECCLESIALE",
    "lr.note": "“Practical Steps for Churches to Train Their Workers” — un carosello di due slide in cui il relatore e il leggio proseguono da una slide all’altra, pensato per leggersi come un’unica immagine continua.",
    "lr.aria": "RCCG EMR 5 Leaders Retreat, carosello continuo",
    "title.lr1": "Leaders Retreat — Slide 1",
    "title.lr2": "Leaders Retreat — Slide 2",
    "alt.13": "Practical Steps for Churches to Train Their Workers — slide del titolo del RCCG EMR 5 Leaders Retreat",
    "alt.14": "Slide a forma di blocco note con i passi: formare prima i leader, incoraggiare la formazione teologica, organizzare corsi biblici regolari, sviluppare programmi di discepolato e leadership, promuovere lo studio biblico e l’insegnamento dottrinale, sostenere i ministri che frequentano istituti teologici, costruire una cultura di apprendimento continuo",
    "vid.eyebrow": "02 / VIDEO",
    "vid.h2": "Produzione video",
    "vid.note": "Storytelling in formato breve, contenuti per eventi e montaggi creativi pensati per il pubblico digitale.",
    "vid.event": "VIDEO / EVENTO",
    "vid.sweden": "<span class=\"notranslate\" translate=\"no\">Sweden</span> — Contenuti per eventi",
    "about.eyebrow": "03 / CHI È HKS",
    "about.h2": "Il design è il mio modo di rendere visibile un’idea.",
    "about.p1": "Sono Hezekiah Kolawole Shobowale, un professionista creativo e digitale: mi occupo di graphic design, produzione video, contenuti per i social e branding.",
    "about.p2": "Il mio lavoro unisce comunicazione visiva e produzione sul campo — dalle grafiche per campagne ed eventi al montaggio video e ai concept digitali.",
    "skill.gd": "Graphic Design",
    "skill.ve": "Montaggio video",
    "skill.cg": "Color grading",
    "skill.sm": "Social media",
    "skill.br": "Branding",
    "skill.cd": "Direzione creativa",
    "tools.eyebrow": "04 / STRUMENTI",
    "contact.eyebrow": "05 / CONTATTI",
    "contact.h2": "Hai un’idea?<br><em>Rendiamola visibile.</em>",
    "footer.loc": "Italia · Creatività & Media Digitali",
    "lb.close": "Chiudi"
  }
  };
  // "More languages" picker: Google Translate codes, names written in their own language
  const MORE=[['fr','Français'],['es','Español'],['de','Deutsch'],['pt','Português'],['yo','Yorùbá'],['ig','Igbo'],['ha','Hausa'],['zh-CN','中文 (简体)'],
    ['ar','العربية'],['ru','Русский'],['uk','Українська'],['pl','Polski'],['ro','Română'],['nl','Nederlands'],['tr','Türkçe'],['hi','हिन्दी'],['ja','日本語'],
    ['ko','한국어'],['sw','Kiswahili'],['tl','Filipino'],['sq','Shqip'],['el','Ελληνικά']];
  const KEY='hksLang',root=document.documentElement;
  const norm=l=>{l=String(l||'').trim();const s=l.toLowerCase();if(!s)return'';
    if(s.startsWith('it'))return'it';if(s.startsWith('en'))return'en';
    if(s.startsWith('zh'))return /tw|hk|mo|hant/.test(s)?'zh-TW':'zh-CN';
    if(s.startsWith('he'))return'iw';if(s.startsWith('fil'))return'tl';if(s==='nb'||s==='nn'||s.startsWith('no'))return'no';
    return s.split(/[-_]/)[0]};
  let saved='';try{saved=localStorage.getItem(KEY)||''}catch(e){}
  const param=norm(new URLSearchParams(location.search).get('lang'));
  const lang=param||norm(saved)||norm((navigator.languages&&navigator.languages[0])||navigator.language)||'en';
  const hand=DICT[lang]?lang:'en';
  window.HKS_LANG=lang;

  // 1. hand-written text
  if(hand!=='en'){const D=DICT[hand];
    document.querySelectorAll('[data-i18n]').forEach(el=>{const v=D[el.dataset.i18n];if(v!=null)el.innerHTML=v});
    document.querySelectorAll('[data-i18n-attr]').forEach(el=>el.dataset.i18nAttr.split(',').forEach(p=>{const [a,k]=p.split(':');if(D[k]!=null)el.setAttribute(a,D[k])}));
    document.title=D['meta.title'];
  }
  root.lang=hand;root.classList.remove('lang-en','lang-it','lang-mt');root.classList.add(DICT[lang]?'lang-'+lang:'lang-mt');

  // keep headings inside their column when a translation brings a long word ("experiencias", "Videoproduktion" on a phone):
  // shrink that heading's font step by step (never below 60%); the turned hero headline is also checked against the viewport.
  // If the header row is too wide for the translated button text, the header gets .tight (smaller button, then ellipsis).
  const heads=[...document.querySelectorAll('.hero h1,main h2')],header=document.querySelector('.site-header');
  const vw=()=>document.documentElement.clientWidth;
  const fitOne=el=>{el.style.fontSize='';let fs=parseFloat(getComputedStyle(el).fontSize);const min=fs*.6;
    const over=()=>el.scrollWidth>el.clientWidth+1||[...el.querySelectorAll('em')].some(e=>e.scrollWidth>e.clientWidth+1)||el.getBoundingClientRect().right>vw()-4;
    while(over()&&fs>min){fs*=.95;el.style.fontSize=fs.toFixed(1)+'px'}};
  const fit=()=>{heads.forEach(fitOne);
    if(header){header.classList.remove('tight');if(header.scrollWidth>header.clientWidth+1)header.classList.add('tight')}};
  let fitT;const later=()=>{clearTimeout(fitT);fitT=setTimeout(fit,150)};
  addEventListener('resize',later);addEventListener('load',later);document.fonts&&document.fonts.ready.then(later);
  new MutationObserver(later).observe(root,{attributes:true,attributeFilter:['class']});

  // 2. switch in the nav
  const sw=document.querySelector('.lang-switch');
  if(sw){const sel=sw.querySelector('select'),code=sw.querySelector('.lang-code');
    const ph=document.createElement('option');ph.value='';ph.textContent=hand==='it'?'Altre lingue…':'More languages…';ph.disabled=true;sel.appendChild(ph);
    MORE.forEach(([c,n])=>{const o=document.createElement('option');o.value=c;o.textContent=n;o.lang=c;sel.appendChild(o)});
    if(!DICT[lang]&&!MORE.some(m=>m[0]===lang)){const o=document.createElement('option');o.value=lang;o.textContent=lang.toUpperCase();sel.appendChild(o)}
    sel.value=DICT[lang]?'':lang;
    sw.querySelectorAll('[data-lang]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.lang===lang)));
    if(!DICT[lang]){sw.classList.add('is-more');code.textContent=lang.split('-')[0].toUpperCase()}
    const go=l=>{if(!l||l===lang)return;try{localStorage.setItem(KEY,l)}catch(e){}
      if(DICT[l])clearCookie();else setCookie(l);
      const u=new URL(location.href);if(u.searchParams.has('lang')){u.searchParams.delete('lang');location.replace(u.pathname+u.search+u.hash)}else location.reload()};
    sw.addEventListener('click',e=>{const b=e.target.closest('[data-lang]');if(b)go(b.dataset.lang)});
    sel.addEventListener('change',()=>go(sel.value));
  }

  // 3. machine translation for every other language
  function domains(){const h=location.hostname,parts=h.split('.'),out=[''];if(parts.length>1&&!/^\d+$/.test(parts[parts.length-1]))out.push('.'+h);return out}
  function setCookie(l){domains().forEach(d=>document.cookie='googtrans=/en/'+l+';path=/'+(d?';domain='+d:''))}
  function clearCookie(){domains().forEach(d=>document.cookie='googtrans=;path=/;max-age=0;expires=Thu, 01 Jan 1970 00:00:00 GMT'+(d?';domain='+d:''))}
  if(DICT[lang]){clearCookie();return}
  setCookie(lang);
  const holder=document.createElement('div');holder.id='google_translate_element';holder.hidden=true;document.body.appendChild(holder);
  const done=()=>/translated-(ltr|rtl)/.test(root.className);
  window.googleTranslateElementInit=()=>{
    new google.translate.TranslateElement({pageLanguage:'en',autoDisplay:false},'google_translate_element');
    // the cookie normally triggers it; if it hasn't kicked in, drive the hidden picker (again every 3 s, for up to 20 s)
    let n=0,lastKick=0;const t=setInterval(()=>{n++;if(done()||n>80){clearInterval(t);if(!done())root.classList.add('mt-failed');return}
      const c=document.querySelector('.goog-te-combo');
      if(c&&c.options.length>1&&n>=4&&n-lastKick>=12){lastKick=n;c.value=lang;c.dispatchEvent(new Event('change'))}},250)};
  // load the translator; one retry if the script itself fails to load
  const load=retry=>{const s=document.createElement('script');s.src='https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';s.async=true;
    s.onerror=()=>{s.remove();if(retry)setTimeout(()=>load(false),1500);else root.classList.add('mt-failed')};document.head.appendChild(s)};
  load(true);
})();
