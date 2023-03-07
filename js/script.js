console.log("Scripts read");

// <-----Default global variables----->


const tamagotchi = {}
const meters = {}
const victory = {}

// Put a testStr in tamagotchi and victory if you want to display them in console
// console.log(tamagotchi, meters, victory)

// <-----Cached DOM elements----->

const titleEl = document.querySelector("h1");
const displayEl = document.querySelector("h2");
const buttonEls = document.querySelectorAll("div"); //If you are going to manipulate this, turn it into an array

console.log(titleEl, displayEl, buttonEls)

// <-----Functions----->

function init(){
    console.log("Initializing...")

    // Initial values set below:

    // Not sure what I'll do with this, but I think in the future I'll want a Tamagotchi object, so initializing that below
    tamagotchi.status = 1
    // Below meters will be used to affect state of Tamagotchi
    meters.hunger = 5
    meters.happiness = 5
    meters.health = 5
    // if value = 0 nullWin, -1 = failure, 1 = victory
    victory.value = 0 
    // console.log(meters)
}

init()
