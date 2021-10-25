const title = document.querySelector(".hello h1");
// const title = document.getElementById("hello");

console.dir(title);

// console.log(title);
// title.style.color = "blue";

function handleTitleClick() {
  title.style.color = "blue";
  console.log("title was clicked");
}

function handleMouseEnter() {
  title.innerText = "Mouse is here!";
  console.log("mouse is here!");
}

function handleMouseLeave() {
  title.innerText = "Mouse is gone!";
  console.log("mouse is gone!");
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
