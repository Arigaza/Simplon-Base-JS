
// "use strict";
var myNumber = Math.floor(Math.random() * 100)
var attemps = 0
let Guesses = document.getElementById("guesses")
let lastResult = document.getElementById("lastResult")
let lowOrHi = document.getElementById("lowOrHi")
let currentguest = ""
let won = false


const pr = new Intl.PluralRules('en-US', { type: 'ordinal' });

const suffixes = new Map([
  ['one',   'ere'],
  ['two',   'e'],
  ['few',   'e'],
  ['other', 'e'],
]);
const formatOrdinals = (n) => {
  const rule = pr.select(n);
  const suffix = suffixes.get(rule);
  return `${n}${suffix}`;
};

function onlyNumberKey(evt) {
              
    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}

// Your JavaScript goes here
function test1() {
    let guess = document.getElementById("guessField").value
    currentguest = guess
    if (attemps >= 10) {
        lowOrHi.textContent = "You lost"
        return;
    }
    if (guess == "" || guess < 0 || won || guess > 100) {
        return;
    }
    console.log(won)
    lastResult.textContent = "votre dernière tentative était: " + currentguest + "."

    if (guess > myNumber) {
        attemps++
        lowOrHi.textContent = "votre estimation est trop élevée.";
        if (attemps == 1) {
            Guesses.textContent = "Vous êtes à votre " + formatOrdinals(attemps) + " tentative et n'avez toujours pas trouvé le résultat";
        }
        else if (attemps > 1) {
            Guesses.textContent = "Vous êtes à votre " + formatOrdinals(attemps) + "  tentatives et n'avez toujours pas trouvé le résultat";
        }
    }

    else if (guess < myNumber) {
        attemps++
        lowOrHi.textContent = "votre estimation est pas assez élevée.";
        if (attemps == 1) {
            Guesses.textContent = "Vous êtes à votre " + formatOrdinals(attemps) + " tentative et n'avez toujours pas trouvé le résultat";
        }
        else if (attemps > 0) {
            Guesses.textContent = "Vous êtes à votre " + formatOrdinals(attemps) + "  tentatives et n'avez toujours pas trouvé le résultat";
        }
    }
    if (guess == myNumber) {
        attemps++
        Guesses.textContent = "Vous avez essayé " + attemps + " fois avant de trouver la bonne réponse";
        lowOrHi.textContent = "";
        won = true
    }



    console.log("number to guess: " + myNumber)
    console.log("my attemps: " + attemps)
}
