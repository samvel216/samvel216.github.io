const inputEl = document.querySelector('#validation-input');
const dataLength = inputEl.getAttribute('data-length');
let inputLength;
let numberDataLength = 0;
for (let i = 0; i < dataLength; i += 1) {
    numberDataLength += 1;
}
console.log(numberDataLength);
const inputFocus = (event) => {
    event.preventDefault();
}
const inputBlur = (event) => {
    event.preventDefault();
    if (event.currentTarget.value.length === numberDataLength) {   
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } else {
        inputEl.classList.remove('valid');
         inputEl.classList.add('invalid');
    }
}
inputEl.addEventListener('focus', inputFocus);
inputEl.addEventListener('blur', inputBlur);

