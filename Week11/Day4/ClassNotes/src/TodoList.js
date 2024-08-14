document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    const taskText = document.getElementById('todo-input').value;
    if (taskText === '') return;

    const taskItem = document.createElement('li');
    taskItem.classList.add('todo-item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('checkbox');
    checkbox.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });

    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
        taskItem.remove();
    });

    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskContent);
    taskItem.appendChild(deleteBtn);
    document.getElementById('todo-list').appendChild(taskItem);

    document.getElementById('todo-input').value = '';
}
