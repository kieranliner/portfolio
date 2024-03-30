const app = document.getElementById("app");
const typewriter = new Typewriter(app, {
  loop: true,
  delay: 65,
});

typewriter
  .pauseFor(550)
  .typeString("freelancing software developer")
  .pauseFor(1000)
  .changeDeleteSpeed(20)
  .deleteChars(18)
  .changeDelay(75)
  .typeString("UX/UI designer")
  .pauseFor(1000)
  .deleteAll(50)
  .typeString(
    '<strong><span style="color: #27ae60;">charistmatic dude</span></strong>'
  )
  .pauseFor(250)
  .deleteAll(10)
  .start();

ScrollReveal().reveal(".headline", {
  delay: 750,
  reset: true,
  distance: "250px",
  origin: "bottom",
  easing: "ease-in",
});

ScrollReveal().reveal(".typewriter", {
  delay: 1000,
  reset: true,
  distance: "250px",
  origin: "top",
  easing: "ease-in",
});

ScrollReveal().reveal(".about-img", {
  delay: 650,
  reset: true,
  distance: "250px",
  origin: "left",
  easing: "ease-in",
});

ScrollReveal().reveal(".about-text", {
  delay: 650,
  reset: true,
  distance: "250px",
  origin: "right",
});

ScrollReveal().reveal(".about-heading", {
  delay: 650,
  reset: true,
  distance: "250px",
  origin: "top",
});

ScrollReveal().reveal(".footer-heading", {
  delay: 650,
  reset: true,
  distance: "500px",
  origin: "top",
});

ScrollReveal().reveal(".footer-text", {
  delay: 650,
  reset: true,
  distance: "500px",
  origin: "bottom",
});

ScrollReveal().reveal(".footer-button", {
  delay: 650,
  reset: true,
  distance: "500px",
  origin: "top",
});

ScrollReveal().reveal(".footer-icon-1", {
  delay: 650,
  reset: true,
  distance: "500px",
  origin: "bottom",
});

ScrollReveal().reveal(".footer-icon-2", {
  delay: 650,
  reset: true,
  distance: "500px",
  origin: "top",
});
