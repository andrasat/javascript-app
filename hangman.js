// Initialize app
$(Document).ready(function () {
    // Defines variables
    var hiddenWord = {
        animal: ['cat', 'dog', 'elephant', 'lion']
        , movie: ['alien', 'harry potter', 'the avengers']
    };
    var choosenWord = '';
    var dashes = '';
    var chance = 0;
    var letter = '';
    var guess = '';
    var guessed = '';
    var gameOver = false;
    setup();

    function setup() {
        $('#animal').click(function () {
            choosenWord = hiddenWord.animal[Math.floor(Math.random() * 3)];
            $('.header').remove();
        });
        $('#movie').click(function () {
            choosenWord = hiddenWord.animal[Math.floor(Math.random() * 2)];
            $('.header').remove();
        });
    }
});