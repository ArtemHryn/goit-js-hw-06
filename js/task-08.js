const form = document.querySelector(".login-form");
form.addEventListener("submit", onSubmitForm);

function onSubmitForm(event) {
  const email = inputFields.email.value;
  const password = inputFields.password.value;
  event.preventDefault();
  const inputFields = event.currentTarget.elements;
  if (inputFields.email.value || inputFields.password.value === "") {
    alert("fill in all fields");
    return;
  }

  const formData = { email, password };
  console.log(formData);
  event.currentTarget.reset();
}
