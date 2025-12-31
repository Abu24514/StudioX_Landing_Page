/* -------------------Navigation--------------- */
const hamburger = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li a");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  hamburger.classList.toggle("active");
});

/* -------------------Gsap Animation--------------- */
// Animate text sections

// Hero section - Page load hote hi animate hoga (NO SCROLLTRIGGER)
const heroElements = document.querySelectorAll(
  "#hero-section .text-container .animate"
);
if (heroElements.length > 0) {
  gsap.from(heroElements, {
    y: 100,
    opacity: 0,
    rotation: 8,
    duration: 1.2,
    stagger: 0.15,
    ease: "power3.out",
    delay: 0.3,
  });
}

// Baaki sab sections - Scroll par animate honge
const scrollTextSections = [
  {
    section: "#work-section",
    selector: "#work-section .text-container .animate",
  },
  { section: "#brand", selector: "#brand .text-container .animate" },
  { section: "#footer", selector: "#footer .text-container .animate" },
];

scrollTextSections.forEach(({ section, selector }) => {
  const elements = document.querySelectorAll(selector);
  
  if (elements.length > 0) {
    gsap.from(elements, {
      y: 100,
      opacity: 0,
      rotation: 8,
      duration: 1.2,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 30%",
        end: "top 20%",
        toggleActions: "play none none none",
      },
    });
  }
});


/* -------------------Image Animation--------------- */
gsap.to(".image-content .overlay", {
  scrollTrigger: {
    trigger: "#image-section",
    scroller: "body",
    // markers: true,
    start: "top 10%",
    end: "bottom -40%",
    scrub: 2,
  },
  width: "85vw",
  height: "35vw",
});

/* ---------------------------- Card Animation ---------------------------- */
gsap.fromTo(
  ".pr .review-grid .item",
  {
    opacity: 0.7,
    y: 100,
  },
  {
    opacity: 1,
    y: 0,
    duration: 0.5,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".pr .review-grid",
      scroller: "body",
      start: "top 40%",
      end: "bottom 45%",
      // markers: true,
      scrub: 2,
      toggleActions: "play none none ",
    },
  }
);

  /* -------------------SVG Arrow Animation--------------- */
gsap.to("#overlaysvg path", {
    strokeDashoffset: 0,
    duration: 1.5,
    ease: "power2.inOut",
    repeat: -1,
    yoyo: true,
  });

  // Set initial stroke dasharray for animation
  const path = document.querySelector("#overlaysvg path");
  if (path) {
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
  }
  
/* ---------------------------- smooth scrolling ---------------------------- */
// Initialize Lenis
const lenis = new Lenis({
duration:6,
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);