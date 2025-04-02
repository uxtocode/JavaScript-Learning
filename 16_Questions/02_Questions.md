Here are the answers to your questions:

---

### **Memory Management in JavaScript**

1. **What is the difference between stack and heap memory in JavaScript?**  
   - **Stack memory** is used for storing **primitive values** and function call contexts, while **heap memory** is used for storing **objects and reference types**.

2. **How does JavaScript store primitive types in memory?**  
   - Primitive types (**numbers, strings, booleans, null, undefined, symbols, BigInt**) are stored **directly in the stack memory**.

3. **How does JavaScript store reference types in memory?**  
   - Objects, arrays, and functions are stored in **heap memory**, and only a **reference to the memory location** is stored in the stack.

4. **What happens when you copy a primitive value vs. a reference value?**  
   - Copying a **primitive value** creates a new copy in memory.  
   - Copying a **reference value** only copies the reference, not the actual object.

5. **What is garbage collection in JavaScript?**  
   - JavaScript automatically frees up memory by removing objects that are no longer **reachable**.

6. **What is the role of the mark-and-sweep algorithm in garbage collection?**  
   - It marks all **reachable** objects in memory and removes the **unreachable** ones, freeing up space.

7. **How can memory leaks occur in JavaScript, and how can they be prevented?**  
   - **Causes**: Unused event listeners, global variables, closures holding unnecessary data.  
   - **Prevention**: Remove event listeners, nullify unused references, avoid excessive global variables.

---

### **Operators & Expressions**

8. **What are arithmetic operators in JavaScript? List them with examples.**  
   - `+` (Addition): `2 + 3 = 5`  
   - `-` (Subtraction): `5 - 2 = 3`  
   - `*` (Multiplication): `4 * 2 = 8`  
   - `/` (Division): `10 / 2 = 5`  
   - `%` (Modulus): `10 % 3 = 1`  
   - `**` (Exponentiation): `2 ** 3 = 8`

9. **What is the difference between `/` (division) and `%` (modulus) operators?**  
   - `/` returns the **quotient** (e.g., `10 / 3 = 3.33`).  
   - `%` returns the **remainder** (e.g., `10 % 3 = 1`).

10. **What does the exponentiation operator (`**`) do in JavaScript?**  
    - It calculates powers, e.g., `2 ** 3` gives `8` (same as `Math.pow(2, 3)`).

11. **What is the difference between `==` and `===`?**  
    - `==` checks **value** only (performs type coercion).  
    - `===` checks **value and type** (strict equality).

12. **Why is `10 == "10"` true but `10 === "10"` false?**  
    - `10 == "10"` is true because `==` converts `"10"` (string) to `10` (number).  
    - `10 === "10"` is false because one is a number and the other is a string.

13. **What does the `!=` and `!==` operator do?**  
    - `!=` checks **inequality** with type conversion.  
    - `!==` checks **strict inequality** (value and type).

14. **How do logical operators (`&&`, `||`, `!`) work in JavaScript?**  
    - `&&` (AND) → Returns `true` if both conditions are true.  
    - `||` (OR) → Returns `true` if at least one condition is true.  
    - `!` (NOT) → Negates a boolean value.

15. **What is short-circuiting in logical operations?**  
    - If the first operand in `&&` is `false`, the second is **not evaluated**.  
    - If the first operand in `||` is `true`, the second is **not evaluated**.

16. **How does the assignment operator `+=` work? Give an example.**  
    - It adds and assigns a value:  
      ```js
      let x = 5;
      x += 3; // x is now 8
      ```

17. **What does the ternary operator do? Write an example.**  
    - It’s a shorthand for `if-else`:
      ```js
      let age = 18;
      let status = age >= 18 ? "Adult" : "Minor"; // "Adult"
      ```

---

### **Control Flow (Conditional & Looping Statements)**

18. **What are the different types of conditional statements in JavaScript?**  
    - `if`, `else if`, `else`, `switch`.

19. **How does an `if-else` statement work?**  
    - It executes a block of code **only if the condition is true**.

20. **When should you use a `switch` statement instead of `if-else`?**  
    - When you need to compare a single variable **against multiple values**.

21. **What is the syntax of a `for` loop?**  
    ```js
    for (let i = 0; i < 5; i++) {
      console.log(i);
    }
    ```

22. **How does a `while` loop work?**  
    - It runs **while a condition is true**:
      ```js
      let i = 0;
      while (i < 5) {
        console.log(i);
        i++;
      }
      ```

23. **What is the difference between a `while` loop and a `do-while` loop?**  
    - `do-while` **runs at least once** before checking the condition.

24. **What is a `forEach` loop, and how is it different from a `for` loop?**  
    - `forEach` is used for **arrays** and cannot use `break` or `continue`:
      ```js
      [1, 2, 3].forEach(num => console.log(num));
      ```

25. **What is the purpose of a `for...of` loop?**  
    - It iterates over **iterable objects** (arrays, strings):
      ```js
      for (let num of [1, 2, 3]) {
        console.log(num);
      }
      ```

