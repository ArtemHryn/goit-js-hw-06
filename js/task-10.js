const refs = {
  boxesContainer: document.querySelector("#boxes"),
  createBtn: document.querySelector("[data-create]"),
  clearBtn: document.querySelector("[data-destroy]"),
  input: document.querySelector("#controls > input"),
  width: 30,
  height: 30,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.createBtn.addEventListener("click", onCreateBoxes);
refs.clearBtn.addEventListener("click", onClearBoxesContainer);

function onCreateBoxes() {
  const boxes = createBoxes(refs.input.value);
  refs.boxesContainer.append(...boxes);
}

function createBoxes(amount) {
  const colorSet = [];
  for (let i = 0; i < amount; i += 1) {
    colorSet.push(getRandomHexColor());
  }
  return colorSet.map((element) => {
    const box = document.createElement("div");
    box.style.width = `${refs.width}px`;
    box.style.height = `${refs.height}px`;
    box.style.backgroundColor = element;
    box.style.marginBottom = "20px";
    refs.width += 10;
    refs.height += 10;
    return box;
  });
}

function onClearBoxesContainer() {
  refs.boxesContainer.innerHTML = "";
  refs.width = 30;
  refs.height = 30;
}
