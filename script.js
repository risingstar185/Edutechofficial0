const hum = document.getElementsByClassName('hamburger')[0];
const nav = document.getElementsByClassName('nav-links')[0];

hum.addEventListener('click', show);

function show() {
  nav.style.display = 'flex';
  hum.style.display='none';
}
