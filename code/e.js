console.log("e.js --> loaded");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomColor() {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

dr = document.querySelectorAll(".dr");
const randomBgEls = document.querySelectorAll('.random-bg');

for (let i = 0; i < dr.length; i++) {
    dr[i].style.animationDelay = "" + (getRandomInt(250)*4) + "ms";
}

randomBgEls.forEach((el) => {
  el.style.setProperty('--random-bg-color', getRandomColor());
});