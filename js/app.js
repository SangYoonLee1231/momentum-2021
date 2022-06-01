const title = document.querySelector(".hello:first-child h1");

console.log(title);

title.innerText = "Click Me!";

console.log(title);

function handleTitleClick() {
  console.log("Title was clicked!");
  title.style.color = "blue";
}

title.addEventListener("click", handleTitleClick);
