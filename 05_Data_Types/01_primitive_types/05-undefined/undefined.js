
// What is undefined in JavaScript ?
    
//     undefined means that a variable has been declared but has not been assigned a value yet.

//     Think of undefined as an empty box that was never filled.




// Examples of undefined

//     1. A variable without a value is undefined

        let name;
        console.log(name); // Output: undefined

    //     Since name has been declared but not assigned a value, JavaScript automatically gives it undefined.




    // 2. Functions that don’t return anything give undefined

        function greet() {
            console.log("Hello!");
        }
        let result = greet();
        console.log(result); // Output: undefined

        // Even though the function prints "Hello!", it does not return anything, so result is undefined.






    // 3. Accessing a non - existent object property

    let user = { name: "Alice" };
    console.log(user.age); // Output: undefined (age does not exist)




// Difference Between ** undefined ** and ** null **

// Feature	           undefined	                                     null
// Meaning	           Variable declared but not assigned a value	     Intentional absence of value
// Assigned by	       JavaScript(automatically)	                     Developer(manually)


// Example

let x;
console.log(x); // undefined	

let y = null;
console.log(y); // null






// When to Use undefined ?

// You should NOT manually assign undefined to a variable.
//     Instead, use null when you want to indicate "no value."