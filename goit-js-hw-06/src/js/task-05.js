const nameEl = document.querySelector("#name-input");
const textEl = document.querySelector("#name-output");
nameEl.addEventListener("input", (event) => {
  const newTexrEl = event.currentTarget.value;
  return (textEl.textContent = newTexrEl);
});
