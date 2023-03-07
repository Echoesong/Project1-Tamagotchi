# Pseudocode/broad planning

## 1. Game is initialized, setting the default state for data (Happiness, Hunger, Health meters) & calling a render function to set up the starting graphics 
- A **main screen for the creature,** 3 buttons for interaction with said creature, and a screen that displays Happiness, Hunger, and Health meters
- **Data stored as state:** Tamagotchi meters (Happiness, Hunger, Health), Tamagotchi need trigger (i.e. a state is set which triggers a requirement to fulfill, or the Hapi/Hunger/Health will decrease)
- **DOM elements manipulated:** Main screen displaying Tamagotchi (mostly render updates), 3 buttons used to interact with the game (feed, play, clean), a side screen to display text/Tamagotchi needs/updates



## 2. Game 'kicks off,'** data starts changing which will update the DOM elements.
- **States changed here:** Tama need state, which can affect Hapi/Hunger/Health
- **DOM elements are updated**



## 3. Begin requiring user input to maintain game. 
Creature begins requiring play/feed/cleaning or else Hapi/Hunger/Health will decrease. This will compose the main gameplay loop, where the Tamagotchi needs something to be fulfilled or a meter will decrease. If meters decrease do 0, GAMEOVER state. If needs are met for enough time, VICTORY state will be Tamagotchi evolving
- **Main lift here is event listeners for the buttons**, which will update the Hapi/Hunger/Health meters and reset Tama need state
Above will **affect state**
**State will affect DOM**
**Prompt new user input**



## 4. Eventually, reach an end state.
- **GAMEOVER** = Needs are not fulfilled, Tama dies/gets sick. 
- **VICTORY** = Needs are fulfilled for enough amount of time, Tama evolves





# Daily plan: March 7

1. Create boilerplate & link elements
2. Display elements visually
3. Begin working on default state & element cache
    - **Default state needed:**
        1. Var for Tama
        2. Vars for the Tama's eventual meters
            - Hunger
            - Happiness
            - Health
        3. Victory state
            - Null
            - 1: Victory/evolution
            - -1: Failure/Tama leaves (I CAN'T KILL IT!!!)
    - **Elements to be cached:**
        1. <h1> for title screen and maybe message display
        2. <h2> for Tama display
        3. <section class="buttons"> for player input
            - Event listener to parent section (maybe not today)
        