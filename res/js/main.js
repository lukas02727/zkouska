const a = document.getElementById("ahoj");
const b = document.getElementById("button");
const c = document.getElementById("velikost");

b.onclick = () => {
    a.style.color = c.value;
    a.style.fontSize = c.value+"px";
}