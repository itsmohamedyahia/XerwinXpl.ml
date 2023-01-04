console.log("a.js --> loaded");

const r_hex = "https://f4.bcbits.com/img/a3112523276_2.jpg";	// electronica
const r_aqua = "https://f4.bcbits.com/img/a1536174611_2.jpg";	// ambient
const r_03 = "https://f4.bcbits.com/img/a3216786508_2.jpg";	// glitch, house
const r_new = "https://f4.bcbits.com/img/a4153279772_2.jpg";	// electronica, house, ambient, hip-hop
const r_think = "https://f4.bcbits.com/img/a3340981925_2.jpg";	// electronica, house, ambient
const r_piano = "https://f4.bcbits.com/img/a2509572786_2.jpg";	// electronica
const r_s = "https://f4.bcbits.com/img/a3983760367_2.jpg";	// house, electronica
const r_tw = "https://f4.bcbits.com/img/a1300888331_2.jpg";	// electronica, house, ambient, glitch, hip-hop
const r_tiwnh = "https://f4.bcbits.com/img/a3412206100_2.jpg";	// ambient, electronica
const r_na = "https://f4.bcbits.com/img/a0933733175_2.jpg";	// hip-hop, house, electronica

electronica = [r_hex, r_new, r_think, r_piano, r_s, r_tw, r_tiwnh, r_na];
ambient = [r_aqua, r_new, r_think, r_tw, r_tiwnh];
hh = [r_new, r_na, r_tw];
glitch = [r_03, r_tw];
house = [r_03, r_new, r_think, r_s, r_tw, r_na];

function get_imgs() {
	imgs = [
	document.querySelector("#ri0 img"),
	document.querySelector("#ri1 img"),
	document.querySelector("#ri2 img"),
	document.querySelector("#ri3 img"),
	document.querySelector("#ri4 img")];}
get_imgs()

//images updates [41203]
function u_e() {get_imgs(); console.log("a.js --> u_e --> clicked"); imgs[0].outerHTML = "<img src=\"" + electronica[0] + "\">"; imgs[1].outerHTML = "<img src=\"" + electronica[5] + "\">"; imgs[2].outerHTML = "<img src=\"" + electronica[2] + "\">"; imgs[3].outerHTML = "<img src=\"" + electronica[6] + "\">"; imgs[4].outerHTML = "<img src=\"" + electronica[1] + "\">";}
function u_a() {get_imgs(); console.log("a.js --> u_a --> clicked"); }
function u_i() {get_imgs(); console.log("a.js --> u_i --> clicked"); }
function u_g() {get_imgs(); console.log("a.js --> u_g --> clicked"); }
function u_h() {get_imgs(); console.log("a.js --> u_h --> clicked"); }


//listeners
document.querySelector("#e").addEventListener("click", u_e);
document.querySelector("#a").addEventListener("click", u_a);
document.querySelector("#i").addEventListener("click", u_i);
document.querySelector("#g").addEventListener("click", u_g);
document.querySelector("#h").addEventListener("click", u_h);
