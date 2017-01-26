// Initialize app
/*jslint browser: true*/
/*global $, jQuery, alert, document, console*/
$(document).ready(function () {
    // Defines variables
    'use strict';
    var i,
        hiddenWord = {
            animal: ['', 'cat', 'dog', 'elephant', 'lion'],
            movie: ['', 'alien', 'up', 'inception']
        },
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

        // Player select category, then element dissapear
        $('#animal').click(function () {
            choosenWord = hiddenWord.animal[Math.floor(Math.random() * 4) + 1];
            choosenWord = choosenWord.split('');
            $('.header').toggle();
            //console.log(choosenWord); To check choosenWord defined or not
        });
        $('#movie').click(function () {
            choosenWord = hiddenWord.movie[Math.floor(Math.random() * 3) + 1];
            choosenWord = choosenWord.split('');
            $('.header').toggle();
            //console.log(choosenWord); To check choosenWord defined or not
        });

        // game setup
        chance = 5;
        guessed = matched = '';

        // display player's chances left
        $('#chances').html('Your got ' + chance + ' chances left');

        // set choosenWord hidden in underlines
        for (i = 0; i < choosenWord.length; i += 1) {
            $('#hidden-word').html('<li class="word letter' + choosenWord[i].toUpperCase + '">_</li>');
        }

    }
    setup(); // first setup
});
