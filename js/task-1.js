const categories = document.querySelectorAll("#categories .js-item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
  const itemsTitle = category.querySelector("h2").textContent;
  const itemsNumber= category.querySelectorAll("ul li").length;
  
  console.log(`Category: ${itemsTitle}`);
  console.log(`Elements: ${itemsNumber}`);
});