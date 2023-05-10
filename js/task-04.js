const valueEl = document.querySelector('#value');
const bthIncrement = document.querySelector('[data-action="increment"]');
const bthDecrement = document.querySelector('[data-action="decrement"]');

let counterValue = 0;

function updateUI() {
  valueEl.textContent = counterValue;
}

bthIncrement.addEventListener('click', () => {
  counterValue += 1;
  updateUI();
});

bthDecrement.addEventListener('click', () => {
  counterValue -= 1;
  updateUI();
});