const game = document.querySelector('#game'),
	guessInput = document.querySelector('#guess-input'),
	guessBtn = document.querySelector('#guess-btn'),
	message = document.querySelector('.message');

let flip = function(){
	if(getRandomNum(1,2) === 1){
		return 'Head'
	} else {
		return 'Tail';
	}
}

function getRandomNum(min,max){
	return Math.floor(Math.random()*(max-min+1)+min);
}

console.log(flip());

guessBtn.addEventListener('click', function(){
	if(flip() === guessInput.value){
	message.textContent = 'Head';
	} else{
	message.textContent = 'Tail';
}
})
