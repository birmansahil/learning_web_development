let welcomeEl = document.getElementById("welcome-el");

let user = "Mandy";
let greeting = "Welcome back";

welcomeEl.innerText = greeting + " " + user + " " + "👋";

let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count += 1;
    countEl.innerText = count;
}

function save() {
    console.log("You clicked the save btn");
}