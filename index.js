let num1 = 12
let num2 = 16
let add = num1 + num2
let multiply = num1 * num2
let substract = num1 - num2
let divide = num1 / num2

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function sum() {
  document.getElementById("sum-el").textContent = "Sum:" + " " + add
}
function multiplication() {
  document.getElementById("sum-el").textContent =
    "Multiplication:" + " " + multiply
}
function division() {
  document.getElementById("sum-el").textContent = "Division:" + " " + divide
}
function substraction() {
  document.getElementById("sum-el").textContent =
    "Substraction:" + " " + substract
}
