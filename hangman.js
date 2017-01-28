// Initialize app
/*jslint browser: true*/
/*global $, jQuery, alert, document, console*/
$(document).ready(function () {
    // Defines variables
    'use strict';
    var i, x, y, t,
        result, prop,
        count = 0,
        hiddenWord = {
            animal: ['cat', 'dog', 'elephant', 'eagle', 'giraffe', 'rhino'],
            movie: ['alien', 'harrypotter', 'up', 'inception', 'thegodfather', 'zootopia']
        },
        choosenWord = '', // Word choosen after player choose category
        chance = 0, // lives
        letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'], // letters to use in game
        playerGuess, // input from player
        countCorrect, // count correct guess
        hiddenLett, // letters hidden
        aList, // store alphabet list
        guesses = []; // stored letters needed to be guessed

    /* 
    
    Game setup 
    
    */

    // Randomize hiddenWord -- found this on stack overflow
    function randomize(obj) {
        for (prop in obj) {
            if (Math.random() < 1 / ++count) {
                result = prop;
            }
        }
        choosenWord = hiddenWord[result][Math.floor(Math.random() * 6)];

        $('h3').text('Your category is ' + result.toUpperCase());
        console.log(choosenWord);
        return choosenWord;
    }

    // Create hiddenWord list for guessing
    function setHidden() {
        for (x = 0; x < choosenWord.length; x += 1) {
            hiddenLett = document.createElement('li');
            hiddenLett.setAttribute('class', 'hidden-letter');
            hiddenLett.innerHTML = '_';
            $('.hidden').append(hiddenLett);

            guesses.push(hiddenLett);
            console.log(guesses);
        }
    }

    // Show player's chances
    function chanceInfo() {
        $('.chances').html('Your chances left: ' + chance);
        if (chance < 1) {
            $('.chances').html('Sorry, you lose');
            $('.game').hide();
        }
        for (y = 0; y < guesses.length; y += 1) {
            if (countCorrect === guesses.length) {
                $('.chances').html('Congratulation, you win! the word is: ' + choosenWord.toUpperCase());
                $('.game').hide();
            }
        }
    }

    // When player click on alphabet
    function clicked() {
        aList.onclick = function () {
            playerGuess = (this.innerHTML);
            this.setAttribute('class', 'active');
            this.onclick = null;
            console.log(this);
            console.log(playerGuess);
            for (t = 0; t < choosenWord.length; t += 1) {
                if (choosenWord[t] === playerGuess) {
                    guesses[t].innerHTML = playerGuess.toUpperCase();
                    countCorrect += 1;
                }
            }
            if ($.inArray(playerGuess, choosenWord) === -1) {
                chance -= 1;
                chanceInfo();
            } else {
                chanceInfo();
            }
        };
    }

    // Create alphabet list for player input
    function setAlphabet() {
        for (i = 0; i < letters.length; i += 1) {
            aList = document.createElement('li');
            aList.id = 'alphabets';
            aList.innerHTML = letters[i];
            clicked();
            $('.letters').append(aList);
        }
    }

    // Play Game
    function play() {

        randomize(hiddenWord);
        setAlphabet();
        clicked();
        chance = 5;
        countCorrect = 0;
        setHidden();
        chanceInfo();
    }

    play();

    // Reset function
    $('#reset').click(function () {
        guesses = [];
        $('.game').show();
        $('.letters').empty();
        $('.hidden').empty();
        play();
    });

});
