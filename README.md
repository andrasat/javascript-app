# Hangman

This is a hangman game made with javascript + Jquery to complete an assignment in Hacktiv8 Phase 0 - Week 2 - Day 5. Combining javascript and jQuery is really hard but i learned a lot. I made this based on Cathy Dutton codepen's [Hangman Game](https://codepen.io/cathydutton/pen/ldazc).

*Reference*

* Pick a random property from a Javascript object [randomize prop](http://stackoverflow.com/questions/2532218/pick-random-property-from-a-javascript-object)

## Pseudocode hangman.js

```

INIT hangman app

Define VARIABLES

    loops variables = [i,x,y,...]
    hiddenWord obj = {category: [words]}
    choosenWord = ''
    chance = 0
    letters = [a,b,c...]
    playerGuess
    countCorrect
    hiddenLett
    aList
    guesses = []

Create FUNCTIONS for game setup

    FUNC randomize obj hiddenWord to get choosenWord (@param obj) *look at link*
    
    FUNC setHidden *make hiddenWord list for guessing*
        FOR choosenWord.length
            append hiddenLett in $(.hidden)
            push hiddenLett in guesses for later
    
    FUNC chanceInfo *display chances info*
        modify $(.chances) to display chances left
        IF chance < 1
            Lose
            hide element $(.game)
        FOR guesses.length
            IF countCorrect === guesses.length
            Win
            hide element $(.game)
    
    FUNC clicked *what happen if player click alphabets*
        when aList onclick
            store player input in playerGuess
            set clicked element attribute to class = active and make null so player cannot clicked it anymore
            
            FOR choosenWord.length
                IF choosenWord[index] === playerGuess
                    put playerGuess in guesses so hiddenLett changed
                    countCorrect increased
            
            IF playerGuess is not inside choosenWord[]
                chance decreased
                update chanceInfo()
            ELSE 
                chanceInfo() stay
                
    FUNC setAlphabet *create alphabet list for player input*
        FOR letters.length
            store DOM <li> in aList
            make unique ID and display alphabets
            every list need to have clicked() func
            display aList
            
    FUNC play *play the game*
        set chance = 5
            countCorrect = 0
        start all function
            randomize(hiddenWord)
            setAlphabet()
            clicked()
            setHidden()
            chanceInfo()
    
    call play()
    
    FUNC reset
        empty guesses = []
        show element $(.game)
        empty element $(.letters) and $(.hidden) to make room for new one
        call play()
```