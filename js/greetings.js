const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const link = document.querySelector('a');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function handleLinkClick(event) {
  console.log(event);
  event.preventDefault();
  alert('clicked!');
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

link.addEventListener('click', handleLinkClick);

const SavedUsername = localStorage.getItem(USERNAME_KEY);

if (SavedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  // show the greetings
  paintGreetings(SavedUsername);
}
