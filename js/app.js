const navOpen = document.querySelector('.mobile-nav-icon');
const navClose = document.querySelector('.mobile-nav-close');
const navItems = document.querySelector('.nav-items');
const mediaQuery = window.matchMedia('(min-width: 900px)');

function open() {
    navItems.style.top = '0%';
    navOpen.style.display = 'none';
    navClose.style.display = 'flex';
    if (mediaQuery.matches) {
        navClose.style.display = 'none'
    }
}

function close() {
    navItems.style.top = '-100%';
    navClose.style.display = 'none';
    navOpen.style.display = 'flex';
    if (mediaQuery.matches) {
        navOpen.style.display = 'none';
    }
}

navOpen.addEventListener('click', open);
navClose.addEventListener('click', close);
