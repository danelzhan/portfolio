// navbar toggle

const navbarLinks = document.getElementById('header_links_list');
const navbarToggle = document.getElementById('navbar_toggle');
navbarToggle.addEventListener('click', function () {
    navbarLinks.classList.toggle('show');
});

const allElements = document.getElementsByTagName("section");
for (var element = 0; element < allElements.length; element++) {
    if (!allElements[element].classList.contains("interactive")) {
        allElements[element].addEventListener('click', function() {
            navbarLinks.classList.remove('show');
        });
    }
}

// scroll animation
const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

hiddenElements.forEach((element) => observer.observe(element));


// featured work
const featured1 = document.getElementById("display_card_1");
featured1.addEventListener("click", function() {
    window.location.href = "https://www.vphsociety.org";
})

const featured2 = document.getElementById("display_card_2");
featured2.addEventListener("click", function() {
    window.location.href = "https://danelzhan.github.io/taylorSeries/";
})

const featured3 = document.getElementById("display_card_3");
featured3.addEventListener("click", function() {
    window.location.href = "https://github.com/danelzhan/Avio-s-Realm";
})