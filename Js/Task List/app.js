const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');

// Calling function to load All Event Listener
loadEventListeners();

function loadEventListeners(){
	document.addEventListener('DOMContentLoaded', getTasks);
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);//Event Delegation to be done
    //Clear Tasks
    clearBtn.addEventListener('click',clearTasks);

    filter.addEventListener('keyup',filterTasks);
}

function getTasks(e){
	let tasks;
	if(localStorage.getItem('tasks') === null){
		tasks = [];
	} else{
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}

	tasks.forEach(function(task){
		const lis = document.createElement('li');
    
    	lis.className = 'collection-item';
	    lis.appendChild(document.createTextNode(task));

	    
	    const link = document.createElement('a');
	    link.className = 'delete-item secondary-content'; //secondary-content pushes content to right of list
	    link.innerHTML = '<i class="fa fa-remove"></i>';

	    
	    lis.appendChild(link);

	    
	    taskList.appendChild(lis);
	});

}


//Creating Event Handler
function addTask(e){
    if(taskInput.value === ''){
        alert('Please Add Task');
    }

    // What if user entered the value in taskInput, then create li
    const lis = document.createElement('li');
    // In materialize if you want your list item to look good. ul should have class collection and li should have class of collection-item
    lis.className = 'collection-item';
    lis.appendChild(document.createTextNode(taskInput.value));

    //Creating delete link
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content'; //secondary-content pushes content to right of list
    link.innerHTML = '<i class="fa fa-remove"></i>';

    //Append the link to lis
    lis.appendChild(link);

    //Now we have every required details in list. So we append it to ul i.e. taskList
    taskList.appendChild(lis);

    storeTaskInLocalStorage(taskInput.value);
    
    // After we sucessfully appended li. Let's clear the value of input field.
    taskInput.value = '';



    e.preventDefault();
}

function storeTaskInLocalStorage(task){
	let tasks;
	if(localStorage.getItem('tasks') === null){
		tasks = [];
	} else{
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}
	tasks.push(task);
	localStorage.setItem('tasks', JSON.stringify(tasks));
}


function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove();
            // Remove from LS also
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index){
    if(taskItem.textContent === task){
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}


function clearTasks(){
    // taskList.innerHTML = '';

    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
    clearTasksFromLocalStorage();
}
function clearTasksFromLocalStorage(){
	localStorage.clear();
}

function filterTasks(e){
    const text = e.target.value.toLowerCase();
   
    document.querySelectorAll('.collection-item').forEach(function(task){
        const items = task.firstChild; //Every tasks in list
        // console.log(items.toLowerCase().indexOf(text));
        // console.log(task);
        if(items.toLowerCase().indexOf(text) != -1){ //Matched 0 1 2 .....
            // Also items.toLowerCase().indexOf(text) > -1
            task.style.display = 'block';
        } else{
            task.style.display = 'none';
        }

        // if(items.toLowerCase() === text){
        //     task.style.display = 'block';
        // } else{
        //     task.style.display = 'none';
        // }
    });
}