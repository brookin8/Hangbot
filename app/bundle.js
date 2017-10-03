(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

var newWord = '';
var randomWord = require('random-word-by-length'); 
var newGameButton = document.getElementById('newGameButton');
var submitButton = document.getElementById('submitButton');
var wordHolder = document.getElementById('wordHolder');
var hangbotImage = document.getElementById('updateImage');
var guessPanel = document.getElementById('guessPanel');
var space1 = document.getElementById('space1');
var space2 = document.getElementById('space2');
var space3 = document.getElementById('space3');
var space4 = document.getElementById('space4');
var space5 = document.getElementById('space5');
var space6 = document.getElementById('space6');
var missCounter = 0;
var hitCounter = 0;
var display = document.getElementById('displayResult');




document.onreadystatechange = function() { //boilerplate
	if (document.readyState === "interactive") { //boilerplate
		reset();
		newGameButton.addEventListener("click", newGame); //When a digit button is clicked, we run the ButtonLogic function
	}
}

function reset() {
	hangbotImage.src = "../docs/Bender_Rodriguez_gallows.png";
	guessPanel.style.display = 'none';
	displayResult.innerHTML = '';

}

function newGame() {
	
	newWord = randomWord(6);
	console.log(newWord)
	submitButton.addEventListener("click", guessSubmit);
	guessPanel.style.display = 'block';
	displayResult.innerHTML = '';
	hangbotImage.src = "../docs/Bender_Rodriguez_gallows.png";
	space1.innerHTML = '';
	space2.innerHTML = '';
	space3.innerHTML = '';
	space4.innerHTML = '';
	space5.innerHTML = '';
	space6.innerHTML = '';
	guess.value = '';
}

function guessSubmit() {
	var guess = document.getElementById("guess").value;
	if (newWord.includes(guess)) {
		displayResult.innerHTML = "Yes!";
		for(var i=0; i<newWord.length;i++) {
			if(guess === newWord[i]) {
				var letterNumber = i + 1;
				switch (letterNumber) { //Case statement to assign a math function to each operator button (which are strings)
					case 1:
						space1.innerHTML = guess;
						break;
					case 2:
						space2.innerHTML = guess;
						break;
					case 3:
						space3.innerHTML = guess;
						break;
					case 4:
						space4.innerHTML = guess;
						break;
					case 5:
						space5.innerHTML = guess;
						break;
					case 6:
						space6.innerHTML = guess;
						break;
				}
			}
		}
		checkForWin();
	} else {
		missCounter += 1; 
		displayResult.innerHTML = "Nope!";
		switch (missCounter) { //Case statement to assign a math function to each operator button (which are strings)
			case 1:
				hangbotImage.src = "../docs/Bender_1.png"
				break;
			case 2:
				hangbotImage.src = "../docs/Bender_2.png"
				break;
			case 3:
				hangbotImage.src = "../docs/Bender_3.png"
				break;
			case 4:
				hangbotImage.src = "../docs/Bender_4.png"
				break;
			case 5:
				hangbotImage.src = "../docs/Bender_5.png"
				break;
			case 6:
				hangbotImage.src = "../docs/Bender_6.png"
				break;
			case 7:
				hangbotImage.src = "../docs/Bender_7.png"
				youLose();
				break;
		}
	}
}

function checkForWin() {
	if(space1.innerHTML !== '' && space2.innerHTML !== '' && space3.innerHTML !== '' && space4.innerHTML !== '' &&  space5.innerHTML !== '' && space6.innerHTML !== '') {
		displayResult.innerHTML = "You win!! Kill all humans!"
	}

}

function youLose() {
	displayResult.innerHTML = "You Lose. But at least I get a beer."
	space1.innerHTML = newWord[0];
	space2.innerHTML = newWord[1];
	space3.innerHTML = newWord[2];
	space4.innerHTML = newWord[3];
	space5.innerHTML = newWord[4];
	space6.innerHTML = newWord[5];

}




},{"random-word-by-length":2}],2:[function(require,module,exports){
'use strict';
var words = require('word-list-json');
var uniqueRandom = require('unique-random');
var uniqueRandoms = {
  full: uniqueRandom(0, words.length - 1)
};
var maxLen = 0;
Object.keys(words.lengths).forEach(function (len) {
  if (Number(len) > maxLen) {
    maxLen = len;
  }
  uniqueRandoms[len] = uniqueRandom(0, words.lengths[len] - 1);
});
function randomWord(len) {
  if (typeof len !== 'number' || len < 2 || len !== len || len > maxLen) {
    len = 'full';
  }
  while (!(len in uniqueRandoms)) {
    len--;
  }
  
  return words[uniqueRandoms[len]()];
}
randomWord.maxLen = maxLen;
randomWord.uniqueRandoms = uniqueRandoms;
module.exports = randomWord;
},{"unique-random":3,"word-list-json":4}],3:[function(require,module,exports){
/*!
	unique-random
	Generate random numbers that are consecutively unique
	https://github.com/sindresorhus/unique-random
	by Sindre Sorhus
	MIT License
*/
(function () {
	'use strict';

	function uniqueRandom(min, max) {
		var prev;
		return function rand() {
			var num = Math.floor(Math.random() * (max - min + 1) + min);
			return prev = num === prev && min !== max ? rand() : num;
		};
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = uniqueRandom;
	} else {
		window.uniqueRandom = uniqueRandom;
	}
})();

},{}],4:[function(require,module,exports){
'use strict';
var words = require('./words.json');
module.exports = words.words;
words.words.lengths = words.lengths;
},{"./words.json":5}],5:[function(require,module,exports){
},{}]},{},[1]);