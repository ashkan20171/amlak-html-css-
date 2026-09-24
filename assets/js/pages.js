'use strict';
const q=s=>document.querySelector(s), qa=s=>[...document.querySelectorAll(s)];
const nav=q('#navToggle'), menu=q('#mainNav'); if(nav&&menu)nav.onclick=()=>{const o=menu.classList.toggle('open');nav.setAttribute('aria-expanded',o)};
const y=q('#year');if(y)y.textContent=new Intl.NumberFormat('fa-IR').format(new Date().getFullYear());
qa('[data-toast]').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();const m=q('#pageMessage');if(m){m.textContent=f.dataset.toast||'درخواست شما ثبت شد.';m.hidden=false}f.reset()}));
const calc=q('#loanCalc');if(calc)calc.addEventListener('submit',e=>{e.preventDefault();const amount=+q('#amount').value||0,years=+q('#years').value||0,rate=(+q('#rate').value||0)/1200,n=years*12;let pay=rate&&n?amount*rate*Math.pow(1+rate,n)/(Math.pow(1+rate,n)-1):(n?amount/n:0);q('#monthly').textContent=new Intl.NumberFormat('fa-IR').format(Math.round(pay))+' تومان';q('#totalPay').textContent=new Intl.NumberFormat('fa-IR').format(Math.round(pay*n))+' تومان'});
