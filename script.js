
// ✅ Step 1: Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', function () {

  // ✅ Step 2: Select DOM Elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // ✅ Step 3: Create the addTask Function
  function addTask() {
    const taskText = taskInput.value.trim();

    // ✅ Step 4: Check if taskText is not empty
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }

    // ✅ Step 5: Task Creation and Removal
    const li = document.createElement('li');
    li.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';

    removeButton.onclick = function () {
      taskList.removeChild(li);
    };

    li.appendChild(removeButton);
    taskList.appendChild(li);

    // ✅ Step 6: Clear the input field
    taskInput.value = '';
  }

  // ✅ Step 7: Attach Event Listeners
  addButton.addEventListener('click', addTask);

  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // ✅ Step 8: Invoke the addTask function on DOMContentLoaded (optional)
  // Uncomment the line below if you'd like to run it automatically at page load
  // addTask();

});
