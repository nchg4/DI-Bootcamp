const taskInput = document.getElementById('taskInput') as HTMLInputElement;
const addTaskBtn = document.getElementById('addTaskBtn') as HTMLButtonElement;
const activeTasksList = document.getElementById('activeTasks') as HTMLUListElement;
const finishedTasksList = document.getElementById('finishedTasks') as HTMLUListElement;
const deletedTasksList = document.getElementById('deletedTasks') as HTMLUListElement;
const deleteAllBtn = document.getElementById('deleteAllBtn') as HTMLButtonElement;

let deletedTasks: string[] = [];

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const li = createTaskElement(taskText);
        activeTasksList.appendChild(li);
        taskInput.value = '';
    }
});

function createTaskElement(taskText: string): HTMLLIElement {
    const li = document.createElement('li');
    li.textContent = taskText;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            li.classList.add('completed');
            finishedTasksList.appendChild(li);
        } else {
            li.classList.remove('completed');
            activeTasksList.appendChild(li);
        }
    });

    const garbage = document.createElement('span');
    garbage.textContent = '🗑️';
    garbage.className = 'garbage';
    garbage.addEventListener('click', () => {
        deletedTasks.push(taskText);
        deletedTasksList.appendChild(li);
        li.remove();
    });

    li.prepend(checkbox);
    li.appendChild(garbage);
    return li;
}

deleteAllBtn.addEventListener('click', () => {
    deletedTasksList.innerHTML = '';
    deletedTasks = [];
});
