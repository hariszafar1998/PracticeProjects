const main = document.getElementById('main');
const input = document.getElementById('input');
const button = document.getElementById('btn');
const main2 = document.getElementById('main2');

let taskArray = [];

// Functions

function addTask() {
    const task = input.value;
    const taskObject = {task: `${task}`}
    // console.log(taskObject);

    addTaskInArray(taskObject);
};

function addTaskInArray(newTask) {
    taskArray.push(newTask);
    console.log(taskArray);
    updateDOM();
};

function updateDOM(newTaskArray = taskArray) {
    newTaskArray.forEach(task => {
        // main2.innerHTML = '';
        const newTaskDiv = document.createElement('div');
        newTaskDiv.classList.add('task');
        newTaskDiv.innerHTML = `${task.task}`;
        main2.appendChild(newTaskDiv);
    })
};

// Event Listeners

button.addEventListener('click', addTask);