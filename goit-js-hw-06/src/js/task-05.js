const nameEl = document.querySelector("#name-input");
const textEl = document.querySelector("#name-output");
nameEl.addEventListener("input", (event) => {
  const newTextEl = event.currentTarget.value;
  if (textEl.textContent === "") {
    textEl.textContent = "Anonymous";
  } else {
    textEl.textContent = newTextEl;
  }
});
