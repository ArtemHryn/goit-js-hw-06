const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();
  const inputFields = event.currentTarget.elements;
  if (inputFields.email.value && inputFields.password.value === "") {
    alert("fill in all fields");
    return;
  }
  const email = inputFields.email.value;
  const password = inputFields.password.value;
  const formData = { email, password };
  console.log(formData);
  return formData;
}
