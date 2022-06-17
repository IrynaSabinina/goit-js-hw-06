const counterValue = document.querySelector("#value");
let counterFirst = 0;

const counter = document.querySelector("#counter");

const leftBtn = counter.firstElementChild;
leftBtn.addEventListener("click", () => {
  counterFirst -= 1;
  return (counterValue.textContent = counterFirst);
});

console.log(leftBtn);
const rightBtn = counter.lastElementChild;
rightBtn.addEventListener("click", () => {
  counterFirst += 1;
  return (counterValue.textContent = counterFirst);
});
