console.log("e.js --> loaded");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

dr = document.querySelectorAll(".dr");

for (let i = 0; i < dr.length; i++) {
    dr[i].style.animationDelay = "" + (getRandomInt(250)*4) + "ms";
}
