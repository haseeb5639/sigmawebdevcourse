// FAULTY CALCULATOR

let a = prompt("Enter Value 1");
let operator = prompt("Enter the operator e.g. +,-,*,");
let b = prompt("Enter Value 2");

a = parseInt(a);
b = parseInt(b);

function Calculate() {

    if (operator == "+") {
        c = a + b;
    }
    else if (operator == "-") {
        c = a - b;
    }
    else if (operator == "*") {
        c = a * b;
    }
    else if (operator == "/") {
        c = a / b;
    }

    console.log(c);
}

function CalculateWrong() {

    if (operator == "+") {
        c = a - b;
    }
    else if (operator == "-") {
        c = a / b;
    }
    else if (operator == "*") {
        c = a + b;
    }
    else if (operator == "/") {
        c = a ** b;
    }

    console.log(c);
}

randomNumber = Math.random();
console.log(randomNumber);
if (randomNumber > 0.1) {
    console.log("Calculating Correct");
    Calculate();
}
else {
    console.log("Calculating Wrong");
    CalculateWrong();
}