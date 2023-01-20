console.log("b.js --> loaded");

p_l = document.querySelector(".p_layer");
p_bg = document.querySelector("#top");

function trn(e) {
  pageX = e.clientX - window.innerWidth*0.5;
  pageY = e.clientY - window.innerHeight*0.5;
  p_l.style.transform = "translateX(" + (-pageX/100) + "%) " + "translateY(" + (-pageY/100) + "%)";
  p_bg.style.backgroundPosition = "" + -pageX/150 + "%" + -pageY/150 + "%"
}

document.querySelector("body").addEventListener('mousemove', trn);
