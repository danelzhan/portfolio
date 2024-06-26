
const featured1 = document.getElementById("featured_work_1");
const navbarToggle = document.getElementById("navbar_toggle");

const navbar_menu = document.getElementById("header_links");

const cursor = document.getElementById("cursor")

window.onmousemove = e => {

    let x = e.clientX;
    let y = e.clientY;

    cursor.style.transform = "translate(" + x + "px," + y + "px)";

    const keyframes = {
        transform: "translate(" + x + "px," + y + "px)"
    }

    cursor.animate(keyframes, {
        duration: 800,
        fill: "forwards"
    })

};

featured1.addEventListener("click", function() {
    window.location.href = "construction.html";
});

navbarToggle.addEventListener("click", function() {
navbar_menu.classList.toggle("show");
});

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

hiddenElements.forEach((element) => observer.observe(element));