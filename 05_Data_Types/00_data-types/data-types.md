

Introduction to Data Types in JavaScript


    * In JavaScript, a data type defines the kind of value a variable can hold.
    
    * Think of it like different types of boxes used for storing different things.
    
    * Some boxes hold simple values like numbers or text, while others hold collections of items like lists or objects.


    * There are two main categories of data types:

        1. Primitive Data Types (simple values that cannot be changed directly)

        2. Non-Primitive (Reference) Data Types (complex structures that store collections of data)







    1️⃣ Primitive Data Types (Basic, Simple Values)

            * These store only one value at a time and are immutable (cannot be changed directly).



            🔢 Number (For numbers)

                * Example: 
                        
                        let age = 25;

                * Used for both whole numbers and decimals.

                * Can do math operations like +, -, *, /.




            🔤 String (For text)

                * Example: 
                
                        let name = "Alice";

                * Always written inside quotes ("", '', or ` `).

                * Used for storing words, sentences, or even single characters.




            ✅ Boolean (For true/false values)

                * Example: 
                
                        let isLoggedIn = true;

                * Only two possible values: true or false.

                * Used for making decisions in code.




            ❓ Undefined (For unassigned values)

                * Example:

                    let x; 
                    console.log(x); // undefined

                * A variable that is declared but not given any value.





            🚫 Null (For empty values)

                * Example:
                
                    let y = null;

                * Used when you intentionally want to say, "This has no value."





            🔑 Symbol (For unique values – advanced topic)

                * Example:
                
                    let id = Symbol("uniqueKey");

                * Mostly used in advanced programming to create unique object properties.





            🔢 BigInt (For very large numbers – rarely used)

                * Example: 
                
                    let bigNumber = 12345678901234567890n;

                * Used when numbers are too big for the normal Number type.





    2️⃣ Non-Primitive (Reference) Data Types (Complex, Collections of Values)

            * These store multiple values and are mutable (can be changed).



            📦 Object (For structured data)
            
                * Example:

                    let person = { name: "John", age: 30 };

                * Stores data in key-value pairs.





            📋 Array (For lists of items)

                * Example:
                
                    let fruits = ["Apple", "Banana", "Cherry"];

                * Stores multiple values in a single variable.





            🎭 Function (For reusable blocks of code)

                * Example:

                    function greet() {
                        console.log("Hello!");
                    }

                * Functions perform tasks when called.





            📅 Date (For working with dates and times)

                * Example: 
                
                    let today = new Date();
                    console.log(today);  //2025-03-29T04:35:29.953Z

                * Used to get the current date and time.





    🔹 Key Differences:


    Type	              Stores	             Example

    Primitive	          A single value	     let num = 5;
    Non-Primitive	      Multiple values	     let obj = {name: "Alex"};
