const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// Apendice para añadir una tarea
taskForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const newTask = document.createElement("li");
    newTask.innerHTML = `
      <input type="checkbox" class="task-checkbox">
      <p>${taskText}</p>
      <button class="delete-button">Eliminar</button>
    `;
    taskList.appendChild(newTask);
    taskInput.value = "";
  }
});

// Apendice para colocar check en una tarea
taskList.addEventListener("change", function (event) {
  if (event.target.classList.contains("task-checkbox")) {
    const taskItem = event.target.parentElement;
    taskItem.classList.toggle("completed", event.target.checked);
  }
});

// Apendice para eliminar una tarea
taskList.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-button")) {
    const taskItem = event.target.parentElement;
    taskItem.remove();
  }
});