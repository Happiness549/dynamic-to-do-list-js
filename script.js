'strict mode';

document.addEventListener('DOMContentLoaded', function(){
  const  taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const addButton = document.getElementById('add-task-btn');

});

function addTask(){
    let taskText = taskInput.value.trim();
    if(taskText === ""){
        alert('Please enter a task');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'remove';
    removeBtn.className = 'remove-btn';
    removeBtn.onclick = () => {
        taskList.removeChild(li);
    };

    li.appendChild(removeBtn);
    taskList.appendChild(li);
    taskInput.value = '';
}
addBtn.addEventListener('click', addTask);
taskInput.addEventListener('submit',)