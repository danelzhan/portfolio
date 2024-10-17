// navbar toggle

const navbarLinks = document.getElementById('header_links_list');
const navbarToggle = document.getElementById('navbar_toggle');
navbarToggle.addEventListener('click', function () {
    navbarLinks.classList.toggle('show');
    console.log('clicked');
    console.log(navbarLinks.classList);
});

// featured work

const featured1 = document.getElementById("display_card_1");
featured1.addEventListener("click", function() {
    window.location.href = "https://www.vphsociety.org";
})

const featured2 = document.getElementById("display_card_2");
featured2.addEventListener("click", function() {
    window.location.href = "https://danelzhan.github.io/taylorSeries/";
})