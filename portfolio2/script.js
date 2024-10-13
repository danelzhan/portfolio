// navbar toggle

const navbarLinks = document.getElementById('header_links_list');
const navbarToggle = document.getElementById('navbar_toggle');
navbarToggle.addEventListener('click', function () {
    navbarLinks.classList.toggle('show');
    console.log('clicked');
    console.log(navbarLinks.classList);
});