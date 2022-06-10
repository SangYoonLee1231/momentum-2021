const title = document.querySelector(".hello:first-child h1");

console.log(title);

title.innerText = "Click Me!";

console.log(title);

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
