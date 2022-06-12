// hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');

    // munculkan nav menu
    navMenu.classList.toggle('hidden');
})

// navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header')
    const product = document.querySelector('#products');
    const fixedNav = product.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}