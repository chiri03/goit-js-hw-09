function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const startButton = document.querySelector('button[data-start]');
const stoptButton = document.querySelector('button[data-stop]');

let randomColorChange = null;

startButton.addEventListener('click', () => {
  randomColorChange = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  startButton.disabled = true;
  stoptButton.disabled = false;
});
stoptButton.addEventListener('click', () => {
  clearInterval(randomColorChange);

  stoptButton.disabled = true;
  startButton.disabled = false;
});
