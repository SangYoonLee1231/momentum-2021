//const loginForm = document.querySelector("#login-form");
//const loginInput = loginForm.querySelector("input");
//const loginButton = loginForm.querySelector("button");

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function handleLoginBtnClick() {
  /*
  const username = loginInput.value;
  if (username === "") {
    alert("< Please Write Your Name >");
  } else if (username.length > 15) {
    alert("Your Name is TOO LONG");
  } else {
    alert(username);
  }
  */
}

loginButton.addEventListener("click", handleLoginBtnClick);
