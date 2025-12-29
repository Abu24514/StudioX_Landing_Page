/* -------------------Navigation--------------- */
const hamburger = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li a");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  hamburger.classList.toggle("active");
});