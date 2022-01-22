function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const controlsEl = document.querySelector('#controls');
const dataCreateEl = document.querySelector('button[data-create]');
const dataDestroyEl = document.querySelector('button[data-destroy]');
const inputControlEl = document.querySelector('input')
const boxesEl = document.querySelector('#boxes');
let stringInputValue;
const inputStringValue = (event) => {
  event.preventDefault();
  if (event.currentTarget.value >= 1 && event.currentTarget.value <= 100) {
    stringInputValue = event.currentTarget.value;
  } 
}
inputControlEl.addEventListener('input', inputStringValue);
const total = (array) => {
  array.reduce((previousValue) => {
    let newDivEl = document.createElement('div');
    boxesEl.append(newDivEl);
    newDivEl.classList.add('new-div');
    newDivEl.style.width = `${previousValue}px`;
    newDivEl.style.marginTop = "10px";
    newDivEl.style.height = `${previousValue}px`;
    newDivEl.style.backgroundColor  = getRandomHexColor();
    boxesEl.append(newDivEl);
    return previousValue += 10;
}, 30)
}
const createBoxes = (amount) => {
  let numbersArray = [];
  for (let i = 0; i < amount; i += 1) {
    numbersArray.push(i);
  }
  total(numbersArray);
}
const createColection = (event) => {
  event.preventDefault();
  const numberInputValue = Number(`${stringInputValue}`);
  createBoxes(numberInputValue);
}
dataCreateEl.addEventListener('click', createColection);
const destroyBoxes = (event) => {
  event.preventDefault();
  const allDiv = document.querySelectorAll('.new-div');
  for (const element of allDiv) {
     element.remove();
  }
}
dataDestroyEl.addEventListener('click', destroyBoxes);





