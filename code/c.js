console.log("c.js --> loaded");

const lp = document.createElement("div");
lp.id = "loader-page";

const b = document.querySelector("body");
b.appendChild(lp);

function timed_a() {
    lp.remove();
}

setTimeout(timed_a, 2000);
