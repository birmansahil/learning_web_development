// Declaring a countdown function
function countdown() {
    console.log(5);
    console.log(4);
    console.log(3);
    console.log(2);
    console.log(1);
}

// Calling the function
countdown();

// Declaring another function
function fortytwo() {
    console.log(42);
}

fortytwo();

// Declaring the third function
let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

function totalLapTime() {
    console.log(lap1 + lap2 + lap3);
}

totalLapTime();

// Declaring yet another function
let lapsCompleted = 0;

function incrementLap() {
    lapsCompleted = lapsCompleted + 1;
}

incrementLap();
incrementLap();
incrementLap();

console.log(lapsCompleted);

// Coming back to our counter
let countEl = document.getElementById("count-el");

let count = 0;

function increment() {
    count = count + 1;
    countEl.innerText = count;
}
