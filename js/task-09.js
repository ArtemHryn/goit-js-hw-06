function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector('body'),
  colorName: document.querySelector(".color"),
  changeColorBtn: document.querySelector(".change-color"),
};

refs.changeColorBtn.addEventListener("click", onChangeColor);

function onChangeColor() {
  const color = getRandomHexColor();
  refs.colorName.textContent = `${color}`;
  refs.body.style.backgroundColor = `${color}`;
}
