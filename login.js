

const formEl = document.getElementById('form-el');
const registerBtn = document.getElementById('register-btn');
const paraEl = document.getElementById('welcome');
//const loginBtn = document.getElementById('login-btn')



registerBtn.addEventListener('click', toRegister);

formEl.addEventListener('submit', function(e) {
  e.preventDefault();
  const message = 'You are now signed in.'
  let loginData = {name: formEl.user.value, password: formEl.password.value};
  const mainData = JSON.parse(localStorage.getItem('mainData'));
  for (let element of mainData) {
    if (loginData.name === element.name && loginData.password === element.password) {
      paraEl.textContent = message;
      let loggedInName = element.name; //export to main.js
      localStorage.setItem('loggedInName', JSON.stringify(loggedInName));
    }
    else {
      //let the c know that password or username is incorrect
    }}
});



function toRegister() {
  let registerData = [];
  const mainData = JSON.parse(localStorage.getItem('mainData'));
  for (let element of mainData) {
    registerData.push(element);
  }
  registerData.push({name: formEl.user.value, password: formEl.password.value});
  localStorage.setItem('mainData', JSON.stringify(registerData));
  formEl.reset();
  window.location.reload();

}