document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector("header");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    });
  });
  