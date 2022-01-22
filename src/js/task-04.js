const valueEl = document.querySelector('#value');
const decrementEl = document.querySelector('button[data-action="decrement"]');
const incrementEl = document.querySelector('button[data-action="increment"]');
let conValue = 0;
let counterValue;
const decrement = (event) => {
    event.preventDefault();
    conValue = conValue - 1;
    valueEl.textContent = conValue;
    counterValue = valueEl.textContent;
}
decrementEl.addEventListener('click', decrement);
const increment = (event) => {
    event.preventDefault();
    conValue = conValue + 1;   
    valueEl.textContent = conValue;
    counterValue = valueEl.textContent;
}
incrementEl.addEventListener('click', increment);

