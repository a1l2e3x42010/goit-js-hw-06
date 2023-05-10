const inputRange = document.querySelector('#font-size-control'); 
const inputText = document.querySelector('#text'); 

inputRange.value = Number(inputRange.getAttribute("min"));

inputRange.addEventListener("input", () => {
 inputText.style.fontSize = `${inputRange.value}px`;
});