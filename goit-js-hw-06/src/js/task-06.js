const inputRef = document.querySelector("#validation-input");

console.log(inputRef);
const lengthEl = Number(inputRef.dataset.length);
console.log(lengthEl);

inputRef.addEventListener("blur", (event) => {
  const text = event.currentTarget.value;
  console.log(text.length);
  console.log(lengthEl);
  if (text.length === lengthEl) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
});

// inputRef.classList.add("invalid");
// console.log(inputRef);
// const lengthEl = inputRef.dataset.length;
// console.log(lengthEl);

// inputRef.addEventListener("blur", (event) => {
//   const text = event.currentTarget.value;
//   console.log(text.length);
//   console.log(lengthEl);
//   if (text.length == lengthEl) {
//     inputRef.classList.replace("invalid", "valid");
//   } else {
//     inputRef.classList.replace("valid", "invalid");
//   }
// });
