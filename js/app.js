const navOpen = document.querySelector('.mobile-nav-icon');
const navClose = document.querySelector('.mobile-nav-close');
const navItems = document.querySelector('.nav-items');
const mediaQuery = window.matchMedia('(min-width: 900px)');

function open() {
    navItems.style.top = '0%';
    navOpen.style.display = 'none';
    navClose.style.display = 'flex';
}

function close() {
    navItems.style.top = '-100%';
    navClose.style.display = 'none';
    navOpen.style.display = 'flex';
}

navOpen.addEventListener('click', open);
navClose.addEventListener('click', close);
document.addEventListener('click', () => {
    if (navItems.style.top = '0%') {
        navOpen.style.display = 'flex';
        navClose.style.display = 'none';
        navItems.style.top = '-100%';
    }
}, true);

window.onresize = () => {
    if (mediaQuery.matches) {
        navOpen.style.display = 'none';
        navClose.style.display = 'none';
    } else
    navOpen.style.display = 'flex';
};