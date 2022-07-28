const input = document.querySelector("#validation-input");

input.addEventListener("blur", onCheckNumberOfDigits);

function onCheckNumberOfDigits(event) {
  const inputElements = event.currentTarget;
  if (Number(inputElements.dataset.length) === inputElements.value.length) {
    editClassList('valid', 'invalid')
    return;
  }
  editClassList("invalid", "valid");
}


function editClassList(toAdd, toRemove) {
  input.classList.remove(toRemove)
  input.classList.add(toAdd);
}