// 1. Primitives


// (i) Number (Stores whole numbers as well as decimal numbers)

let score1 = 102;
console.log(score1);  //102


let score2 = 10.8;
console.log(score2);  //10.8







// (ii) Strings to store text, symbols and other characters using "", '', ``(backticks).

let person1 = "Harry";
console.log(person1);  //Harry

let person2 = 'Ram';
console.log(person2);  //Ram

let person3 = `Alex`;
console.log(person3);  //Alex


let randomPassword = "a@b%$";
console.log(randomPassword);  //a@b%$





// (iii) Boolean (store only true or false)

let isLoggedIn = true;
console.log(isLoggedIn);  //true


let isPlayer = false; 
console.log(isPlayer);   //false







// (iv) null (Store only null value) We need to explicitly mention the value "null" 

let temprature = null;
console.log(temprature); //null






// (v) undefined (store undefined value)

// when we declare the variable, but do not store any value in it.
let nextPerson;
console.log(nextPerson);     //undefined


// when we explicitly mention the value undefined.

let nextPerson2 = undefined;
console.log(nextPerson2);     //undefined





// (vi) Symbol (Stored a unique value in it)

let key = Symbol("My new Symbol Key");
console.log(key);    //Symbol(My new Symbol Key)




// (vii) BigInt (Stores very larger numbers - rarely used)

let myBigInt = 12345678901234567890n;
console.log(myBigInt);     //12345678901234567890n




















// 2. Non-Primitive (Refrence Types)

// (i) Objects (used to store the values in key-value pairs)
let myObj = {
    firstName: "Andrew",
    lastName: "Jackson",
    age: 44,
    city: "London"
}

console.log(myObj);
// {
//     firstName: "Andrew",
//     lastName: "Jackson",
//     age: 44,
//     city: "London"
// }





// (ii) Array (For multiple values of different types)

let myArr = [1, 2, 3, 4, "Hello", 5, true, [6, 7, 8], 9, {name: "Max"}];
console.log(myArr);  //[ 1, 2, 3, 4, 'Hello', 5, true, [ 6, 7, 8 ], 9, { name: 'Max' } ]





// (iii) Functions (For reusable block of code)

function greet(name) {
    console.log(`Hello ${name}`);
}

// here we are calling the "greet" function by greet("Max").
// Names in "" are the arguments which are referring to the "name" in the function above.
greet("Max");
greet("Alex");
greet("Jackson");

// Hello Max
// Hello Alex
// Hello Jackson




// (iv) Date (for date and time)
let today = new Date();
console.log(today);   //2025-03-29T05:01:36.236Z