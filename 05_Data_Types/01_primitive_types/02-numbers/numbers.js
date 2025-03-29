// 🔹 Creating Numbers in JavaScript

let num1 = 42;        // Integer
let num2 = 3.14;      // Floating-point number
let num3 = 0b1010;    // Binary (10 in decimal)




// 1️⃣ Rounding Methods

console.log(Math.round(4.6));   // Output: 5
console.log(Math.floor(4.9));   // Output: 4
console.log(Math.ceil(4.1));    // Output: 5


// 2️⃣ Checking Numbers

console.log(isNaN("Hello"));   // Output: true
console.log(isFinite(1000));   // Output: true
console.log(isFinite(Infinity)); // Output: false


// 3️⃣ Converting Strings to Numbers

console.log(parseInt("42"));      // Output: 42
console.log(parseFloat("3.14"));  // Output: 3.14
console.log(Number("99"));        // Output: 99

console.log(Number("44s"));       //Output: NaN


// 4️⃣ Random Number Between a Range

let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum);  // Output: Random number between 1 and 10



// 5. toString(), toPrecision and toFixed()

console.log((3.14159).toFixed(2));      //3.14
console.log((3.14159).toPrecision(5));  //3.1416
console.log((3.14159).toString());      //3.14159



// 6. Math.pow(), Math.sqrt(), Math.abs()

console.log(Math.pow(2, 3));  //8
console.log(Math.sqrt(25));   //5
console.log(Math.abs(-20));   //20