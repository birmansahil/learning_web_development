let welcomeEl = document.getElementById("welcome-el");

let user = "Mandy";
let greeting = "Welcome back";

welcomeEl.textContent = greeting + " " + user + " " + "👋";

let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
}

let saveEl = document.getElementById("save-el");

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    // Setting count back to zero after saving the count
    count = 0;
    countEl.textContent = count;
}