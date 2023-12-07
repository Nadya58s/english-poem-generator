/** @format */

function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: " BleBlaBlaBla Poem",
    autoStart: true,
    delay: 1,
    cursor: ",",
  });

  poemElement.innerHTML = " bla bla bla poem";
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
