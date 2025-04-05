let calculator = document.getElementById("calculator");
let input = document.getElementById("input");

calculator.addEventListener("click", (e) => {
    e.preventDefault();

    let key = e.target.id;

    if (key === "calculator" || e.target.tagName !== "BUTTON") {
        return; // ignore if clicked on container or non-button
    }

    if (key === "equal") {
        return; // do nothing here, handled below
    } else if (key === "DE") {
        input.value = input.value.slice(0, -1);
    } else if (key === "AC") {
        input.value = "";
    } else {
        input.value += key;
    }
});

document.getElementById("equal").addEventListener("click", (e) => {
    e.preventDefault();
    try {
        let output = eval(input.value);
        if (!Number.isInteger(output)) {
            output = parseFloat(output.toFixed(2));
        }
        input.value = output
    } catch (err) {
        input.value = "Error";
    }
});
