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

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
