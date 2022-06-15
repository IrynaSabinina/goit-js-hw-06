const iteam = document.querySelectorAll(".item");
console.log(`Number of categories: ${iteam.length}`);

iteam.forEach(function (category) {
  const titleRef = category.querySelector("h2");
  console.log(`Category: ${titleRef.textContent}`);
  const itemsRef = category.querySelectorAll("li");
  console.log(`Elements: ${itemsRef.length}`);
});
