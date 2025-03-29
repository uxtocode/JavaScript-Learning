
📌 JavaScript Numbers & Commonly Used Methods

    * In JavaScript, numbers are of one type: Number.
    
    * Unlike other languages, JavaScript does not differentiate between int and float—all numbers are stored as floating-point (decimal) values.

    🔹 Creating Numbers in JavaScript

            let num1 = 42;        // Integer
            let num2 = 3.14;      // Floating-point number
            let num3 = 1e3;       // Exponential notation (1000)
            let num4 = 0b1010;    // Binary (10 in decimal)
            let num5 = 0o52;      // Octal (42 in decimal)
            let num6 = 0x2A;      // Hexadecimal (42 in decimal)



    🔹 Most Commonly Used Number Methods


            Method	                   Description	                                                                Example

            toFixed(n)	               Rounds the number to n decimal places (returns a string).	                (3.14159).toFixed(2) → "3.14"

            toPrecision(n)	           Rounds to n total digits (returns a string).	                                (3.14159).toPrecision(5) → "3.1416"

            toString(base)	           Converts a number to a string in a specified base (default: decimal).	    (255).toString(16) → "ff"

            parseInt(str, base)	       Converts a string into an integer (base optional).	                         parseInt("42") → 42, parseInt("101", 2) → 5

            parseFloat(str)	           Converts a string into a floating-point number.	                             parseFloat("3.14") → 3.14

            isNaN(value)	           Checks if a value is NaN (Not-a-Number).	                                     isNaN("Hello") → true, isNaN(42) → false

            isFinite(value)	           Checks if a value is a finite number.	                                     isFinite(100) → true, isFinite(Infinity) → false

            Math.round(num)	           Rounds to the nearest integer.	                                             Math.round(4.7) → 5, Math.round(4.2) → 4

            Math.floor(num)	           Rounds down to the nearest integer.	                                         Math.floor(4.9) → 4

            Math.ceil(num)	           Rounds up to the nearest integer.	                                         Math.ceil(4.1) → 5

            Math.abs(num)	           Returns the absolute value.	                                                 Math.abs(-10) → 10

            Math.pow(base, exp)	       Raises base to the power of exp.	                                             Math.pow(2, 3) → 8

            Math.sqrt(num)	           Returns the square root.	                                                     Math.sqrt(16) → 4

            Math.random()	           Generates a random number between 0 and 1.	                                 Math.random() → 0.5683

            Number.MAX_VALUE	       Largest possible number in JavaScript.	                                     1.7976931348623157e+308

            Number.MIN_VALUE	       Smallest positive number in JavaScript.	                                     5e-324



🔹 Quick Demos

    1️⃣ Rounding Methods

            console.log(Math.round(4.6));   // Output: 5
            console.log(Math.floor(4.9));   // Output: 4
            console.log(Math.ceil(4.1));    // Output: 5


    2️⃣ Checking Numbers

            console.log(isNaN("Hello"));   // Output: true
            console.log(isFinite(1000));   // Output: true
            console.log(isFinite(Infinity)); // Output: false


    3️⃣ Converting Strings to Numbers

            console.log(parseInt("42"));      // Output: 42
            console.log(parseFloat("3.14"));  // Output: 3.14
            console.log(Number("99"));        // Output: 99


    4️⃣ Random Number Between a Range

            let randomNum = Math.floor(Math.random() * 10) + 1; 
            console.log(randomNum);  // Output: Random number between 1 and 10



📌 Key Takeaways

    ✔ JavaScript stores all numbers as floating-point values.
    ✔ Use Math methods for rounding, power, and randomness.
    ✔ parseInt() & parseFloat() convert strings to numbers.
    ✔ isNaN() helps check if a value is Not-a-Number.
    ✔ toFixed(n) is useful for rounding decimals.