console.log("Scripts read");

// <-----Default global variables----->

let tamagotchi;
let meters = {
  hunger: "hunger string",
  happiness: "happiness string",
  health: "health string",
};
let victory = {};

// Put a string in tamagotchi and victory if you want to display them in console
// console.log(tamagotchi, meters, victory)

// <-----Cached DOM elements----->

const titleEl = document.querySelector("h1");
const displayEl = document.querySelector("h2");
const buttonEls = document.querySelectorAll("div"); //If you are going to manipulate this, turn it into an array

console.log(titleEl, displayEl, buttonEls)

// <-----Functions----->

function init(){
    console.log("Initializing...")
}

init()
