(function(){
  const pages=[...document.querySelectorAll('.page')];
  const links=[...document.querySelectorAll('.nav a')];
  const nav=document.getElementById('glavni-meni');
  const btn=document.querySelector('.menu-btn');
  function show(){
    const id=(location.hash||'#pocetna').slice(1);
    const target=pages.find(p=>p.dataset.page===id)||pages[0];
    pages.forEach(p=>p.classList.toggle('active',p===target));
    links.forEach(a=>{a.getAttribute('href')==='#'+target.dataset.page?a.setAttribute('aria-current','page'):a.removeAttribute('aria-current')});
    document.title=(target.dataset.page==='pocetna'?'Pčelarstvo Dedić | Domaći med iz Pobuđa':target.dataset.title+' | Pčelarstvo Dedić');
    window.scrollTo(0,0);
    nav.classList.remove('open');btn.setAttribute('aria-expanded','false');
  }
  window.addEventListener('hashchange',show); show();
  btn.addEventListener('click',()=>{const o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',String(o))});
  document.querySelectorAll('[data-tema]').forEach(a=>a.addEventListener('click',()=>{document.getElementById('tema').value=a.dataset.tema}));
  document.querySelectorAll('.tab').forEach(t=>t.addEventListener('click',()=>{
    document.querySelectorAll('.tab').forEach(x=>x.setAttribute('aria-selected',String(x===t)));
    document.querySelectorAll('.tab-panel').forEach(pn=>pn.hidden=(pn.id!==t.getAttribute('aria-controls')));
  }));
  document.querySelectorAll('[data-proizvod]').forEach(a=>a.addEventListener('click',()=>{
    document.getElementById('tema').value='Narudžba proizvoda';
    const ta=document.querySelector('#forma textarea');ta.value='Zanima me: '+a.dataset.proizvod+'\n';
  }));
  const form=document.getElementById('forma'),msg=document.getElementById('form-msg');
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const d=new FormData(form);
    if(!d.get('ime')||!d.get('email')||!d.get('poruka')){msg.textContent='Upišite ime, e-mail i poruku da bismo vam mogli odgovoriti.';msg.className='form-msg show err';return}
    const body=`Ime: ${d.get('ime')}\nTelefon: ${d.get('telefon')||'-'}\nE-mail: ${d.get('email')}\n\n${d.get('poruka')}`;
    location.href='mailto:pcelarstvo.d@gmail.com?subject='+encodeURIComponent(d.get('tema'))+'&body='+encodeURIComponent(body);
    msg.textContent='Otvara se vaš e-mail program s pripremljenim upitom. Pošaljite ga i javit ćemo vam se.';msg.className='form-msg show';
  });
  document.getElementById('god').textContent=new Date().getFullYear();
})();
