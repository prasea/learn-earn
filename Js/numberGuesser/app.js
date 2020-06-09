let min = 1,
	max = 10,
	winningNum = 4,
	guessesLeft = 3;
const game = document.querySelector('#game'),
	minNum = document.querySelector('.min-num'),
	maxNum = document.querySelector('.max-num'),
	guessInput = document.querySelector('#guess-input'),
	guessBtn = document.querySelector('#guess-btn'),
	message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener('click', function(){
	let guessValue = parseInt(guessInput.value); //As the guessInput will be String we parsed it as int for Comparision

	// VALIDATE If it guessValue was String, then we if nothing Submitted, We check against '' empty String. But as we Parsed int, So check against Nan
	if(isNaN(guessValue) || guessValue < min || guessValue > max){ //FALSE condition
		setMessage(`Please enter number between ${min} & ${max}`, 'red');
	}

	// Check if won
	if(guessValue === winningNum){
		// Game Over - Won
		//Disable input
		guessInput.disabled = true;
		// Change Border Color
		guessInput.style.borderColor = 'green';
		// Notify User
		setMessage(`${winningNum} is Correct. YOU WIN!`, 'green');
	} else{
		guessesLeft -= 1;
		if(guessesLeft === 0){
			// Game Over - lost
			guessInput.disabled = true;
			guessInput.style.borderColor = 'red';
			setMessage(`You lost. Correct guess was ${winningNum}`, 'red');
		} else {
			// Game Continues - Wrong guess
			guessInput.style.borderColor = 'red';
			guessInput.value = '';
			setMessage(`Wrong guess, ${guessesLeft} guesses left`, 'red');

		}
	}

});

function setMessage(msg, color){
	message.style.color = color;
	message.textContent = msg;
}