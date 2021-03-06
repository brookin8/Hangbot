var words = ['purple', 'orange', 'family', 'twelve', 'silver', 'thirty', 'donate', 'people', 'future', 'Heaven', 'banana','office', 'nature', 'eleven', 'animal', 'twenty', 'snitch', 'father', 'yellow', 'poetry', 'broken', 'potato','circle', 'school', 'breath', 'moment', 'circus', 'person', 'scarce', 'energy', 'sister', 'spring', 'change', 'monkey', 'system', 'secret', 'pirate', 'turtle', 'ninety', 'mother', 'winter', 'bucket', 'doctor', 'strong', 'forest', 'joyful', 'memory', 'season','friend', 'ending', 'loving', 'cookie', 'silent', 'talent', 'turkey', 'better', 'bottle', 'happen', 'wonder', 'number', 'little', 'spirit', 'melody', 'lovely', 'ginger', 'cousin', 'couple', 'bridge', 'tomato', 'enough', 'dragon', 'lonely', 'beaver', 'market', 'health', 'beauty', 'simple'];


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
var displayResult = document.getElementById('displayResult');
var wordScreen = document.getElementById('wordScreen');
var previousGuesses = document.getElementById('previousGuesses');
var spaces = document.getElementsByClassName('space');
var wordSpaces = document.getElementById('wordSpaces');




document.onreadystatechange = function() { //boilerplate
	if (document.readyState === "interactive") { //boilerplate
		resets();
		newGameButton.addEventListener("click", newGame); //When a digit button is clicked, we run the ButtonLogic function
	}
}

function resets() {
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
	previousGuesses.style.display = 'block';
	displayResult.innerHTML = '';
	missCounter = 0;
	hangbotImage.src = "Bender_Rodriguez_gallows.png";
	wordSpaces.innerHTML = "<div class = 'col-xs-2 space outline1'></div>"

	for (var i=1;i<newWord.length;i++) {
		wordSpaces.innerHTML += "<div class = 'col-xs-2 space outline'></div>";
	}
	
	previousGuesses.innerHTML = "<h3>Previous Guesses:</h3>";

}

function guessSubmit() {
	var guess = document.getElementById("guess").value.toLowerCase();
	if (newWord.includes(guess)) {
		displayResult.innerHTML = "Fun on the Bun! You got it!";
		displayResult.style.color = '#1AADAB';
		for(var i=0; i<newWord.length;i++) {
			if(guess === newWord[i]) {
				spaces[i].innerHTML = guess;
				}
			}
		checkForWin();
	} else {
		missCounter += 1; 
		displayResult.innerHTML = "Good News, Everyone! That wasn't in the word.";
		displayResult.style.color = '#AE1134';
		switch (missCounter) { //Case statement to assign a math function to each operator button (which are strings)
			case 1:
				hangbotImage.src = "Bender_1.png"
				previousGuesses.innerHTML += guess;
				break;
			case 2:
				hangbotImage.src = "Bender_2.png"
				previousGuesses.innerHTML += (" , " + guess);
				break;
			case 3:
				hangbotImage.src = "Bender_3.png"
				previousGuesses.innerHTML += (" , " + guess);
				break;
			case 4:
				hangbotImage.src = "Bender_4.png"
				previousGuesses.innerHTML += (" , " + guess);
				break;
			case 5:
				hangbotImage.src = "Bender_5.png"
				previousGuesses.innerHTML += (" , " + guess);
				break;
			case 6:
				hangbotImage.src = "Bender_6.png"
				previousGuesses.innerHTML += (" , " + guess);
				break;
			case 7:
				hangbotImage.src = "Bender_7.png"
				previousGuesses.innerHTML += (" , " + guess);
				youLose();
				break;
		}
	}
}

function checkForWin() {
	var checkForWinVar = 0;
	for(var i=0; i<spaces.length; i++) {
		if(spaces[i].innerHTML !== '') {
			checkForWinVar += 1;
		}
	} 
	if (checkForWinVar === spaces.length) {
		displayResult.innerHTML = "You win!! Kill all humans!"
		displayResult.style.color = '#1AADAB';
		hangbotImage.src = "Bender_Celebrate.jpg";
	}

}

function youLose() {
	displayResult.innerHTML = "You Lose. But at least I get a beer."
	displayResult.style.color = '#AE1134';
	for(var i=0; i<spaces.length; i++) {
		spaces[i].innerHTML = newWord[i];
	}

}



