

//Variables

const formEl = document.getElementById('form-el');
const registerBtn = document.getElementById('register-btn');
const paraEl = document.getElementById('welcome');
const mainPage = 'http://127.0.0.1:3000/a_p1/mainPage.html';
//const loginBtn = document.getElementById('login-btn');



//Event Listeners

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
      window.location.href = mainPage;
    }
    else {
      //let the c know that password or username is incorrect
    }}
});



//Functions

function toRegister() {
  let registerData = [];
  if (JSON.parse(localStorage.getItem('mainData'))) {
    const mainData = JSON.parse(localStorage.getItem('mainData'));
    for (let element of mainData) {
      registerData.push(element);
    }
    registerData.push({name: formEl.user.value, password: formEl.password.value, diary:``,});
    localStorage.setItem('mainData', JSON.stringify(registerData));
    formEl.reset();
    //window.location.reload();
    const registerMsg = 'Registration successful, please log in';
    paraEl.textContent = registerMsg;
  }
  else {
    registerData.push({name: formEl.user.value, password: formEl.password.value, diary:``,});
    localStorage.setItem('mainData', JSON.stringify(registerData));
    formEl.reset();
    //window.location.reload();
    const registerMsg = 'Registration successful, please log in';
    paraEl.textContent = registerMsg;
  }
}
