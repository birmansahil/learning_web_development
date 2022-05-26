let firstCard = 5;
let secondCard = 11;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");

function startGame() {
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: " + cards[0] + ", " + cards[1];
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;    
}

function newCard() {
    console.log("You want to draw a new card!");
    let card = 5;
    sum += card;
    renderGame();
}

// Array is an ordered list of items 
let courses = ["HTML", "CSS", "JS", "NodeJS", "ReactJS"];

console.log(courses);

// Array's are zero indexed - meaning their item count starts from zero
console.log(courses[1]);
console.log(courses[2]);
console.log(courses[0]);

// Array are composite or complex data type they can contain different data types (primitive data types i.e. string, bollean, number) within them 
let bio = ["Mandy", 33, true];