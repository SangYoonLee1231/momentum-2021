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
/*
function handleTitleClick() {
  const clickedClass = "active";
  if (h1.className === clickedClass) {
    h1.className = "";
  } else {
    h1.className = clickedClass;
  }
}
*/

function handleTitleClick() {
  const clickedClass = "clicked";
  if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
  } else {
    h1.classList.add(clickedClass);
  }
}

h1.addEventListener("click", handleTitleClick);
