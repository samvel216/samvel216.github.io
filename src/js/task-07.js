const fontSizeInputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
textEl.style.fontSize = `${fontSizeInputEl.value}px`;
const inputRange = (event) => { 
    event.preventDefault();
    textEl.style.fontSize = `${fontSizeInputEl.value}px`;
}
fontSizeInputEl.addEventListener('input', inputRange);

