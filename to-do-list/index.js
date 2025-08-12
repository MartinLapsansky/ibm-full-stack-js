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

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = function() {
        const newTaskText = prompt('Edit your task:');
        if (newTaskText !== null && newTaskText.trim() !== '') {
            newTask.textContent = newTaskText;
            newTask.appendChild(deleteButton);
            newTask.appendChild(editButton);
        }
    };

    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);
    newTask.appendChild(editButton);

    taskInput.value = '';
}