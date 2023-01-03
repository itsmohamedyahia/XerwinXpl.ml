console.log("a.js --> loaded");

e = document.querySelector("#e");
a = document.querySelector("#a");
i = document.querySelector("#i");
g = document.querySelector("#g");
h = document.querySelector("#h");

function u_e() {console.log("a.js --> u_e --> exe");}
function u_a() {console.log("a.js --> u_a --> exe");}
function u_i() {console.log("a.js --> u_i --> exe");}
function u_g() {console.log("a.js --> u_g --> exe");}
function u_h() {console.log("a.js --> u_h --> exe");}

e.addEventListener("click", u_e)
a.addEventListener("click", u_a)
i.addEventListener("click", u_i)
g.addEventListener("click", u_g)
h.addEventListener("click", u_h)
