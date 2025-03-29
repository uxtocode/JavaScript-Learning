
📌 JavaScript Strings & Commonly Used Methods


    🔹 What is a String?

        * A string is a sequence of characters (letters, numbers, symbols) enclosed in quotes:

            >> Single Quotes (' '): 'Hello'

            >> Double Quotes (" "): "Hello"

            >> Backticks (Template Literals ` `): `Hello` (used for dynamic strings)


    🔹 Declaring Strings

            let str1 = "Hello"; 
            let str2 = 'World'; 
            let str3 = `JavaScript`; 




📌 Most Commonly Used String Methods


    1️⃣ .length → Get the length of a string

    * Returns the number of characters (including spaces).

        let text = "Hello World";
        console.log(text.length); // Output: 11



    2️⃣ .toUpperCase() & .toLowerCase() → Change case

        * .toUpperCase(): Converts string to UPPERCASE.

        * .toLowerCase(): Converts string to lowercase.

        let word = "JavaScript";
        console.log(word.toUpperCase()); // Output: "JAVASCRIPT"
        console.log(word.toLowerCase()); // Output: "javascript"



    3️⃣ .trim() → Remove spaces from start & end

        let message = "  Hello  ";
        console.log(message.trim()); // Output: "Hello"


        * .trimStart() → Removes spaces only from start.

        * .trimEnd() → Removes spaces only from end.




    4️⃣ .charAt(index) → Get character at a position

        let text = "JavaScript";
        console.log(text.charAt(4)); // Output: "S"

        Alternative: text[4] also works!




    5️⃣ .indexOf() & .lastIndexOf() → Find position of a substring
    
        * .indexOf("text") → First occurrence

        * .lastIndexOf("text") → Last occurrence

        let sentence = "I love JavaScript because JavaScript is fun!";
        console.log(sentence.indexOf("JavaScript")); // Output: 7
        console.log(sentence.lastIndexOf("JavaScript")); // Output: 26


        * If not found, it returns -1.




    6️⃣ .includes() → Check if a string contains a word

        * Returns true or false.

            let text = "Learn JavaScript";
            console.log(text.includes("JavaScript")); // Output: true
            console.log(text.includes("Python")); // Output: false





    7️⃣ .startsWith() & .endsWith() → Check the beginning and end

            let text = "Hello World";
            console.log(text.startsWith("Hello")); // Output: true
            console.log(text.endsWith("World")); // Output: true





    8️⃣ .slice(start, end) → Extract part of a string

        * Extracts a portion of a string from start to end (ending index is not included).

        * If end is omitted, it extracts till the end.

            let text = "JavaScript";
            console.log(text.slice(0, 4)); // Output: "Java"
            console.log(text.slice(-6)); // Output: "Script" (Negative index counts from end)





    9️⃣ .substring(start, end) → Similar to .slice()

            let text = "JavaScript";
            console.log(text.substring(0, 4)); // Output: "Java"





    🔟 .replace(old, new) → Replace part of a string

            let text = "I love JavaScript!";
            console.log(text.replace("JavaScript", "Python")); 

            // Output: "I love Python!"



        * For multiple occurrences, use .replaceAll() or regex

            let text = "JavaScript is awesome. JavaScript is powerful!";
            console.log(text.replaceAll("JavaScript", "Python"));





    1️⃣1️⃣ .split(separator) → Convert string into an array
    
            let text = "apple,banana,grapes";
            let fruits = text.split(",");
            console.log(fruits); // Output: ["apple", "banana", "grapes"]





    1️⃣2️⃣ .concat() → Combine two or more strings

            let str1 = "Hello";
            let str2 = "World";
            console.log(str1.concat(" ", str2)); // Output: "Hello World"

            Alternative: + operator → "Hello" + " " + "World"





    1️⃣3️⃣ String.fromCharCode() → Convert Unicode to character

            console.log(String.fromCharCode(65)); // Output: "A"






📌 Special String Type: Template Literals (Backticks ` `)



    * Allows multi-line strings and ${} for inserting variables.

        let name = "Alice";
        let age = 25;
        console.log(`Hello, my name is ${name} and I am ${age} years old.`);








📌 Summary Table



     Method	                        Description

    .length	                        Returns the number of characters
    .toUpperCase()	                Converts to uppercase
    .toLowerCase()	                Converts to lowercase
    .trim()	                        Removes spaces from both sides
    .charAt(n)	                    Returns character at index n
    .indexOf()	                    Returns position of first match
    .includes()	                    Checks if a string contains text
    .startsWith()	                Checks if it starts with text
    .endsWith()	                    Checks if it ends with text
    .slice(start, end)	            Extracts a part of the string
    .replace(old, new)	            Replaces first occurrence
    .replaceAll(old, new)	        Replaces all occurrences
    .split(delimiter)	            Converts string to array
    .concat(str2)	                Combines two strings




📌 Interview & Commonly Asked Questions

    1. Difference between .slice() and .substring()?

            .slice() supports negative indexes, but .substring() does not.


    2. How to check if a string contains a word?

            Use .includes("word")


    3. How to remove spaces from a string?

            Use .trim(), .trimStart(), or .trimEnd().