26. **How does the `break` statement affect a loop?**  
    - It **stops** loop execution immediately.

27. **What does the `continue` statement do inside a loop?**  
    - It **skips** the current iteration and moves to the next one.

---

### **Functions in JavaScript**

28. **What is the difference between function declarations and function expressions?**  
    - **Function Declaration**:
      ```js
      function greet() {
        console.log("Hello");
      }
      ```
    - **Function Expression** (stored in a variable):
      ```js
      const greet = function() {
        console.log("Hello");
      };
      ```

29. **How do arrow functions differ from regular functions?**  
    - **Arrow functions** have a shorter syntax and do **not** bind their own `this`:
      ```js
      const add = (a, b) => a + b;
      ```

30. **What is a callback function? Give an example.**  
    - A function **passed as an argument** to another function:
      ```js
      function greet(name, callback) {
        console.log("Hello " + name);
        callback();
      }

      greet("Alice", () => console.log("Callback executed!"));
      ```

31. **What are higher-order functions? Provide an example.**  
    - Functions that **return** another function or take a function as an argument:
      ```js
      function multiplier(factor) {
        return (num) => num * factor;
      }
      let double = multiplier(2);
      console.log(double(5)); // 10
      ```

32. **What is the difference between `map()`, `filter()`, and `reduce()`?**  
    - `map()`: Transforms each element in an array and returns a **new array**.  
    - `filter()`: Returns a **new array** with elements that pass a condition.  
    - `reduce()`: Accumulates values into a **single value**.

    **Example:**
    ```js
    let numbers = [1, 2, 3, 4, 5];

    let squared = numbers.map(num => num ** 2); // [1, 4, 9, 16, 25]
    let evens = numbers.filter(num => num % 2 === 0); // [2, 4]
    let sum = numbers.reduce((acc, num) => acc + num, 0); // 15
    ```

33. **How do you pass default values to function parameters?**  
    - Use the **`=`** operator in the function parameter.
    ```js
    function greet(name = "Guest") {
      console.log("Hello, " + name);
    }
    greet(); // Hello, Guest
    greet("Alice"); // Hello, Alice
    ```

34. **What happens if you call a function before declaring it?**  
    - **Function declarations** are **hoisted**, so they work even if called first.  
    - **Function expressions and arrow functions** are **not hoisted**.
    ```js
    greet(); // Works
    function greet() {
      console.log("Hello");
    }

    console.log(sayHello); // Undefined
    let sayHello = function() { console.log("Hi"); };
    ```

35. **What is the significance of returning a value from a function?**  
    - It allows the function to pass data back to where it was called.
    ```js
    function add(a, b) {
      return a + b;
    }
    let sum = add(5, 3); // sum = 8
    ```

36. **How can a function return another function in JavaScript?**  
    ```js
    function multiplier(factor) {
      return function(num) {
        return num * factor;
      };
    }
    let double = multiplier(2);
    console.log(double(5)); // 10
    ```

37. **Can you call a function inside another function? If yes, how?**  
    - Yes, a function can be called inside another function.
    ```js
    function outer() {
      function inner() {
        console.log("Inner function");
      }
      inner();
    }
    outer();
    ```

---


### **Understanding `this` in JavaScript**  

38. **What is the value of `this` in the global scope?**  
    - In the **browser**, `this` refers to the `window` object.  
    - In **strict mode**, `this` is `undefined`.  
    ```js
    console.log(this); // window
    "use strict";
    console.log(this); // undefined
    ```

39. **How does `this` behave inside a regular function?**  
    - In a **normal function**, `this` depends on how the function is called.  
    - In strict mode, it defaults to `undefined`.  
    ```js
    function show() {
      console.log(this);
    }
    show(); // window (or undefined in strict mode)
    ```

40. **What happens to `this` inside an arrow function?**  
    - Arrow functions **do not have their own `this`**.  
    - They inherit `this` from their **surrounding lexical scope**.  
    ```js
    const obj = {
      value: 10,
      method: () => console.log(this.value),
    };
    obj.method(); // Undefined (because `this` refers to window)
    ```

41. **How does `this` work inside an object method?**  
    - Inside an object method, `this` refers to the object itself.  
    ```js
    const person = {
      name: "Alice",
      greet() {
        console.log(this.name);
      }
    };
    person.greet(); // Alice
    ```

42. **How can you explicitly change the value of `this` using `call()`?**  
    - Use `call()` to invoke a function with a specific `this` value.  
    ```js
    function greet() {
      console.log("Hello, " + this.name);
    }
    const user = { name: "Alice" };
    greet.call(user); // Hello, Alice
    ```

43. **What is the difference between `call()`, `apply()`, and `bind()`?**  
    - `call()`: Calls the function with arguments **separately**.  
    - `apply()`: Calls the function with arguments **as an array**.  
    - `bind()`: Returns a **new function** with `this` permanently set.  
    ```js
    function greet(msg) {
      console.log(msg + ", " + this.name);
    }
    let user = { name: "Alice" };
    
    greet.call(user, "Hello"); // Hello, Alice
    greet.apply(user, ["Hi"]); // Hi, Alice
    let boundGreet = greet.bind(user, "Hey");
    boundGreet(); // Hey, Alice
    ```

