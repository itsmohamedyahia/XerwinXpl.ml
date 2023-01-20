console.log("c.js --> loaded");

const lp = document.createElement("div");
const tx = document.createElement("p");
const txl = document.createElement("p");
lp.id = "loader-page";
txl.id = "txl";
tx.innerText = "welcome to XerwinXpl website!";
txl.innerText = "its loading...";
lp.appendChild(tx);
lp.appendChild(txl);

const b = document.querySelector("body");

b.appendChild(lp);

function timed_a() {
    lp.remove();
}

setTimeout(timed_a, 2000);
