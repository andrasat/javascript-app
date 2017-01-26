// Initialize app
/*jslint browser: true*/
/*global $, jQuery, alert, document, console*/
$(document).ready(function () {
    // Defines variables
    'use strict';
    var i,
        hiddenWord = ['cat', 'dog', 'elephant', 'eagle', 'giraffe', 'rhino'],
        choosenWord = '', // Word choosen after player choose category
        dashes = '', // dashes as placeholder for the word
        chance = 0, // lives
        letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'], // letters to use in game
        messages = {
            win: 'Congratulation, you win !',
            lose: 'Sorry, you lose !',
            guessed: 'that letter already entered, choose another',
            valid: 'please enter letter A-Z'
        }, // game messages
        guessed,
        matched;

    /* 
    
    Game setup 
    
    */

    function setup() {

        // Randomize category and hiddenWord
        choosenWord = hiddenWord[Math.floor(Math.random() * 6)];
        choosenWord = choosenWord.split('');
        console.log(choosenWord); // check if hiddenWord randomized and stored in choosenWord

        // game setup
        chance = 5;
        guessed = matched = '';

        // display player's chances left
        $('#chances').html('Your got ' + chance + ' chances left');

        // set choosenWord hidden in underlines
        for (i = 0; i < choosenWord.length; i += 1) {
            $('#hidden').append('<li class="word letter' + choosenWord[i].toUpperCase() + '">' + choosenWord[i].toUpperCase() + '</li>');
        }

    }
    setup(); // first setup


});
