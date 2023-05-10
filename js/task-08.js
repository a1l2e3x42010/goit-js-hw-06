const form = document.querySelector(".login-form");


function handleSubmit(event) {
  event.preventDefault();

  const formData = {};

  const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Всі поля повинні бути заповнені!");
  } else {
    formData.email = email.value;
    formData.password = password.value;
    
    event.currentTarget.reset();
    
    console.log(formData);
  }
}

form.addEventListener("submit", handleSubmit);
