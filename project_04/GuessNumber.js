const guessInput = document.querySelector('#guessing');
const submitButton = document.querySelector('#submit');
const previousGuess = document.querySelector('#previousGuess')
const guessRemaining = document.querySelector('#guessRemaining')
const result = document.querySelector('#result');


let arr = [];

let randomNumber = Math.floor(Math.random()*10)+1;

let remaining = 10;
guessRemaining.value = remaining;

submitButton.addEventListener('click',guessFunction)

function guessFunction(){

    if(remaining < 1) {
        result.value = "sorry, you loose!"
        arr = [];
        remaining = 10;
        randomNumber = Math.floor(Math.random() * 10) + 1;
        guessInput.value='';
        guessRemaining.value=remaining;
        return;
    }

    let guess= parseInt(guessInput.value);

    arr.push(guess);
    previousGuess.value = arr.join(', ');

    remaining=remaining-1;
    guessRemaining.value = remaining;

    showResult(guess);
    guessInput.value='';
}

function showResult(guess){
    if(randomNumber==guess){
        result.value = "Yey, you won!";
        remaining =0;
    }
    else if(guess>randomNumber)result.value = "guess lesser value."
    else result.value = "guess larger value."
}