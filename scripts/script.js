/*
    Student Name: Antonio Torres
    File Name: script.js
    Current Date: 4/24/24
*/

/* Hamburger Menu Function */
function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}