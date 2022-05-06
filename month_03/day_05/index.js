let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count = count + 1;
    countEl.innerText = count;
}

function save() {
    console.log(count);
}

// Creating strings
let username = "Mandy";

let message = "You have 3 new notifications";

let messageToUser = username + ": " + message + "!";

console.log(messageToUser);

// Creating some more strings
let myName = "Mandy";
let greetings = "Hi, my name is ";

let myGreetings = greetings + myName;

console.log(myGreetings);

// Welcome greeting
let welcomeEl = document.getElementById("welcome-el");

let user = "Mandy";
let greeting = "Welcome back ";

welcomeEl.innerText = greeting + user + "!";