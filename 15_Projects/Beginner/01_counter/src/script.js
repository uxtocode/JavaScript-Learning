let count = 0;

document.getElementById("decrease").addEventListener("click", () => {
    if (count >= 1) {
        count = count - 1;
        console.log(count);
    } else {
        alert("Your count in already at Zero.")
    }
    document.getElementById("count").innerText = count;
})

document.getElementById("increase").addEventListener("click", () => {
    count = count + 1;
    console.log(count);
    document.getElementById("count").innerText = count;
})


document.getElementById("reset").addEventListener("click", () => {
    confirm("Are you sure you want to reset the count?");
    count = 0;
    console.log(count);
    document.getElementById("count").innerText = count;
})