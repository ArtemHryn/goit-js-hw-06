const listEl = document.querySelector("ul#categories");

const categoriesCalc = (list) => {
  return list.querySelectorAll(".item").length
};

console.log("Number of categories: ", categoriesCalc(listEl));

const categotyName = (list) => {
    const categoriesList = list.querySelectorAll(".item")
    categoriesList.forEach(item => {
    console.log("Category:", item.querySelector("h2").textContent);
    console.log("Elements:", item.querySelectorAll("ul li").length);
    });
}

categotyName(listEl)