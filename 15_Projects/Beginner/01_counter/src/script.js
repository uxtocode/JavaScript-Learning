let count = 0;

function updateCount() {
    document.getElementById("count").innerText = count;
    document.getElementById("decrease").disabled = count === 0;
}

document.getElementById("decrease").addEventListener("click", () => {
    if (count > 0) {
        count--;
        updateCount();
    }
});

document.getElementById("increase").addEventListener("click", () => {
    count++;
    updateCount();
});

document.getElementById("reset").addEventListener("click", () => {
    if (confirm("Are you sure you want to reset the count?")) {
        count = 0;
        updateCount();
    }
});

// Initialize state
updateCount();
