const task = document.getElementById("display_task_list");
const taskInput = document.getElementById("add_task");
const addTaskButton = document.getElementById("add_task_button");

//Add Task Button Logic
addTaskButton.addEventListener("click", addTask);
taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter"){
        event.preventDefault();
        addTask();
    }
});

//Add Task Logic
function addTask(event){

const taskText = taskInput.value;
taskInput.value = "";

const taskList = document.createElement("li");
const span = document.createElement("span");
const removeButton = document.createElement("button");

span.textContent = taskText;
removeButton.textContent = "Remove";

taskList.appendChild(span);
taskList.appendChild(removeButton);
task.appendChild(taskList);

removeButton.addEventListener ("click", () => {
    task.removeChild(taskList)
});
taskInput.focus();
};