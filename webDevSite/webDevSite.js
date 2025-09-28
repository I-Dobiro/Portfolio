const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');
const showcaseFormCard = document.getElementById('showcase-form-card')
const nav = document.getElementById('nav')

btn.addEventListener('click', navToggle);

function navToggle() {
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling');
    menu.classList.toggle('show-menu');
    // showcaseFormCard.style.visibility('hidden');
    showcaseFormCard.style.display('none');

}
