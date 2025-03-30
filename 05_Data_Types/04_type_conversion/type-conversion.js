// Type Conversion in JavaScript

//     * Type conversion in JavaScript refers to changing the data type of a value from one type to another.
    

//     * There are two types of type conversion:

//         1. Implicit Type Conversion(Type Coercion)

//             * JavaScript automatically converts data types when needed(e.g., when using + with a string and a number).

//             Example:

            console.log("5" + 3);  // "53" (Number converted to String)
            console.log("5" - 3);  // 2 (String converted to Number)
            



        // 2. Explicit Type Conversion(Type Casting)

        //     * Developers manually convert data types using built-in JavaScript methods.




// Methods for Explicit Type Conversion
    
// Here are the commonly used methods for type conversions:

//     1. Converting to String

//             * String(value)

//             * toString()

//             * JSON.stringify(value)

//             Example:

            let num = 42;
            console.log(String(num));     // "42"
            console.log(num.toString());  // "42"
            console.log(JSON.stringify({ a: 1 })); // '{"a":1}'







// 2. Converting to Number

//         * Number(value)

//         * parseInt(value)(for integers)

//         * parseFloat(value)(for decimals)

//         Example:
                
            console.log(Number("42"));       // 42
            console.log(Number("42abc"));    // NaN
            console.log(parseInt("42px"));   // 42
            console.log(parseFloat("3.14")); // 3.14
            console.log(parseFloat("3.14px")); // 3.14
            console.log(Number("abc")); // NaN (Not a Number)




            
// 3. Converting to Boolean


//     * Boolean(value)

        //     Truthy values(convert to true):

        //         Non - empty strings("hello")

        //         Non - zero numbers(1, -42, 3.14)

        //         Objects({}, [])

        //         true



        //     Falsy values(convert to false):

        //         ""(empty string)

        //         0, -0

        //         null, undefined

        //         NaN

        //         false

//     Example:

    console.log(Boolean("hello")); // true
    console.log(Boolean(0));       // false
    console.log(Boolean([]));      // true
    console.log(Boolean(null));    // false








// 4. Converting to Object

//     * JSON.parse(value)(from JSON string to object)

//     Example:

    let jsonString = '{"name": "John", "age": 30}';
    let obj = JSON.parse(jsonString);
    console.log(obj.name); // "John"




// Summary Table

// Conversion	    Method
// To String	    String(value), toString(), JSON.stringify(value)
// To Number	    Number(value), parseInt(value), parseFloat(value)
// To Boolean	    Boolean(value)
// To Object	    JSON.parse(value)




// Conversion of null and undefined
console.log("converion of null and undefined");



console.log(String(null));         //"null"
console.log(String(undefined));    //"undefined"


let a = null;
let b;
console.log(a.toString());       //"null"
console.log(b.toString());       //undefined



console.log(Number(null));         //0
console.log(Number(undefined));    //NaN



console.log(parseInt(null));       //NaN
console.log(parseInt(undefined));  //NaN



console.log(parseFloat(null));       //NaN
console.log(parseFloat(undefined));  //NaN



console.log(Boolean(null));        //false
console.log(parseInt(undefined));  //NaN