var words = ['purple', 'orange', 'family', 'twelve', 'silver', 'thirty', 'donate', 'people', 'future', 'Heaven', 'banana', 'Africa', 'Monday', 'office', 'nature', 'eleven', 'animal', 'twenty', 'snitch', 'Friday', 'Father', 'yellow', 'poetry', 'August', 'broken', 'potato', 'Sunday', 'circle', 'school', 'breath', 'moment', 'circus', 'person', 'scarce', 'London', 'energy', 'sister', 'spring', 'change', 'monkey', 'system', 'secret', 'pirate', 'turtle', 'ninety', 'mother', 'winter', 'bucket', 'doctor', 'strong', 'forest', 'joyful', 'memory', 'season','Friend', 'ending', 'loving', 'cookie', 'silent', 'talent', 'turkey', 'better', 'bottle', 'happen', 'wonder', 'number', 'little', 'spirit', 'melody', 'lovely', 'ginger', 'cousin', 'couple', 'bridge', 'tomato', 'enough', 'dragon', 'lonely', 'beaver', 'market', 'health', 'beauty', 'simple'];


var newWord = '';
//var randomWord = require('random-word-by-length'); 
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
var wordScreen = document.getElementById('wordScreen');
var previousGuesses = document.getElementById('previousGuesses');



document.onreadystatechange = function() { //boilerplate
	if (document.readyState === "interactive") { //boilerplate
		reset();
		newGameButton.addEventListener("click", newGame); //When a digit button is clicked, we run the ButtonLogic function
	}
}

function reset() {
	hangbotImage.src = "Bender_Rodriguez_gallows.png";
	guessPanel.style.display = 'none';
	displayResult.innerHTML = '';
	previousGuesses.innerHTML = '';

}

function newGame() {
	
	var numWord = Math.floor(Math.random()*(words.length-1));
	newWord = words[numWord];
	console.log(newWord);
	submitButton.addEventListener("click", guessSubmit);
	guessPanel.style.display = 'block';
	wordScreen.style.display = 'block';
	displayResult.innerHTML = '';
	hangbotImage.src = "Bender_Rodriguez_gallows.png";
	space1.innerHTML = '';
	space2.innerHTML = '';
	space3.innerHTML = '';
	space4.innerHTML = '';
	space5.innerHTML = '';
	space6.innerHTML = '';
	guess.value = '';
	previousGuesses.innerHTML = "<h3>Previous Guesses:</h3>";

}

function guessSubmit() {
	var guess = document.getElementById("guess").value;
	if (newWord.includes(guess)) {
		displayResult.innerHTML = "Fun on the Bun! You got it!";
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
		displayResult.innerHTML = "Good News, Everyone! That wasn't in the word.";
		previousGuesses.innerHTML += guess;
		switch (missCounter) { //Case statement to assign a math function to each operator button (which are strings)
			case 1:
				hangbotImage.src = "Bender_1.png"
				break;
			case 2:
				hangbotImage.src = "Bender_2.png"
				break;
			case 3:
				hangbotImage.src = "Bender_3.png"
				break;
			case 4:
				hangbotImage.src = "Bender_4.png"
				break;
			case 5:
				hangbotImage.src = "Bender_5.png"
				break;
			case 6:
				hangbotImage.src = "Bender_6.png"
				break;
			case 7:
				hangbotImage.src = "Bender_7.png"
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



