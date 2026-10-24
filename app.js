(()=>{'use strict';
const menu=document.querySelector('.menu-toggle'),nav=document.getElementById('nav');
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('is-open',open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');nav.classList.remove('is-open')}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){menu.setAttribute('aria-expanded','false');nav.classList.remove('is-open');menu.focus()}});
const service=document.getElementById('service'),summary=document.getElementById('summary'),application=document.getElementById('application'),details=document.getElementById('details');
const chosen=name=>document.querySelector(`input[name="${name}"]:checked`).value;
function updateSelection(){document.getElementById('selection-text').textContent=`Canelura ${chosen('flute').toLowerCase()==='por definir'?'por definir':chosen('flute')} · Apresentação ${chosen('format').toLowerCase()}`;summary.hidden=true}
document.querySelectorAll('.selector input').forEach(input=>input.addEventListener('change',updateSelection));
function updateServices(){document.querySelectorAll('[data-service]').forEach(button=>{const selected=button.dataset.service===service.value;button.setAttribute('aria-pressed',String(selected));button.innerHTML=(selected?`${button.dataset.service} selecionado`:'Adicionar ao pedido')+' <svg aria-hidden="true"><use href="#arrow"/></svg>'})}
document.querySelectorAll('[data-service]').forEach(button=>button.addEventListener('click',()=>{service.value=button.dataset.service;summary.hidden=true;document.getElementById('service-feedback').textContent=`${button.dataset.service} adicionado ao resumo. Pode alterar esta escolha em «Organizar um pedido».`;updateServices()}));
const form=document.getElementById('request-form');form.addEventListener('submit',e=>e.preventDefault());
form.addEventListener('input',()=>{summary.hidden=true});form.addEventListener('change',()=>{summary.hidden=true;updateServices();document.getElementById('service-feedback').textContent=`Serviço indicado no resumo: ${service.value}.`});
document.getElementById('make-summary').addEventListener('click',()=>{document.getElementById('summary-text').textContent=`Canelura: ${chosen('flute')}\nApresentação: ${chosen('format')}\nServiço: ${service.value}\nAplicação: ${application.value.trim()||'Por definir'}\nIndicações: ${details.value.trim()||'Por definir'}`;summary.hidden=false});
})();
