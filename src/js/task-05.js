const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');
const substitute = (event) => {
    event.preventDefault();
    nameOutputEl.textContent = event.currentTarget.value;
    if (event.currentTarget.value === "" ) {
        nameOutputEl.textContent = "Anonymous";
    }
}
nameInputEl.addEventListener('input', substitute);