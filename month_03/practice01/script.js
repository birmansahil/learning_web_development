let fullnameEl = document.getElementById("fullname-el");
let fname = "Mandy";
let lname = "Yuduski";
let greetings = "Hi there";

let fullname = fname + " " + lname;

fullnameEl.textContent = fullname;

function greetMandy() {
    console.log(greetings + ", " + fname + "!");
}

greetMandy();

// Point game

let myPoints = 3;

function add3Points() {
    myPoints += 3;
}

function remove1Point() {
    myPoints -= 1;
}

add3Points();
remove1Point();
add3Points();
add3Points();
remove1Point();

console.log(myPoints);

// Try to predict what each of the lines will log out
console.log("2" + 2) // 22
console.log(11 + 7) // 18
console.log(6 + "5") // 65
console.log("My points: " + 5 + 9) // My points: 59
console.log(2 + 2) // 4
console.log("11" + "14") // 1114

// Display error message

let errorEl = document.getElementById("error-el");

function purchase() {
    errorEl.textContent = "Something went wrong, please try again";
}

// Mathematics operations

let num1 = 8;
let num2 = 2;
let result = document.getElementById("result-el");

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

function add() {
    result.textContent = "Result: "+ (num1 + num2);
}

function subtract() {
    result.textContent = "Result: "+ (num1 - num2);
}

function multiply() {
    result.textContent = "Result: "+ (num1 * num2);
}

function divide() {
    result.textContent = "Result: "+ (num1 / num2);
}