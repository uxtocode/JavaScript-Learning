### 🔟 Functions in JavaScript

Functions are blocks of reusable code that execute a specific task. JavaScript functions can be defined in different ways and have various features.

---

## 1️⃣ **Function Declarations vs. Function Expressions**
### 🔹 **Function Declaration**
A function **declaration** defines a function with the `function` keyword and a name. It is **hoisted**, meaning it can be called before its declaration in the code.

```js
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Alice")); // Output: Hello, Alice!
```

✅ **Hoisted:** Can be called before the function is declared.

---

### 🔹 **Function Expression**
A function **expression** assigns a function to a variable. It is **not hoisted**, meaning you must define it before using it.

```js
const greet = function(name) {
    return `Hello, ${name}!`;
};

console.log(greet("Bob")); // Output: Hello, Bob!
```

❌ **Not hoisted:** Must be defined before calling.

---

## 2️⃣ **Arrow Functions (=>)**  
Arrow functions provide a shorter syntax for writing functions and automatically bind `this` from the surrounding scope.

### 🔹 **Regular Function**
```js
const add = function(a, b) {
    return a + b;
};
console.log(add(2, 3)); // Output: 5
```

### 🔹 **Arrow Function**
```js
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5
```

✅ **Implicit return:** If there's only one expression, you can omit `{}` and `return`.

### 🔹 **Arrow Function with One Parameter**
```js
const square = num => num * num;
console.log(square(4)); // Output: 16
```

---

## 3️⃣ **Callback Functions (Function Inside a Function)**
A **callback function** is passed as an argument to another function and executed later.

```js
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Alice", sayGoodbye);
/* Output:
   Hello, Alice!
   Goodbye!
*/
```

✅ **Used in asynchronous code** like `setTimeout`, event listeners, and API requests.

---

## 4️⃣ **Higher-Order Functions (map, filter, reduce)**  
Higher-order functions **take a function as an argument or return a function**.

### 🔹 **map()** – Transforms each array element
```js
const numbers = [1, 2, 3, 4];
const squared = numbers.map(num => num * num);
console.log(squared); // Output: [1, 4, 9, 16]
```

### 🔹 **filter()** – Filters elements based on a condition
```js
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]
```

### 🔹 **reduce()** – Reduces an array to a single value
```js
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 10
```

✅ **Common in functional programming**.

---

## 5️⃣ **Function Parameters & Default Values**
### 🔹 **Function Parameters**
Functions can accept parameters to work with different values.

```js
function multiply(a, b) {
    return a * b;
}

console.log(multiply(3, 4)); // Output: 12
```

### 🔹 **Default Parameter Values**
You can set default values for parameters in case they are not provided.

```js
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

console.log(greet());       // Output: Hello, Guest!
console.log(greet("Alice")); // Output: Hello, Alice!
```

✅ **Prevents errors when arguments are missing.**

---

### **Summary**
| Concept | Explanation |
|---------|-------------|
| **Function Declaration** | Named function, hoisted. |
| **Function Expression** | Assigned to a variable, not hoisted. |
| **Arrow Function** | Short syntax, `this` binding. |
| **Callback Function** | Function passed into another function. |
| **Higher-Order Function** | Function that takes/returns another function (`map`, `filter`, `reduce`). |
| **Default Parameters** | Predefined values if arguments are missing. |