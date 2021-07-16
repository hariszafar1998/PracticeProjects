const main = document.getElementById('main');
const input = document.getElementById('input');
const button = document.getElementById('btn');
const main2 = document.getElementById('main2');

let taskArray = [];

// Functions

function addTask() {
    taskArray.forEach( eachtask => {
    const newDiv = document.createElement('div');
    newDiv.classList.add('task');
    newDiv.innerText = input.value;
    main2.appendChild(newDiv);

    const task = {task: `${input.value}`};

    })
    
    taskArray.push(task);
    console.log(task);
};

// Event Listeners

button.addEventListener('click', addTask);