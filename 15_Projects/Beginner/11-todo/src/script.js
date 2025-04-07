let addTaskbBtn = document.getElementById("addTaskBtn");
let userInput = document.getElementById("taskInput");

function createTask(taskText, isCompleted) {
    const li = document.createElement("li");
    li.className = "flex items-center justify-between bg-[#2a2a2a] px-4 py-2 rounded-lg shadow-sm";
    li.innerHTML = `
        <div class="flex items-center gap-3">
            <input type="checkbox" class="tick accent-[#1DB954] w-4 h-4" ${isCompleted ? "checked" : ""} />
            <span class="text-gray-200">${taskText}</span>
        </div>
        <button class="deleteTaskBtn text-red-400 hover:text-red-500 text-sm">Delete</button>
    `;

    const targetList = isCompleted ? document.getElementById("completedList") : document.getElementById("pendingList");
    targetList.appendChild(li);

    // Delete button
    li.querySelector(".deleteTaskBtn").addEventListener("click", () => {
        li.remove();
        updateHeadings();
        saveToLocalStorage();
    });

    // Checkbox event
    li.querySelector(".tick").addEventListener("change", (e) => {
        const taskItem = e.target.closest("li");
        if (e.target.checked) {
            document.getElementById("completedList").appendChild(taskItem);
        } else {
            document.getElementById("pendingList").appendChild(taskItem);
        }
        updateHeadings();
        saveToLocalStorage();
    });

    updateHeadings();
}

addTaskbBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const value = userInput.value.trim();

    if (!value) {
        alert("Please enter task first");
        userInput.value = "";
    } else {
        createTask(value, false);
        userInput.value = "";
        saveToLocalStorage();
    }
});

function updateHeadings() {
    const pendingList = document.getElementById("pendingList");
    const completedList = document.getElementById("completedList");

    const pendingHeading = document.getElementById("pendingHeading");
    const completedHeading = document.getElementById("completedHeading");

    pendingHeading.style.display = pendingList.children.length > 0 ? "block" : "none";
    completedHeading.style.display = completedList.children.length > 0 ? "block" : "none";
}

function saveToLocalStorage() {
    const data = {
        pending: Array.from(document.getElementById("pendingList").children).map(li =>
            li.querySelector("span").innerText
        ),
        completed: Array.from(document.getElementById("completedList").children).map(li =>
            li.querySelector("span").innerText
        )
    };
    localStorage.setItem("todo-data", JSON.stringify(data));
}

function loadFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem("todo-data"));
    if (!data) return;

    data.pending.forEach(task => createTask(task, false));
    data.completed.forEach(task => createTask(task, true));
}

window.addEventListener("DOMContentLoaded", () => {
    loadFromLocalStorage();
    updateHeadings();
});
