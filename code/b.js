console.log("b.js --> loaded");

p_l = document.querySelector('.p_layer');

function trn(e) {
  pageX = e.clientX - window.innerWidth*0.5;
  pageY = e.clientY - window.innerHeight*0.5;
  p_l.style.transform = "translateX(" + (-pageX/100) + "%) " + "translateY(" + (-pageY/100) + "%)";
}

document.querySelector("body").addEventListener('mousemove', trn);
