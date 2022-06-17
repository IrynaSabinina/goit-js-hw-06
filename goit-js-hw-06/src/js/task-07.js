const sizeEl = document.querySelector("#font-size-control");
// console.log(sizeEl.value);

const textEl = document.querySelector("#text");

sizeEl.addEventListener("input", fontSize);

function fontSize(event) {
  console.log(event.currentTarget.value);
  textEl.style.fontSize = event.currentTarget.value + "px";
}
