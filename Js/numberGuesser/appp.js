let min = 1,
	max = 10,
	winningNum = getRandomNum(min,max),
	guessesLeft = 3;
const game = document.querySelector('#game'),
	minNum = document.querySelector('.min-num'),
	maxNum = document.querySelector('.max-num'),
	guessInput = document.querySelector('#guess-input'),
	guessBtn = document.querySelector('#guess-btn'),
	message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', function(e){
	if(e.target.className === 'play-again'){
		window.location.reload();
	}
});

guessBtn.addEventListener('click', function(){
	let guessValue = parseInt(guessInput.value);
	if(isNaN(guessValue) || guessValue < min || guessValue > max){
		setMessage(`Please enter number between ${min} & ${max}`, 'red');
	}
	if(guessValue === winningNum){
		// Game Over - Won
		gameOver(true, `${winningNum} is Correct. YOU WIN!`)
	}	else{
			guessesLeft -= 1;
			if(guessesLeft === 0){
				// Game Over - lost
				gameOver(false, `You lost. Correct guess was ${winningNum}`)
			} else {
				// Game Continues - Wrong guess
				guessInput.style.borderColor = 'red';
				guessInput.value = '';
				setMessage(`Wrong guess, ${guessesLeft} guesses left`, 'red');

			}
	}

})
function gameOver(won, msg){
	let color;
	won === true ? color = 'green' : color = 'red';
	guessInput.disabled = true;
	guessInput.style.borderColor = color;
	// message.style.color = color;
	// message.textContent = msg;
	setMessage(msg,color);
	// After Game over to show Play Again
	guessBtn.value = 'Play Again';
	guessBtn.className += 'play-again';

}
function setMessage(msg, color){
	message.style.color = color;
	message.textContent = msg;
}

function getRandomNum(min,max){
	return Math.floor(Math.random()*(max-min+1)+min);
}