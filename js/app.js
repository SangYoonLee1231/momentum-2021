/*
const title = document.querySelector(".hello:first-child h1");

title.innerText = "Click Me!";

function handleTitleClick() {
  console.log("Title was clicked");
  title.style.color = "blue";
}

function handleMouseEnter() {
  title.innerText = "Mouse is here";
}

function handleMouseLeave() {
  title.innerText = "Mouse is gone";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("You Copier");
}

function handleWindowOffline() {
  alert("SOS no WIFI");
}

function handleWindowOnline() {
  alert("ALL GOOOOD");
}

title.addEventListener("click", handleTitleClick);
//title.onclick = handleTitleClick;
title.addEventListener("mouseenter", handleMouseEnter);
//title.onmouseenter = handleMouseEnter;
title.addEventListener("mouseleave", handleMouseLeave);
//title.onmouseleave = handleMouseLeave;

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);
*/

const h1 = document.querySelector(".hello:first-child h1");

/*
function handleTitleClick() {
  const currentColor = h1.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
    //console.log(h1.style.color);
  } else {
    newColor = "blue";
    //console.log(h1.style.color);
  }
  h1.style.color = newColor;
}
*/

function handleTitleClick() {
  const clickedClass = "active";
  if (h1.className === clickedClass) {
    h1.className = "";
  } else {
    h1.className = clickedClass;
  }
}

h1.addEventListener("click", handleTitleClick);
