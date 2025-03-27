// 5️⃣ Variables and Scope

//     * Declaration: var, let, const

//     * Scope: Global, Function, Block Scope

//     * Hoisting in JavaScript




// Variables and scope in JS

// Variables are like container, which holds the value.
// We can declare variable using:-let, var or const. For example:- 

let a = 10;
const b = 5;
var c = 2;
console.log(a, b, c); //10 5 2



// rules:- 
// variable name can conatin     ( a-z , A-Z , 0-9, _ , $ )
// variable name must start with  ( a-z , A-Z , _ , $ )
// should not be a keyword
// variables are case sensitive
// variable name must be meaningful
// use camelCase for variable naming

// Example of some variables

let score = 102;
let isLoggedIn = true;
const pi = 3.14;





// Using var declaration
// (note:- It is not recommended to use var nowadays, because it is function scoped and can cause unintentional bugs in the code)

var person1 = "Harry";
console.log(person1); //Harry


if (true) {
    var person2 = "Hitesh";
}
console.log(person2);  //Hitesh

function greet() {
    var person3 = "Raju";
}
console.log(person3);  //ReferenceError: person3 is not defined


// Here we can see that the variable declared with "var" can be accissible anywhere except ouside the function.























// Using let declaration
// let is used to declared block scoped variables inside {} only


let person11 = "Harry";
console.log(person11); //Harry


if (true) {
    let person12 = "Hitesh";
    console.log(person12);  //Hitesh
}
console.log(person12);  //ReferenceError: person12 is not defined

function greet() {
    let person13 = "Raju";
    console.log(person13);  //Raju
}
console.log(person13);  //ReferenceError: person13 is not defined


























// Using const declaration
// const is used to declared block scoped variables inside {} only

const person21 = "Harry";
console.log(person21); //Harry

person21 = "New Harry";   //TypeError: Assignment to constant variable.


if (true) {
    const person22 = "Hitesh";
    console.log(person22);  //Hitesh
}
// console.log(person22);  //ReferenceError: person22 is not defined

function greet() {
    const person23 = "Raju";
    console.log(person23);  //Raju
}
console.log(person23);  //ReferenceError: person23 is not defined











// Hoisting
// Hoisting is the process of moving the variable and function declaration to the top before there execution part


// var is hoisted, but initailized later
console.log(myName1);   //undefined
var myName1 = "Harry";
console.log(myName1);   //Harry




// let and const, hoisted but not inialized they are in the Temporal Dead Zone (TDZ)
console.log(myName2);    //ReferenceError: Cannot access 'myName2' before initialization
let myName2 = "Hitesh";
console.log(myName2);    //Hitesh





// functions (they are fully hoisted and can be called anywhere is the code)

greet("Hitesh");   //Hello Hitesh

function greet(name) {
    console.log(`Hello ${name}`);
}

greet2("Harry")    //ReferenceError: Cannot access 'greet2' before initialization
let greet2 = (name) => {
    console.log(`Hello ${name}`);
}

greet2("Harry")   //Hello Harry