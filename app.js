/*
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
*/
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
  const username = loginInput.value;
  /*
  if (username === "") {
    alert("Please write your name");
  } else if (username.length > 15) {
    alert("Your name is too long!");
  } else {
    console.log("hello " + loginInput.value);
  }
  console.log("click");
  */
  console.log(username);
}

loginButton.addEventListener("click", onLoginBtnClick);
