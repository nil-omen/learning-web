const PI = 3.14159;
let radius;
let circumference;


document.getElementById("button1").onclick = function () {
    radius = document.getElementById("input1").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("p2").textContent = `The circumference is ${circumference}`;
}
