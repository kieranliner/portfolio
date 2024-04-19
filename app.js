const titleElement = document.getElementById("title");
const typewriter = new Typewriter(titleElement, {
  loop: false,
  cursor: '',
});

typewriter
.pauseFor(350)
.typeString("kieran j. liner")
.start();
  

const revealDelay = 50;
ScrollReveal().reveal(".about-img", {
  delay: revealDelay,
  distance: "250px",
  origin: "left",
  easing: "ease-in",
});

ScrollReveal().reveal(".about-text", {
  delay: revealDelay,
  distance: "250px",
  origin: "right",
});

ScrollReveal().reveal(".about-heading", {
  delay: revealDelay,
  distance: "250px",
  origin: "top",
});

ScrollReveal().reveal(".footer-heading", {
    delay: revealDelay,
  distance: "500px",
  origin: "top",
});

ScrollReveal().reveal(".footer-text", {
    delay: revealDelay,
  distance: "500px",
  origin: "top",
});

ScrollReveal().reveal(".footer-button", {
    ddelay: revealDelay,
  distance: "250px",
  origin: "top",
});

ScrollReveal().reveal(".footer-icon-1", {
    delay: revealDelay,
  distance: "250px",
  origin: "bottom",
});

ScrollReveal().reveal(".footer-icon-2", {
    delay: revealDelay,
  distance: "250px",
  origin: "bottom",
});
