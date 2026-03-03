const task = document.getElementById("display_task_list");
const taskInput = document.getElementById("add_task");
const addTaskButton = document.getElementById("add_task_button");
const completedTask = document.getElementById("completed_task_list");

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

const checkbox = document.createElement("input")
const taskList = document.createElement("li");
const div = document.createElement("div");
const removeButton = document.createElement("button");

checkbox.type = "checkbox";
div.textContent = taskText;
removeButton.textContent = "X";

checkbox.classList.add("checkbox");
taskList.classList.add("item_list");
div.classList.add("list");
removeButton.classList.add("remove_item");

taskList.appendChild(checkbox);
taskList.appendChild(div);
taskList.appendChild(removeButton);
task.appendChild(taskList);

checkbox.addEventListener("change", function(){
    if (checkbox.checked){
        div.style.textDecoration = "line-through";
    } else {
        div.style.textDecoration = "none";
    }
});

//Completed Task Logic

taskList.addEventListener("change", function(event) {
    const checkbox = event.target;
    if (checkbox.tagName === "INPUT" && checkbox.checked) {
        const taskItem = checkbox.closest("li");
        completedTask.appendChild(taskItem);
}
});

removeButton.addEventListener ("click", () => {
    task.removeChild(taskList)
});
taskInput.focus();
};
