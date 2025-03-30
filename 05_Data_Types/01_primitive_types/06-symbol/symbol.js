// What Are Symbols in JavaScript ?
    
//     * In JavaScript, a Symbol is a unique and immutable primitive data type introduced in ES6(ECMAScript 2015).

//     * Symbols are primarily used as unique property keys to prevent name collisions in objects.

//     * You can create a Symbol using the Symbol() function:


            const sym1 = Symbol();
            const sym2 = Symbol();
                        
            console.log(sym1);  //Symbol()

            console.log(sym1 === sym2); // false (Every Symbol is unique)
            



    // Even if you create two Symbols with the same description, they are still unique:


            const symA = Symbol("identifier");
            const symB = Symbol("identifier");
                        
            console.log(symB);  //Symbol(identifier)
            console.log(symA === symB); // false





// Importance of Symbols

//     * Uniqueness – Symbols are always unique, preventing accidental property overwrites.

//     * Avoiding Name Collisions – Useful in large applications where multiple developers might use the same property names.

//     * Hidden Object Properties – Symbol properties do not appear in Object.keys(), for...in, or JSON.stringify(), making them useful for defining hidden metadata.

//     * Used in JavaScript Internals – JavaScript has built -in Symbols like Symbol.iterator for iteration and Symbol.toPrimitive for custom type conversions.








// Most Common Use Case of Symbol in JavaScript

//     * The most common use case of Symbols is defining unique object properties to avoid naming conflicts, especially in large - scale applications or when extending built -in objects.

//     * Example: Using Symbol as a Unique Object Key

                const ID = Symbol("id");  // Unique property key
                const user = {
                    name: "Alice",
                    age: 25,
                    [ID]: 12345,  // Using Symbol as a hidden property
                };

                console.log(user);
                // Output: { name: 'Alice', age: 25, [Symbol(id)]: 12345 }

                console.log(user[ID]); // 12345
                
        // * Benefit: The ID property does not accidentally conflict with other properties in the object.



// Other Common Use Cases

//     ** Hiding Object Properties

//         Symbols are not included in Object.keys(), for...in, or JSON.stringify():

                console.log(Object.keys(user)); // ["name", "age"]
                console.log(JSON.stringify(user)); // {"name":"Alice","age":25"}
                
        // Benefit: Useful for defining internal / private properties that are not exposed.

