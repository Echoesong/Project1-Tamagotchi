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

// console.log(titleEl, displayEl, buttonEls)


// <-----Event listeners----->

buttonEls[0].addEventListener('click', increaseHungerMeter)
buttonEls[1].addEventListener('click', increaseHappinessMeter)
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

function deductMeter(){
    //Below I choose an index value randomly, and the index value = amount deducted from the meter
    const deductionAmounts = [-1, -2, 1]
    // Below generates a random number between 0 and max, which is passed as an argument when func is called
    function getRandomInt(max){
        return Math.floor(Math.random() * max)
    }
    const chosenIndex = getRandomInt(3)
    const deductionValue = deductionAmounts[chosenIndex]
    
    //below, I am flipping a coin to decide if meters.hunger or meters.happiness should be affected
    let coinFlip = Math.round(Math.random())
    if(coinFlip == 0){
        meters.hunger = meters.hunger + deductionValue
        if(meters.hunger > 5){
            meters.hunger = 5
        }
    } else{
        meters.happiness = meters.happiness + deductionValue
        if(meters.happiness > 5){
            meters.happiness = 5
        }
    }
    // Have not tested the below conditional, unsure if it will trigger
    if(meters.happiness == 0 || meters.hunger == 0){
        decreaseHealth()
    }
    
}

function increaseHappinessMeter(evt){
    meters.happiness = meters.happiness + 1
    console.log(meters.happiness)
    // Should call render()
}

function increaseHungerMeter(evt){
    meters.hunger = meters.hunger + 1
    console.log(meters.hunger)
    // Should call render()
}

function decreaseHealth(){
    meters.health = meters.health - 1
}

init()

console.log(meters.hunger, meters.happiness)