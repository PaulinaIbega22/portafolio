let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Estudio Ingeniería Industrial y desarrollo sitios web.')
  .pauseFor(200)
  .deleteChars(10)
  .start();

  app.style.color = "purple";