const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let startChangeColor = () => {
  console.log('start');
  changeId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
  buttonStart.disabled = true;
};
let stopChangeColor = () => {
  buttonStart.disabled = false;
  clearInterval(changeId);
};

buttonStart.addEventListener('click', startChangeColor);

buttonStop.addEventListener('click', stopChangeColor);
