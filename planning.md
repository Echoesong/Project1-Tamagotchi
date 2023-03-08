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

**Update:** Finished these quickly, going to play around with styling

**Plan/pseudocode for next steps:**

1. Set some kind of state on the Tamagotchi to trigger a 'need'
    - Possible route: Make it so after x amt of time elapses (10 sec?) a random roll on an array is triggered. Value on array affects meter values (makes them decrease)
    - Above is a Function(), needs to be written. If(x time elapses){roll on array, deduct roll from meter value}
2. Based on state change from above Function() use meter values to affect Tamagotchi (i.e. increase meters again). when increaseValue() is called, increase meter values by X amount
3. Event listeners to affect data on the js side. Button will call increaseValue() function above
4. Render() function to affect DOM display

**completion of above is likely MVP, don't stretch yourself too far too fast**

# Daily plan: March 8

1. Tamagotchi need triggers
    - Per above, when called function will roll on an array, and the value will be deducted from Hunger or Happiness
        -To determine which meter is decreased, roll on another array with 2 values, one value corresponds to Hunger, the other to Happiness.
2. Tamagotchi meter increase:
    - When function is called, a value (static? random val from 1-2/1-3?), value will be added to Hunger or Happiness
3. Tamagotchi health decrease:
    - When called, health is decreased by 1

**Update:** Done with the functions! At this point I have a function that will decrease the meter.hunger and meter.happiness value, another that will decrease meter.health, and two separate functions that will increase meters.hunger or meter.happiness by 1

**Next steps:** 

1. Begin connecting event listeners with their callback functions
    - 1 button to increaseHungerMeter, 1 button to increaseHappinessMeter
2. Begin studying/working on asynch stuff for calling the deductMeter function
    - Every 7 seconds, deductMeter() is called, which should decrease Happiness or Hunger by 1
3. Add Happiness, Hunger, and Health visual representations on DOM
3. Construct render function to update visuals
    
        