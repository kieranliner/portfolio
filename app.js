const app = document.getElementById("app");
const typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(500)
  .typeString("software developer")
  .pauseFor(2500)
  .deleteAll()
  .typeString("stoic")
  .deleteAll()
  .pauseFor(2500)
  .typeString("ux/ui designer")
  .pauseFor(2500)
  .start();
