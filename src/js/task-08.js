const loginFormEl = document.querySelector('.login-form');
const sendEmailPass = (event) => {
    event.preventDefault();
    const {email, password } = event.currentTarget;
    if (email.value === "" || password.value === "") {
     return   alert("Внимание! Это предупреждение! Не все поля заполнены!")
    }
    const object = {
        email: `${email.value}`,
        password: `${password.value}`
    }
    console.log(object);
    event.currentTarget.reset();
}
loginFormEl.addEventListener('submit', sendEmailPass);



  

