// 🔹 What is a String ?

        // * A string is a sequence of characters(letters, numbers, symbols) enclosed in quotes:

        //     >> Single Quotes(' '): 'Hello'

        //     >> Double Quotes(" "): "Hello"

        //     >> Backticks(Template Literals` `): `Hello`(used for dynamic strings)
        


// 🔹 Declaring Strings

let string1 = "Hello";
let string2 = 'World';
let string3 = `JavaScript`; 
            
console.log(string1);  //Hello
console.log(string2);  //World
console.log(string3);  //JavaScript




// String Methods
// 1️⃣ .length – Get the length of a string

let str1 = "Hello World";
console.log(str1.length);  //11



// 2️⃣ .toUpperCase() – Convert to uppercase

let str2 = "Alex";
console.log(str2.toUpperCase());  //ALEX



// 3️⃣ .toLowerCase() – Convert to lowercase

let str3 = "Andrew Jackson";
console.log(str3.toLowerCase());  //andrew jackson



// 4️⃣ .trim() – Remove spaces from start & end

let str4 = "        Hello    World   !";
console.log(str4.trim());  //Hello    World   !
 


// 5️⃣ .trimStart() – Remove spaces from the start

let str5 = "     Hello World     !  ";
console.log(str5.trimStart());   //Hello World     !



// 6️⃣ .trimEnd() – Remove spaces from the end

let str6 = "     Hello World     !  ";
console.log(str6.trimStart());   //     Hello World     !





// 7️⃣ .charAt(index) – Get character at a specific position

let str7 = "JavaScript";
console.log(str7.charAt(4));  //S



// 8️⃣ .indexOf("text") – Find first occurrence of a substring

let str8 = "Python";
console.log(str8.indexOf("t")); //2




// 9️⃣ .lastIndexOf("text") – Find last occurrence of a substring

let str9 = "Hello World!";
console.log(str9.indexOf("l")); //2





// 🔟 .includes("text") – Check if string contains a word

let str10 = "Python";
console.log(str10.includes("t")); //true
console.log(str10.includes("l")); //false




// 1️⃣1️⃣ .startsWith("text") – Check if it starts with specific text

let str11 = "Python";
console.log(str11.startsWith("P")); //true
console.log(str11.startsWith("p")); //false
console.log(str11.startsWith("l")); //false




// 1️⃣2️⃣ .endsWith("text") – Check if it ends with specific text

let str12 = "Python";
console.log(str12.endsWith("N")); //false
console.log(str12.endsWith("n")); //true
console.log(str12.endsWith("p")); //false



// 1️⃣3️⃣ .slice(start, end) – Extract a part of a string  (do not include last index)

let str13 = "Hello World!";
console.log(str13.slice(1, 4)); //ell
console.log(str13.slice(4)); //o World!  (By default zero end index is till last of that string)


// Using negative indices
console.log(str13.slice(-6));      // Output: "World!" (Extracts last 6 characters)
console.log(str13.slice(-9, -6));  // Output: "lo " (From -9 to -6, not including -6)
console.log(str13.slice(-6, -2));  // Output: "Worl"





// 1️⃣4️⃣ .substring(start, end) – Extract a part of a string(no negative index)  (do not include last index)

let str14 = "Hello World!";
console.log(str14.substring(1, 4)); //ell
console.log(str14.substring(4)); //o World!  (By default zero end index is till last of that string)







// 1️⃣5️⃣ .replace(old, new) – Replace first occurrence of text

let str15 = "JavaScript";
console.log(str15.replace("a", "t")); //JtvaScript
console.log(str15.replace("a", "")); //JvaScript  (remove the charater)





// 1️⃣6️⃣ .replaceAll(old, new) – Replace all occurrences of text

let str16 = "JavaScript";
console.log(str16.replaceAll("a", "t")); //JtvtScript
console.log(str16.replaceAll("a", "")); //JvScript  (remove the charater)




// 1️⃣7️⃣ .split(separator) – Convert string into an array

let str17 = "JavaScript";
console.log(str17.split(","));  //["JavaScipt"]
console.log(str17.split(""));  //['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't']




// 1️⃣8️⃣ .concat(str2) – Combine two strings

let str19_1 = "Hello";
let str19_2 = "World";
console.log(str19_1.concat(str19_2));  //HelloWorld
console.log(str19_1.concat(" ", str19_2));  //Hello World


// effect on both strings
console.log(str19_1);  //Hello
console.log(str19_2);  //World





// 1️⃣9️⃣ String.fromCharCode(num) – Convert Unicode number to character

console.log(String.fromCharCode(65));  //A