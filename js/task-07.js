const refs = {
  controller: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

refs.controller.addEventListener('input', onFontSizeChange)

function onFontSizeChange(event) {
    refs.text.style.fontSize = `${event.currentTarget.value}px`;
}