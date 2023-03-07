console.log("Scripts read")


// <-----Default global variables----->

let tamagotchi
let meters = {
    hunger: 'hunger string',
    happiness: 'happiness string',
    health: 'health string',
}
let victory = {}

// Put a string in tamagotchi and victory if you want to display them in console 
// console.log(tamagotchi, meters, victory)

// <-----Cached DOM elements----->

const titleEl = document.querySelector('h1')
const displayEl = document.querySelector('h2')
const buttonEls = document.querySelectorAll('button')

console.log(titleEl, displayEl, buttonEls)