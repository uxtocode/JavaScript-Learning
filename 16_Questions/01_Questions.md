Got it! Here's the full list with answers:  

---

### **1️⃣ Introduction to JavaScript**  

1. **What is JavaScript?**  
   JavaScript is a high-level, interpreted programming language used to add interactivity to web pages. It is primarily used for **client-side** web development but can also be used on the **server-side** with Node.js.  

2. **Who created JavaScript, and in which year?**  
   JavaScript was created by **Brendan Eich** in **1995** while working at Netscape.  

3. **What was the original name of JavaScript?**  
   It was initially called **Mocha**, then renamed to **LiveScript**, and finally changed to **JavaScript** for marketing reasons.  

4. **How does JavaScript differ from Java?**  
   JavaScript and Java are completely different languages:  
   - **Java** is a statically typed, compiled language, while **JavaScript** is dynamically typed and interpreted.  
   - Java runs on the **Java Virtual Machine (JVM)**, whereas JavaScript runs in browsers and Node.js.  
   - Java is **class-based**, while JavaScript is **prototype-based**.  

5. **What is ECMAScript?**  
   ECMAScript (ES) is the standard on which JavaScript is based. It defines the rules, syntax, and features of JavaScript.  

6. **Which version of ECMAScript introduced `let` and `const`?**  
   ECMAScript **ES6 (2015)** introduced `let` and `const`.  

7. **What is the latest version of ECMAScript called?**  
   The latest version is **ECMAScript 2024** (or simply ES2024). ECMAScript versions are released yearly.  

8. **What is ES5, and how is it different from ES6?**  
   - **ES5 (ECMAScript 2009)** was widely supported and introduced strict mode.  
   - **ES6 (ECMAScript 2015)** introduced modern features like `let`, `const`, arrow functions, template literals, and classes.  

9. **How does JavaScript run in browsers?**  
   JavaScript runs inside a browser’s **JavaScript engine** (e.g., V8 in Chrome, SpiderMonkey in Firefox). The browser **parses**, **compiles (JIT - Just-In-Time)**, and **executes** JavaScript code.  

10. **What is Node.js, and how is it different from browser JavaScript?**  
    - **Node.js** is a runtime environment that allows JavaScript to run outside of a browser.  
    - It is used for **server-side development** and can handle **file systems, databases, and networking**.  
    - Unlike browsers, Node.js does not have a **DOM or window object**.  

---

### **2️⃣ JavaScript Execution Process**  

11. **Is JavaScript interpreted or compiled?**  
    JavaScript is **both interpreted and JIT-compiled**. Modern JavaScript engines use **Just-In-Time (JIT) compilation** for better performance.  

12. **What is an execution context in JavaScript?**  
    An **execution context** is an environment where JavaScript code runs. It includes variables, functions, and the **call stack**.  

13. **What are the two types of execution contexts?**  
    1. **Global Execution Context (GEC)** – The default execution context for JavaScript code.  
    2. **Function Execution Context (FEC)** – Created whenever a function is invoked.  

14. **What is the global execution context?**  
    The **GEC** is the default context where JavaScript starts execution (e.g., in browsers, it refers to the `window` object).  

15. **What is the function execution context?**  
    A **FEC** is created every time a function is called, storing the function’s variables and execution state.  

16. **What is the call stack in JavaScript?**  
    The **call stack** is a data structure that keeps track of function calls in JavaScript.  

17. **How does the call stack work?**  
    - Functions are pushed onto the stack when invoked.  
    - They execute and are popped off when completed.  

18. **What happens when the call stack overflows?**  
    A **stack overflow** occurs if too many function calls are added without returning, causing an error.  

19. **What is the event loop in JavaScript?**  
    The **event loop** handles asynchronous code by moving tasks from the **callback queue** to the call stack when it is empty.  

20. **How does the callback queue work in JavaScript?**  
    - Asynchronous tasks (e.g., setTimeout, API calls) go to the **callback queue**.  
    - The event loop moves them to the **call stack** when it is empty.  

---

### **3️⃣ Current Features of JavaScript (ES6+)**  

21. **What is the difference between `let`, `const`, and `var`?**  
    - `var` – Function-scoped, can be redeclared, and hoisted.  
    - `let` – Block-scoped, cannot be redeclared.  
    - `const` – Block-scoped, cannot be reassigned.  

