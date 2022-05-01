// Toggle nav button
const navBtn = document.querySelector(".nav-btn"),
  navList = document.querySelector(".nav-list");

let isToggle = false;
navBtn.addEventListener("click", () => {
  if (!isToggle) {
    navBtn.classList.add("rotate");
    navList.classList.add("show");
    isToggle = true;
  } else {
    navBtn.classList.remove("rotate");
    navList.classList.remove("show");
    isToggle = false;
  }
});

const navBar = document.querySelector(".navbar"),
  pageHeader = document.querySelector(".page-header");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    navBar.style.height = "60px";
    pageHeader.classList.add("active");
  } else {
    navBar.style.height = "";
    pageHeader.classList.remove("active");
  }
});

// Screen shots slide show
const slidesContainer = document.querySelector(".screen-shots-slider"),
  slides = Array.from(document.querySelectorAll(".slide")),
  dots = Array.from(document.querySelectorAll(".dot"));

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    const currentSlide = document.querySelector(".current"),
        currentDot = document.querySelector('.current-dot');
    // rmove current classc
    currentSlide.classList.remove("current");
    currentDot.classList.remove("current-dot");
    // add current class
    slides[index].classList.add('current');
    dots[index].classList.add('current-dot');

  });
});

// Loading
const loading = document.querySelector('.loading');
window.addEventListener('load', () => loading.style.display = "none");