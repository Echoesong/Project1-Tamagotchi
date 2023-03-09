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
const consoleEl = document.querySelector("#console")






// console.log(titleEl, displayEl, buttonEls)


// <-----Event listeners----->

buttonEls[0].addEventListener('click', increaseHappinessMeter)
buttonEls[1].addEventListener('click', increaseHungerMeter)
// <-----Functions----->

// Icebox refactor: deductMeter should really just be a function called game()

function init(){
    console.log("Initializing...")

    // Initial values set below:

    // Not sure what I'll do with this, but I think in the future I'll want a Tamagotchi object, so initializing that below
    tamagotchi.name = `Pixel`
    tamagotchi.message = `Hello! I'm ${tamagotchi.name}`
    // Below meters will be used to affect state of Tamagotchi
    meters.hunger = 5
    meters.happiness = 5
    meters.health = 3
    // if value = 0 nullWin, -1 = failure, 1 = victory
    victory = 0 
    
    render()
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
        tamagotchi.message = `I wanna eat!`
        render()
    } else if (coinFlip == 1 && meters.happiness > 0){
        meters.happiness = meters.happiness + deductionValue
        if(meters.happiness > 5){
            meters.happiness = 5
        }
        if(meters.happiness < 0){
            meters.happiness = 0
        } 
        tamagotchi.message = `Will you play with me?`
        render()
    }
    if(meters.happiness == 0 || meters.hunger == 0){
        decreaseHealth()
    }
    // console.log(meters.hunger, meters.happiness, meters.health)
    // call endCounter function here, I think
    endCounter()
    render()
    if(meters.health !== 0 && victory != 3){
        setTimeout(deductMeter, 7000)
    }
    if(meters.happiness > 5 || meters.hunger > 5 || meters.happiness < 0 || meters.hunger < 0 || meters.health < 0){
        console.log("Error in deductMeter function")
    } else if(meters.health == 0){
        console.log("deductMeter recursion terminated")}
}

function increaseHappinessMeter(evt){
    meters.happiness = meters.happiness + 1
    if(meters.happiness > 5){
        tamagotchi.message = "Your Tamagotchi doesn't want to play any more!"
        renderMessage()
        meters.happiness = 5
    } else{
        tamagotchi.message = "Yay! That was fun"
    }
    // console.log(meters.happiness)
    render()
}

function increaseHungerMeter(evt){
    meters.hunger = meters.hunger + 1
    if(meters.hunger > 5){
        tamagotchi.message = 'Your Tamagotchi is too full!'
        renderMessage()
        meters.hunger = 5
    } else{
        tamagotchi.message = "Yum! That was tasty"
    }
    // console.log(meters.hunger)
    render()
}

function decreaseHealth(){
    meters.health = meters.health - 1
    tamagotchi.message = `${tamagotchi.name} doesn't feel so good...`
    render()
}

function endCounter(){
    
    if(meters.health <= 0){
        tamagotchi.message = "Game over"
        render()
    }
    if(meters.happiness > 4 && meters.hunger > 4){
        victory = victory + 1
        if(victory >= 3){
            tamagotchi.message = `You win! ${tamagotchi.name} loves you!`
            render()
        }
    }
}

function render(){
    renderMeters()
    renderMessage()
    renderExpression(' \^-^/')
}

function renderMeters(){
    meterEls[0].innerHTML = `Happiness: ${meters.happiness}/5`
    meterEls[1].innerHTML = `Hunger: ${meters.hunger}/5`
    meterEls[2].innerHTML = `Health: ${meters.health}/3`
}

function renderMessage(){
    consoleEl.innerHTML = `${tamagotchi.message}`
}
function renderExpression(expression){
    displayEl.innerHTML = `${expression}`
}
init()

// setTimeout(5000, deductMeter())


