

const formEl = document.getElementById('form-el');
const registerBtn = document.getElementById('register-btn');
//const loginBtn = document.getElementById('login-btn')
let mainData = [];


registerBtn.addEventListener('click', toRegister);

formEl.addEventListener('submit', function(e) {
  e.preventDefault();
  let loginData = {name: formEl.user.value, password: formEl.password.value};
  if (loginData.name === mainData[0].name && loginData.password === mainData[0].password) {
    console.log('yes!');
  }
  else {
    console.log('is incorrect');
  }
});



function toRegister() {
  mainData.push({name: formEl.user.value, password: formEl.password.value});
  formEl.reset();
}
