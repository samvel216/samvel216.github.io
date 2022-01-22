function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const chacheColorEl = document.querySelector('.change-color');
const spanColorEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');
const chacheColorBody = (event) => {
  event.preventDefault();
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanColorEl.textContent = bodyEl.style.backgroundColor;
}
chacheColorEl.addEventListener('click', chacheColorBody);