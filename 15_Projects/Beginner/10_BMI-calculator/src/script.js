let height = document.getElementById("height");
let weight = document.getElementById("weight");

let meters = document.getElementById("meters");
let feet = document.getElementById("feet");
let kgs = document.getElementById("kgs");
let pounds = document.getElementById("pounds")

let heightMeasure = "feet";
let weightMeasure = "kgs";


document.getElementById("feet").addEventListener("click", () => {
    heightMeasure = "feet";
    meters.classList.remove("activated");
    feet.classList.add("activated");
})

document.getElementById("meters").addEventListener("click", () => {
    heightMeasure = "meters";
    feet.classList.remove("activated");
    meters.classList.add("activated");
})

document.getElementById("kgs").addEventListener("click", () => {
    weightMeasure = "kgs";
    pounds.classList.remove("activated");
    kgs.classList.add("activated");
})

document.getElementById("pounds").addEventListener("click", () => {
    weightMeasure = "pounds";
    kgs.classList.remove("activated");
    pounds.classList.add("activated");
})





document.getElementById("calculate").addEventListener("click", (e) => {
    e.preventDefault();

    let userHeight;
    let userWeight;
    let message;

    if (heightMeasure === "feet") {
        if (!height.value.trim() || isNaN(Number(height.value))) {
            alert("Please enter a valid height in feet.");
            return;
        }
        userHeight = Number(height.value) * 0.3048;
    }

    if (heightMeasure === "meters") {
        if (!height.value.trim() || isNaN(Number(height.value))) {
            alert("Please enter a valid height in meters.");
            return;
        }
        userHeight = Number(height.value);
    }

    if (weightMeasure === "kgs") {
        if (!weight.value.trim() || isNaN(Number(weight.value))) {
            alert("Please enter a valid weight in kgs.");
            return;
        }
        userWeight = Number(weight.value);
    }

    if (weightMeasure === "pounds") {
        if (!weight.value.trim() || isNaN(Number(weight.value))) {
            alert("Please enter a valid weight in pounds.");
            return;
        }
        userWeight = Number(weight.value) * 0.453592;
    }

    let BMI = userWeight / (userHeight ** 2);

    if (BMI < 16) {
        message = "Severely underweight.";
    } else if (BMI >= 16 && BMI <= 16.9) {
        message = "Moderately underweight.";
    } else if (BMI >= 17 && BMI <= 18.4) {
        message = "Mildly underweight.";
    } else if (BMI >= 18.5 && BMI <= 24.9) {
        message = "Normal (healthy weight).";
    } else if (BMI >= 25 && BMI <= 29.9) {
        message = "Overweight.";
    } else if (BMI >= 30 && BMI <= 34.9) {
        message = "Obese Class I (Moderate)";
    } else if (BMI >= 35 && BMI <= 39.9) {
        message = "Obese Class II (Severe)";
    } else if (BMI >= 40) {
        message = "Obese Class III (Very severe)";
    }

    document.getElementById("showBMI").innerHTML = `Your BMI is: ${BMI.toFixed(1)}`;
    document.getElementById("hidden").style.display = "block";
    document.getElementById("message").innerHTML = `Category: ${message}`;

    height.value = "";
    weight.value = "";

    console.log(message);
})