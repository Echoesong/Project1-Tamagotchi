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
const resetEl = document.querySelector('button')






// console.log(titleEl, displayEl, buttonEls)


// <-----Event listeners----->

buttonEls[0].addEventListener('click', increaseHappinessMeter)
buttonEls[1].addEventListener('click', increaseHungerMeter)
resetEl.addEventListener('click', init)
// <-----Functions----->

// Icebox refactor: game should really just be a function called game()

function init(){
    console.log("Initializing...")

    // Initial values set below:

    
    tamagotchi.name = `Pixel`
    tamagotchi.message = `Hello! I'm ${tamagotchi.name}`
    tamagotchi.expression = `\\^-^/`
    // Below meters will be used to affect state of Tamagotchi
    meters.hunger = 5
    meters.happiness = 5
    meters.health = 3
    meters.love = 0
    
    render()
    // setTimeout(game, 7000)
    // console.log(meters)
}

function game(){
    //Below I choose an index value randomly, and the index value = amount deducted from the meter
    const deductionAmounts = [-1, -2, -1, -1]
    // Below generates a random number between 0 and max, which is passed as an argument when func is called
    function getRandomInt(max){
        return Math.floor(Math.random() * max)
    }
    const chosenIndex = getRandomInt(4)
    const deductionValue = deductionAmounts[chosenIndex]
    
    //below, I am flipping a coin to decide if meters.hunger or meters.happiness should be affected
    let coinFlip = Math.round(Math.random())
    // Second part of conditional is meant to prevent the meter deduction from triggering if values are already at 0
    if(coinFlip == 0 && meters.hunger > 0){
        meters.hunger = meters.hunger + deductionValue
        console.log(`hunger deducted. hunger value: ${meters.hunger}`)
        // Below if statements are meant to prevent edge cases where meter values are higher than 5 or less than 0
        if(meters.hunger > 5){
            meters.hunger = 5
        }
        if(meters.hunger < 0){
            meters.hunger = 0
        }
        tamagotchi.message = `Can I have some food?`
        tamagotchi.expression = `0w0`
        
    } else if (coinFlip == 1 && meters.happiness > 0){
        meters.happiness = meters.happiness + deductionValue
        console.log(`happiness deducted. happiness value: ${meters.happiness}`)
        if(meters.happiness > 5){
            meters.happiness = 5
        }
        if(meters.happiness < 0){
            meters.happiness = 0
        } 
        tamagotchi.message = `Will you play with me?`
        tamagotchi.expression = `UwU`
        
    }
    if(meters.happiness == 0 || meters.hunger == 0){
        decreaseHealth()
    }
    // console.log(meters.hunger, meters.happiness, meters.health)
    // call endCounter function here, I think
    endCounter()
    render()
    if(meters.health !== 0 && victory != 3){
        setTimeout(game, 7000)
    }
    if(meters.happiness > 5 || meters.hunger > 5 || meters.happiness < 0 || meters.hunger < 0 || meters.health < 0){
        console.log("Error in game function")
    } else if(meters.health == 0){
        console.log("game recursion terminated")}
}

function increaseHappinessMeter(evt){
    meters.happiness = meters.happiness + 1
    if(meters.happiness > 5){
        tamagotchi.message = "Your Tamagotchi doesn't want to play any more!"
        
        tamagotchi.expression = `*-_-`
        meters.happiness = 5
    } else{
        tamagotchi.message = "Yay! That was fun"
        tamagotchi.expression = `\\^-^7`

    }
    // console.log(meters.happiness)
    render()
}

function increaseHungerMeter(evt){
    meters.hunger = meters.hunger + 1
    if(meters.hunger > 5){
        tamagotchi.message = 'Your Tamagotchi is too full!'
        tamagotchi.expression = `-_-'`
        meters.hunger = 5
    } else{
        tamagotchi.message = "Yum! That was tasty"
        tamagotchi.expression = `^0^`
    }
    // console.log(meters.hunger)
    render()
}

function decreaseHealth(){
    meters.health = meters.health - 1
    tamagotchi.message = `${tamagotchi.name} doesn't feel so good...`
    tamagotchi.expression = `;-;`
    render()
}

function endCounter(){
    
    if(meters.health <= 0){
        tamagotchi.message = "Game over"
        tamagotchi.expression = `x_x`
        render()
    }
    if(meters.happiness > 3 && meters.hunger > 3){
        meters.love += 1
        console.log(meters.love)
        if(meters.love >= 3){
            tamagotchi.message = `You win! ${tamagotchi.name} loves you!`
            tamagotchi.expression = `<3 \\^-^/ <3`
            render()
        }
    }
}

function render(){
    renderMeters()
    renderMessage()
    renderExpression()
}

function renderMeters(){
    meterEls[0].innerHTML = `Happiness: ${meters.happiness}/5`
    meterEls[1].innerHTML = `Hunger: ${meters.hunger}/5`
    meterEls[2].innerHTML = `Health: ${meters.health}/3`
    meterEls[3].innerHTML = `Love: ${meters.love}/3`
}

function renderMessage(){
    consoleEl.innerHTML = `${tamagotchi.message}`
}
function renderExpression(){
    
    displayEl.innerHTML = `${tamagotchi.expression}`
}
init()





