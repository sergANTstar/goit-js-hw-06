
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const color = document.querySelector(".color");


const button = document.querySelector(".change-color");

button.addEventListener("click", changeColor);

function changeColor() {
  const randomColor = getRandomHexColor()
  document.body.style.background = randomColor;
  color.textContent = randomColor;
}