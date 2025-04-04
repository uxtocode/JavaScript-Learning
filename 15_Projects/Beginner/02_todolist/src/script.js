// Displaying Current Date in Heading
const today = new Date();
const formattedDate = { year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById("date-day").innerText = today.toLocaleDateString('en-IN', formattedDate);

// Handling task form on page
document.getElementById("form").style.display = "none";

document.getElementById("new-task").addEventListener("click", () => {
    document.getElementById("form").style.display = "block";
});

document.getElementById("cancel").addEventListener("click", () => {
    document.getElementById("form").style.display = "none";
});

let pendingTasks = [];
let completedTasks = [];

// Helper: Create a task object
function addTaskToArray(taskInput) {
    const randomTaskId = Math.floor((Math.random() * 1000000) + 1);
    const taskObj = {
        taskId: randomTaskId,
        taskName: taskInput,
        isCompleted: false
    };
    pendingTasks.push(taskObj);
    return taskObj;
}

// Helper: Render a task to the DOM
function renderTask(task, containerId) {
    const container = document.getElementById(containerId);
    const div = document.createElement("div");
    div.className = "bg-gray-300 rounded-md my-2 p-2 flex items-center gap-1.5";
    div.innerHTML = `
        <input class="w-4 h-4 text-blue-600 accent-blue-600 task-checkbox" type="checkbox" 
               taskId="${task.taskId}" isCompleted="${task.isCompleted}">
        <p class="${task.isCompleted ? 'line-through' : ''}">${task.taskName}</p>
        <img class="w-4 ml-auto hover:cursor-pointer" src="assets/edit.png" alt="edit">
    `;
    container.appendChild(div);
}

// Add task button click
document.getElementById("add-task").addEventListener("click", (e) => {
    e.preventDefault();
    const task = document.getElementById("taskInput").value.trim();

    if (!task) {
        alert("Please enter a task.");
        return;
    }

    const newTask = addTaskToArray(task);
    document.getElementById("taskInput").value = "";
    document.getElementById("form").style.display = "none";

    renderTask(newTask, "pending-tasks");
});

// Handle checkbox changes
document.getElementById("pending-tasks").addEventListener("change", function (e) {
    if (e.target && e.target.matches(".task-checkbox")) {
        const taskId = Number(e.target.getAttribute("taskId"));

        if (e.target.checked) {
            e.target.setAttribute("isCompleted", "true");

            // Remove from pending
            const index = pendingTasks.findIndex(task => task.taskId === taskId);
            const removedTask = pendingTasks.splice(index, 1)[0];
            removedTask.isCompleted = true;

            // Add to completed
            completedTasks.push(removedTask);

            // Remove from DOM
            e.target.parentElement.remove();

            // Render in completed section
            renderTask(removedTask, "completed-tasks");
        } else {
            console.log("❌ Marked as not completed");
            e.target.setAttribute("isCompleted", "false");
        }
    }
});