22. **What is a template literal, and how is it different from a regular string?**  
    Template literals use **backticks (`) instead of quotes (" or ')** and allow **string interpolation** using `${}`.  

23. **How do arrow functions differ from regular functions?**  
    - Arrow functions do not have their own `this`.  
    - They are more concise and do not require the `function` keyword.  

24. **What are the advantages of using arrow functions?**  
    - Shorter syntax  
    - Lexical `this` (inherits `this` from the surrounding scope)  

25. **What is object destructuring in JavaScript?**  
    Extracting values from objects into variables.  
    ```js
    const person = { name: "Alice", age: 25 };
    const { name, age } = person;  
    ```

26. **What is the spread operator, and how is it used?**  
    The spread operator (`...`) expands iterable elements:  
    ```js
    const arr1 = [1, 2];
    const arr2 = [...arr1, 3, 4];  // [1, 2, 3, 4]
    ```

27. **What is the rest operator, and how is it different from the spread operator?**  
    - **Spread (`...`)** expands elements.  
    - **Rest (`...`)** collects elements into an array.  
    ```js
    function sum(...nums) {
      return nums.reduce((a, b) => a + b, 0);
    }
    ```

28. **How do you set default parameters in a function?**  
    ```js
    function greet(name = "Guest") {
      console.log(`Hello, ${name}`);
    }
    ```

29. **What is the `for...of` loop used for?**  
    Iterating over **arrays, strings, maps, sets** (not objects).  

30. **How do you import and export modules in JavaScript?**  
    **Export:**
    ```js
    export const name = "John";
    ```
    **Import:**
    ```js
    import { name } from './file.js';
    ```

---


### **4️⃣ Use Cases of JavaScript**  

31. **How is JavaScript used in frontend development?**  
    JavaScript enhances interactivity by manipulating the **DOM**, handling events, making API calls, and updating UI dynamically.  

32. **What is the DOM, and how does JavaScript manipulate it?**  
    The **Document Object Model (DOM)** is a tree-like structure representing an HTML page. JavaScript can modify elements using methods like `document.getElementById()` and `document.querySelector()`.  

33. **How is JavaScript used in backend development?**  
    JavaScript, with **Node.js**, enables server-side programming, handling databases, authentication, and APIs.  

34. **What is Node.js mainly used for?**  
    - Building REST APIs  
    - Server-side scripting  
    - Real-time applications (e.g., chats, live notifications)  

35. **What does full-stack development mean?**  
    Full-stack development involves both **frontend (React, Vue, etc.)** and **backend (Node.js, Express, etc.)** programming.  

36. **Name one JavaScript game development library or framework.**  
    **Phaser.js** is a popular game development framework for JavaScript.  

37. **How is JavaScript used in mobile app development?**  
    JavaScript, with frameworks like **React Native**, allows building cross-platform mobile apps.  

38. **What is React Native?**  
    A JavaScript framework that enables writing mobile apps using React, running on both Android and iOS.  

39. **What is Electron, and what is it used for?**  
    **Electron.js** allows building cross-platform desktop applications using JavaScript, HTML, and CSS (e.g., VS Code).  

40. **Can JavaScript be used for AI and Machine Learning?**  
    Yes! Libraries like **TensorFlow.js** enable AI and ML in JavaScript.  

---

### **5️⃣ Variables and Scope**  

41. **What is variable hoisting in JavaScript?**  
    JavaScript moves function and variable declarations to the top before execution.  
    ```js
    console.log(a); // undefined
    var a = 10;
    ```

42. **What is the difference between function scope and block scope?**  
    - **Function scope** (`var`) – Variables are accessible inside the function.  
    - **Block scope** (`let`, `const`) – Variables are accessible only within `{}`.  

43. **Which keyword (`var`, `let`, or `const`) allows block scope?**  
    **`let` and `const`** allow block scope.  

44. **Can `const` variables be reassigned?**  
    No, `const` variables cannot be reassigned.  
    ```js
    const x = 5;
    x = 10; // Error!
    ```

45. **What happens if you declare a variable with `var` inside a function?**  
    It is **function-scoped** and cannot be accessed outside the function.  

---

### **6️⃣ Data Types and Methods**  

46. **What are the seven primitive data types in JavaScript?**  
    1. `String`  
    2. `Number`  
    3. `Boolean`  
    4. `Undefined`  
    5. `Null`  
    6. `Symbol`  
    7. `BigInt`  

47. **What is the difference between primitive and reference types?**  
    - **Primitive types** (string, number, etc.) are stored **by value**.  
    - **Reference types** (objects, arrays, functions) are stored **by reference**.  

48. **What function converts a string to a number?**  
    ```js
    Number("123"); // 123
    parseInt("123"); // 123
    parseFloat("123.45"); // 123.45
    ```

49. **What does `typeof null` return?**  
    `"object"` (this is a well-known JavaScript bug).  

50. **How do you check if an object is an instance of a specific class?**  
    ```js
    class Car {}
    const myCar = new Car();
    console.log(myCar instanceof Car); // true
    ```

---

### **Additional Questions**  

51. **What are some common JavaScript frameworks and libraries?**  
    - **Frontend**: React, Vue, Angular  
    - **Backend**: Node.js, Express  
    - **Others**: jQuery, D3.js  

52. **Why is JavaScript called a single-threaded language?**  
    JavaScript runs on **a single main thread** and can execute **only one operation at a time**.  

53. **What is the difference between synchronous and asynchronous JavaScript?**  
    - **Synchronous**: Executes line by line, blocking the code.  
    - **Asynchronous**: Uses callbacks, promises, or async/await to handle non-blocking operations.  

---

### **JavaScript Execution Process (Additional)**  

54. **What is lexical scope in JavaScript?**  
    A function can access variables **from its parent scope**, but not vice versa.  

55. **What happens during the creation phase of an execution context?**  
    - Memory is allocated for variables.  
    - Functions are hoisted.  
    - `this` is assigned.  

56. **What is the difference between a callback function and a normal function?**  
    - A **normal function** executes immediately.  
    - A **callback function** is passed to another function and runs later.  

57. **How does JavaScript handle asynchronous operations?**  
    Using **callbacks, promises, and async/await**.  

58. **Why is the event loop important in JavaScript?**  
    It ensures non-blocking execution by handling **callbacks and async tasks**.  

---

### **Current Features of JavaScript (ES6+) (Additional)**  

59. **How does the `const` keyword work with objects and arrays?**  
    - The reference **cannot be changed**, but the content **can be modified**.  
    ```js
    const obj = { a: 1 };
    obj.a = 2; // ✅ Allowed
    obj = { b: 3 }; // ❌ Error
    ```

60. **What happens when you try to reassign an object declared with `const`?**  
    It results in an error.  

61. **What is the difference between a shallow copy and a deep copy in JavaScript?**  
    - **Shallow copy**: Copies references (e.g., `Object.assign()`).  
    - **Deep copy**: Copies values (e.g., `JSON.parse(JSON.stringify(obj))`).  

62. **How do you use the spread operator to clone an array?**  
    ```js
    const arr1 = [1, 2, 3];
    const arr2 = [...arr1]; // Clone of arr1
    ```

63. **What are default function parameters used for?**  
    To set default values if no argument is passed.  

64. **Can you use `for...of` on objects? Why or why not?**  
    No, `for...of` works only on **iterables** (arrays, strings, maps).  

---

### **Use Cases of JavaScript (Additional)**  

65. **What is AJAX, and how is it related to JavaScript?**  
    **AJAX (Asynchronous JavaScript and XML)** enables fetching data from servers **without reloading the page**.  

66. **What role does JavaScript play in API interactions?**  
    JavaScript uses `fetch()` or `XMLHttpRequest` to request data from APIs.  

67. **What is the difference between client-side and server-side JavaScript?**  
    - **Client-side**: Runs in the browser (DOM, UI).  
    - **Server-side**: Runs on Node.js (database, authentication).  

68. **What is the difference between JavaScript and TypeScript?**  
    TypeScript is **JavaScript with static typing** and extra features.  

---

### **Variables and Scope (Additional)**  

69. **What is a temporal dead zone (TDZ) in JavaScript?**  
    The time between variable declaration and initialization when it **cannot be accessed**.  

70. **What happens when you try to use `let` before it is declared?**  
    A **ReferenceError** occurs due to TDZ.  

71. **What is the difference between mutable and immutable data types?**  
    - **Mutable**: Objects, arrays (modifiable).  
    - **Immutable**: Strings, numbers (unchangeable).  

---

### **Data Types and Methods (Additional)**  

72. **What is the difference between `parseInt()` and `Number()`?**  
    - `parseInt("10px") → 10`  
    - `Number("10px") → NaN`  

73. **How can you check if a variable is an array?**  
    ```js
    Array.isArray(arr);
    ```

74. **What does `typeof NaN` return?**  
    `"number"`  

75. **What is the difference between `==` and `===` in JavaScript?**  
    - `==` checks **value** (loose comparison).  
    - `===` checks **value and type** (strict comparison).  

---