44. **How does `this` behave inside an event handler?**  
    - In event handlers, `this` refers to the element that fired the event.  
    ```js
    document.getElementById("btn").addEventListener("click", function() {
      console.log(this); // Refers to the button
    });
    ```

45. **What happens when you assign a method to a variable and call it?**  
    - `this` is lost, and it defaults to `window` (or `undefined` in strict mode).  
    ```js
    let obj = {
      name: "Alice",
      greet() {
        console.log(this.name);
      }
    };
    let fn = obj.greet;
    fn(); // Undefined
    ```

46. **How does `this` behave in a constructor function?**  
    - `this` refers to the newly created object instance.  
    ```js
    function Person(name) {
      this.name = name;
    }
    let user = new Person("Alice");
    console.log(user.name); // Alice
    ```

47. **What is lexical scoping and how does it affect `this`?**  
    - Lexical scoping determines the **scope of variables** based on where they are **defined**, not where they are **called**.  
    - Arrow functions inherit `this` from their **parent scope**.  
    ```js
    const obj = {
      value: 42,
      method: function() {
        const arrow = () => console.log(this.value);
        arrow();
      }
    };
    obj.method(); // 42
    ```

---

### **Introduction to the DOM (Document Object Model)**  

48. **What is the DOM in JavaScript?**  
    - The **DOM (Document Object Model)** is a **tree structure** that represents an HTML document.  
    - It allows JavaScript to dynamically modify content, structure, and styles.  

49. **What is the difference between the DOM and the BOM?**  
    - **DOM (Document Object Model)**: Represents and manipulates HTML elements.  
    - **BOM (Browser Object Model)**: Represents additional browser features (e.g., `window`, `navigator`).  

50. **How can you select an element using `getElementById()`?**  
    ```js
    let element = document.getElementById("myId");
    ```

51. **How is `querySelector()` different from `querySelectorAll()`?**  
    - `querySelector()` selects **the first matching** element.  
    - `querySelectorAll()` selects **all matching** elements.  

52. **What is the difference between `innerHTML` and `textContent`?**  
    - `innerHTML` sets **HTML content**, allowing interpretation of tags.  
    - `textContent` sets **only text**, ignoring any HTML tags.  

53. **How can you change the CSS style of an element using JavaScript?**  
    ```js
    document.getElementById("box").style.backgroundColor = "blue";
    ```

54. **How do you add an event listener to an element?**  
    ```js
    document.getElementById("btn").addEventListener("click", function() {
      alert("Button clicked!");
    });
    ```

55. **What is the difference between `click`, `keydown`, and `mouseover` events?**  
    - `click`: Fires when the user clicks an element.  
    - `keydown`: Fires when a key is pressed.  
    - `mouseover`: Fires when the mouse enters an element.  

56. **How can you remove an event listener in JavaScript?**  
    ```js
    function sayHello() {
      alert("Hello!");
    }
    let btn = document.getElementById("btn");
    btn.addEventListener("click", sayHello);
    btn.removeEventListener("click", sayHello);
    ```

57. **What happens when you attach multiple event listeners to the same element?**  
    - All listeners execute **in the order they were added**.  

---

### **Advanced DOM Manipulation**  

58. **How do you create an HTML element dynamically using JavaScript?**  
    ```js
    let div = document.createElement("div");
    div.textContent = "New Element";
    document.body.appendChild(div);
    ```

59. **What is the purpose of `appendChild()`?**  
    - Adds a new child element to a parent element.  

60. **How do you remove an element from the DOM using JavaScript?**  
    ```js
    let element = document.getElementById("demo");
    element.remove();
    ```

61. **What is event delegation, and why is it useful?**  
    - Event delegation allows handling events on **parent elements** instead of multiple child elements.  

62. **How does event bubbling work in the DOM?**  
    - The event starts from the **target element** and propagates **upwards** to the parent elements.  

63. **How can you stop event propagation?**  
    ```js
    event.stopPropagation();
    ```

64. **How can you clone a DOM element?**  
    ```js
    let clone = document.getElementById("box").cloneNode(true);
    ```

65. **What is the `insertBefore()` method used for?**  
    - Inserts an element **before** another element.  

66. **How can you replace an existing element in the DOM?**  
    ```js
    parent.replaceChild(newElement, oldElement);
    ```

67. **What happens when you use `innerHTML` to update an element?**  
    - It **removes and replaces** the existing content.  

68. **How do you toggle classes on an element using JavaScript?**  
    ```js
    element.classList.toggle("active");
    ```

69. **How do you detect if an element has a specific class?**  
    ```js
    element.classList.contains("active");
    ```

70. **How can you programmatically scroll to an element in JavaScript?**  
    ```js
    document.getElementById("section").scrollIntoView();
    ```  