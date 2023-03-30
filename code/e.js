console.log("e.js --> loaded");
dr = document.querySelectorAll(".dr");

for (let i = 0; i < dr.length; i++) {
    dr[i].style.animationDelay = "" + (getRandomInt(250)*4) + "ms";
}
