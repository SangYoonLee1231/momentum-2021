const loginForm = document.querySelector("#login-form");

const link = document.querySelector("a");

function onLoginSubmit(event) {
  event.preventDefault();
  console.log(event);
}

function handleLinkClick(event) {
  console.log(event);
  event.preventDefault();
  alert("clicked!");
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
