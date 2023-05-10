function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const inputAmount = document.querySelector("input");
const outputBoxes = document.querySelector("#boxes");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");

createButton.addEventListener('click', () => {
  const amount = inputAmount.value;
  if (amount !== ""){
    createBox(Number(amount));
  }else{
    alert("Введіть кількість елементів");
  }
});

destroyButton.addEventListener('click', () => {
  outputBoxes.innerHTML = "";
  inputAmount.value = "";
  lastSize = 30;
});

let lastSize = 30;

function boxGeneration(size){
const box = document.createElement("div");
box.style.width = `${size}px`;
box.style.height = `${size}px`;
box.style.borderRadius = "4px";
box.style.backgroundColor = getRandomHexColor();

return box;
};

function createBox(amount){
const boxList = [];
for (let n = 0; n < amount; n++) {
  const box = boxGeneration(lastSize);
  lastSize += 10;
  boxList.push(box);
}
outputBoxes.append(...boxList);
};

