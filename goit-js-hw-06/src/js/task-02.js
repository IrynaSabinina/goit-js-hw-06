const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listElement = document.querySelector("#ingredients");

const itemsList = ingredients.map(function (ingredient) {
  const list = document.createElement("li");
  list.textContent = ingredient;
  return list;
});
listElement.append(...itemsList);
