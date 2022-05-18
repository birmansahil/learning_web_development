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
