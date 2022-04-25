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

// Collect Elements

function scrollTrigger(selector, options = {}) {
  const elements = Array.from(document.querySelectorAll(selector));

  elements.forEach((el) => {
    addObserver(el, options);
  });
}

function addObserver(el, options) {
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");

        observer.unobserve(entry.target);
      }
    });
  }, options);

  observer.observe(el);
}

scrollTrigger('.landing-wrapper', {
    rootMargin: '-200px',
})
scrollTrigger('.section-heading', {
    rootMargin: '-200px',
})