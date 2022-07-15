const input = document.querySelector("#validation-input");

input.addEventListener("blur", onCheckNumberOfDigits);

function onCheckNumberOfDigits(event) {
  const inputElements = event.currentTarget;
  if (Number(inputElements.dataset.length) === inputElements.value.length) {
    input.classList.remove("invalid");
    input.classList.add("valid");
    return;
  }
  input.classList.remove("valid");
  input.classList.add("invalid");
}
