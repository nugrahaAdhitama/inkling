// hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');

    // munculkan nav menu
    navMenu.classList.toggle('hidden');
})


// item women muncul
const women = document.querySelector('#women');
const womenItems = document.querySelector('.item-women');

women.addEventListener('mouseover', function() {
    womenItems.classList.toggle('hidden');
})