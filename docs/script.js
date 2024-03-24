
const featured1 = document.getElementById("featured_work_1");
const navbarToggle = document.getElementById("navbar_toggle");
const cursor = document.getElementById("cursor")

window.onmousemove = e => {

    let x = e.clientX - cursor.offsetWidth / 2;
    let y = e.clientY - cursor.offsetHeight / 2;

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
    window.location.href = "featured_1.html";
});

navbarToggle.addEventListener("click", function() {
    console.log("yes");
    console.log(mouseX + "-" + mouseY);
});
