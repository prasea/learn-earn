// const card = document.querySelector('.card');

// card.addEventListener('mousemove', runEvent);
// function runEvent(e){
// 	document.querySelector('h5').innerText = `MouseX : ${e.offsetX} MouseY : ${e.offsetY}`;
// 	document.body.style.background = `rgb(${e.offsetX},${e.offsetY},255)`;
// }


// //Event Bubbling is firing of parent events though event type happened only on child

// // document.querySelector('.card-title').addEventListener('click',function(){
// // 	console.log('card title');
// // });
// // document.querySelector('.card-content').addEventListener('click',function(){
// // 	console.log('card content');
// // });
// // document.querySelector('.card').addEventListener('click',function(){
// // 	console.log('card');
// // });

// // Event Delegation is just opposite of Event Bubbling


// // document.querySelector('.delete-item').addEventListener('click',function(){
// // 	console.log('Delete Item');
// // });
// // It triggers only for first delete item. For triggering every delete item though they may be added dynamically. We require Event Delegation.


// document.body.addEventListener('click',deleteItem);

// function deleteItem(e){
// 	// if(e.target.parentElement.className === 'delete-item secondary-content')
// 	// {
// 	// 	console.log('card');
// 	// }
// 		if(e.target.parentElement.classList.contains('delete-item'))
// 	{
// 		console.log('card');
// 		e.target.parentElement.parentElement.remove();
// 	}
// }

// localStorage

// const name = localStorage.setItem('name', 'John');
// const age = localStorage.setItem('age', '22');
// localStorage.removeItem('name');
// console.log(localStorage.getItem('name'));


// document.querySelector('#task-form').addEventListener('submit', function(e){
// 	const task = document.getElementById('task').value;

// 	let tasks;

// 	if(localStorage.getItem('tasks') === null){
// 		tasks = [];
// 	} else{
// 		tasks = JSON.parse(localStorage.getItem('tasks'));
// 	}

// 	tasks.push(task);

// 	localStorage.setItem('tasks', JSON.stringify(tasks));

// });

// const tasks = JSON.parse(localStorage.getItem('tasks'));
// tasks.forEach(function(task){
// 	console.log(task);
// });

