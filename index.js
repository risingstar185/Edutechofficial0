const hum=document.getElementsByClassName('hamburger');
const nav=document.getElementsByClassName('nav-links');

hum.addEventListner('click',show);
 function show(){
  nav.style.display='flex'
  hum.style.display='none';
 }