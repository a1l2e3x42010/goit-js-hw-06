const inputName = document.querySelector('#name-input');
  const outputName = document.querySelector('#name-output');
  const USER_DEFAULT = "Anonymous";
  


  inputName.addEventListener('input', (e) => {
if (e.currentTarget.value !== "") {
  outputName.textContent = e.currentTarget.value;
    } else {
      outputName.textContent = USER_DEFAULT;
    }
  });
