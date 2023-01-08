console.log("b.js --> loaded");

p_l = document.querySelector('.p_layer');

function trn(e) {
	pageX = e.clientX - window.innerWidth*0.5;
	pageY = e.clientY - window.innerHeight*0.5;
  p_l.style.transform = 'translateX(-' + (50 + pageX/200) + '%) translateY(-' + (50 + pageY/200) + '%)';
}

p_l.addEventListener('mousemove', trn(e));
