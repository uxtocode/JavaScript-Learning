
// Booleans in JavaScript(JS)

//     * A boolean in JavaScript is a data type that can have only two values:

//             true

//             false

//     * Think of booleans like a simple switch—on(true) or off(false).







// How to Use Booleans

//     * Booleans are mostly used in decision - making(conditions) in JavaScript.

// 1. Using Booleans in Conditions

// * Booleans help control the flow of a program using if statements.

let isRaining = true;

if (isRaining) {
    console.log("Take an umbrella! ☔"); // This will run because isRaining is true
} else {
    console.log("Enjoy the sunshine! ☀️");
}



// 2. Boolean Values from Comparisons

//     * Comparisons between values return booleans.

console.log(10 > 5); // true
console.log(3 === 5); // false
console.log("apple" !== "banana"); // true




// 3. Boolean Values in Variables

//     * You can store true or false in variables.


let isLoggedIn = false;
let hasPermission = true;





// 4. Boolean Values in Logical Operators

//     * Logical operators(&&, ||, !) work with booleans.

let isAdult = true;
let hasID = false;

console.log(isAdult && hasID); // false (Both must be true)
console.log(isAdult || hasID); // true (At least one must be true)
console.log(!isAdult); // false (Negates the value)



// Why are Booleans Useful ?

//     ✔ Help in making decisions(if conditions)
//     ✔ Used in loops to stop or continue execution
//     ✔ Used in toggles(on / off switches, dark mode, etc.)
//     ✔ Make programs more dynamic and interactive