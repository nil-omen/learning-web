console.log("Hello World");
document.getElementById("myH1").textContent = "Hello There!";
console.log(document.getElementById("p1").textContent + " This is a test");
// alert("This is an alert");

let x = 123
let y = "Nice"
console.log(typeof x)
console.log(typeof y)

const pi = 3.14159
console.log(`${y} to meet you`)

console.log("-------------")

document.getElementById("p2").textContent = `testing 'typeof' of x ${typeof x}`;

let happy = false

document.getElementById("p3").textContent = `This is a the type of happy ${typeof happy}`;

console.log("-------------")

let count = 14
count = count ** 3  // exponentiation

console.log(count)

console.log("-------------")

// let username = window.prompt("Enter your name")
// document.getElementById("p4").textContent = `Hello ${username}`

let name1;
document.getElementById("button1").onclick = function () {
    name1 = document.getElementById("input1").value;
    document.getElementById("p4").textContent = `Hello ${name1}`;
}

let age = window.prompt("How old are you?")
age = Number(age);
age++;
console.log(`You are a year younger than ${age}`);