
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('todoList');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const newTask = document.createElement('li');
    newTask.textContent = taskInput.value;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        taskList.removeChild(newTask);
    };

    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);

    taskInput.value = '';
}