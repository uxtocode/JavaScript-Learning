// Understanding typeof and instanceof in JavaScript

//     * When working with JavaScript, it's important to understand how to check the type of a value.
    
//     * JavaScript is a dynamically typed language, meaning variables do not have fixed types.

//     * To check the type of a value, we use:

//         typeof → Used for primitive values and some objects.

//         instanceof → Used for checking if an object is an instance of a class or constructor function.


// 1. typeof – Checks Data Type

//     *The typeof operator returns a string representing the type of the value.

        console.log(typeof "Hello");   // "string"
        console.log(typeof 42);        // "number"
        console.log(typeof true);      // "boolean"
        console.log(typeof undefined); // "undefined"
        console.log(typeof null);      // "object" (special case)
        console.log(typeof (100000000000000000000000000000n));  //bigint
        console.log(typeof Symbol("id"));  //symbol
        

        console.log(typeof {});        // "object"
        console.log(typeof []);        // "object"
        console.log(typeof function () { }); // "function"
    


    // * When to Use typeof
        
    //     ✅ Best for checking primitive values(string, number, boolean, etc.).
            
    //     ✅ Can detect functions(typeof someFunction === "function").

    //     ❌ Limitations: It returns "object" for null, arrays, and other objects, making it less reliable for checking specific object types.







// 2. instanceof – Checks Object Type

//     * The instanceof operator checks whether an object belongs to a specific class or constructor function.

        console.log([] instanceof Array);      // true
        console.log({} instanceof Object);     // true
        console.log(new Date() instanceof Date); // true
        console.log(/abc/ instanceof RegExp);  // true
    

    // * Using instanceof with Custom Classes

    class Person { }
    const p = new Person();
    console.log(p instanceof Person); // true
    console.log(p instanceof Object); // true (because all objects inherit from Object)
    

    // * When to Use instanceof
        
    //     ✅ Best for checking if an object belongs to a specific class or constructor

    //     ✅ Works well with built -in objects like Array, Date, and RegExp
        
    //     ❌ Limitations: Does not work with primitive values(string, number, etc.).







// Real - World Use Cases

//     Checking Data Type Before Processing

//         * If you need to check whether a value is a number before performing calculations:


                function add(x, y) {
                    if (typeof x !== "number" || typeof y !== "number") {
                        return "Error: Both values must be numbers";
                    }
                    return x + y;
                }
                console.log(add(5, 10)); // 15
                console.log(add(5, "10")); // Error: Both values must be numbers
                







    // Checking If a Variable is an Array

    //     * Since typeof returns "object" for arrays, use instanceof or Array.isArray():


                const arr = [1, 2, 3];

                console.log(typeof arr);          // "object" (not helpful)
                console.log(arr instanceof Array); // true (correct)
                console.log(Array.isArray(arr));  // true (best practice)
                



                const myObj = {
                    firstName: "Max",
                    lastName: "Jack"
                }
                console.log(typeof myObj);             // "object" (not helpful)
                console.log(myObj instanceof Object);  // true (correct)




// Summary

//     * Use typeof for primitive values(string, number, boolean, etc.).

//     * Use instanceof for objects and class instances (Array, Date, CustomClass).

//     * For arrays, use Array.isArray() instead of typeof or instanceof.