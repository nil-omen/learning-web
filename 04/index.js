const button1 = document.getElementById("roll");
const rollLabel = document.getElementById("rollLabel");

const min = 1;
const max = 6;
let randomNum;

button1.onclick = function () {
    randomNum = Math.floor(Math.random() * max) + min;
    rollLabel.textContent = randomNum;
}