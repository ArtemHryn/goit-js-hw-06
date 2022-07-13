const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = (list) => {
  return list.map((ingredient) => {
    const listEl = document.createElement("li");
    listEl.textContent = ingredient;
    listEl.classList.add('item')
    return listEl
  });
};

const ingredientsEl = ingredientsList(ingredients)
const ingredientCollection = document.querySelector("#ingredients");
ingredientCollection.append(...ingredientsEl)