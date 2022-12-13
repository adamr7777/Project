
const loggedInName = JSON.parse(localStorage.getItem('loggedInName'));
const loginNameEl = document.getElementById('login-name-el');


loginNameEl.textContent = `Hello, ${loggedInName}`;
