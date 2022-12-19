
const loggedInName = JSON.parse(localStorage.getItem('loggedInName'));
const loginNameEl = document.getElementById('login-name-el');
const writerDiv = document.getElementById('writer');
const mageDiv = document.getElementById('mage');
//const writerImage = document.getElementById('writerImage');
const writerUrl = 'http://127.0.0.1:3000/p1/writer.html';
const logoutBtn = document.getElementById('logout-btn');    //copy to writer page
const loginUrl = 'http://127.0.0.1:3000/p1/';             //copy to writer page

loginNameEl.textContent = `Hello, ${loggedInName}`;



writerDiv.addEventListener('click', function() {
  console.log('going to writing page')
  window.location.href = writerUrl;
})


logoutBtn.addEventListener('click', function() {            //copy to writer page
  window.location.href = loginUrl;
  localStorage.removeItem('loggedInName');
})
