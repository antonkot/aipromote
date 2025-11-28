// JavaScript for the mobile navigation menu (hamburger)

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Add click event listener to the hamburger menu
hamburger.addEventListener("click", () => {
    // Toggle 'active' class on both hamburger and nav menu
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Add click event listener to each nav link to close the menu on click
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));