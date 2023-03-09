console.log("Scripts read");

// <-----Default global variables----->


const tamagotchi = {}
const meters = {}
let victory = null

// Put a testStr in tamagotchi and victory if you want to display them in console
// console.log(tamagotchi, meters, victory)

// <-----Cached DOM elements----->

const titleEl = document.querySelector("h1");
const displayEl = document.querySelector("h2");
const buttonEls = document.querySelectorAll("div.buttons"); //If you are going to manipulate this, turn it into an array
const meterEls = document.querySelectorAll("div.meters")




// console.log(titleEl, displayEl, buttonEls)


// <-----Event listeners----->

// buttonEls[0].addEventListener('click', increaseHungerMeter)
// buttonEls[1].addEventListener('click', increaseHappinessMeter)
// <-----Functions----->

// Icebox refactor: deductMeter should really just be a function called game()

function init(){
    console.log("Initializing...")

    // Initial values set below:

    // Not sure what I'll do with this, but I think in the future I'll want a Tamagotchi object, so initializing that below
    tamagotchi.status = 1
    // Below meters will be used to affect state of Tamagotchi
    meters.hunger = 5
    meters.happiness = 5
    meters.health = 3
    // if value = 0 nullWin, -1 = failure, 1 = victory
    victory = 0 
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
    // Second part of conditional is meant to prevent the meter deduction from triggering if values are already at 0
    if(coinFlip == 0 && meters.hunger > 0){
        meters.hunger = meters.hunger + deductionValue
        // Below if statements are meant to prevent edge cases where meter values are higher than 5 or less than 0
        if(meters.hunger > 5){
            meters.hunger = 5
        }
        if(meters.hunger < 0){
            meters.hunger = 0
        }
    } else if (coinFlip == 1 && meters.happiness > 0){
        meters.happiness = meters.happiness + deductionValue
        if(meters.happiness > 5){
            meters.happiness = 5
        }
        if(meters.happiness < 0){
            meters.happiness = 0
        } 
    }
    if(meters.happiness == 0 || meters.hunger == 0){
        decreaseHealth()
    }
    console.log(meters.hunger, meters.happiness, meters.health)
    // call endCounter function here, I think
    endCounter()
    render()
    if(meters.health !== 0 && victory < 4){
        setTimeout(deductMeter, 1000)
    }
    if(meters.happiness > 5 || meters.hunger > 5 || meters.happiness < 0 || meters.hunger < 0 || meters.health < 0){
        console.log("Error in deductMeter function")
    } else if(meters.health == 0){
        console.log("deductMeter recursion terminated")}
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

function endCounter(){
    
    if(meters.health <= 0){
        console.log("Game Over")
    }
    if(meters.happiness > 4 && meters.hunger > 4){
        victory = victory + 1
        if(victory >= 3){
            console.log("You win! Your Tamagotchi loves you")
        }
    }
}

function render(){
    meterEls[0].innerHTML = `Happiness: ${meters.happiness}/5`
    meterEls[1].innerHTML = `Hunger: ${meters.hunger}/5`
    meterEls[2].innerHTML = `Health: ${meters.health}/5`
}
init()
setTimeout(5000, deductMeter())

