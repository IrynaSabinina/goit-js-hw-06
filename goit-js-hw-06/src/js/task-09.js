const divEl = document.querySelector("body");
const button = divEl.querySelector(".change-color");
const colorEl = divEl.querySelector(".color");
console.log(colorEl.textContent);

button.addEventListener("click", colorHendler);

function colorHendler() {
  let colornew = getRandomHexColor();
  console.log(colornew);
  divEl.style.backgroundColor = colornew;
  colorEl.textContent = colornew;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
