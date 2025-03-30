### **What are Functions in JavaScript?**
A **function** in JavaScript is a reusable block of code designed to perform a specific task. Functions help in organizing and reusing code, making programs more efficient and maintainable.

---

## **Declaring Functions in JavaScript**
Functions in JavaScript can be declared using different methods:

### 1️⃣ **Function Declaration (Named Function)**
```javascript
function greet() {
    console.log("Hello, World!");
}
greet();  // Output: Hello, World!
```
- Uses the `function` keyword.
- Has a name (`greet` in this case).
- Can be called before its declaration due to **hoisting**.

---

### 2️⃣ **Function Expression (Anonymous Function)**
```javascript
const greet = function() {
    console.log("Hello, World!");
};
greet();
```
- Stored in a variable.
- Does not have a function name (anonymous function).
- Not hoisted like function declarations.

---

### 3️⃣ **Arrow Function (ES6)**
```javascript
const greet = () => {
    console.log("Hello, World!");
};
greet();
```
- Shorter syntax than function expressions.
- Does **not** have its own `this` context.

#### **Single-line Arrow Function (Implicit Return)**
```javascript
const add = (a, b) => a + b;
console.log(add(3, 4));  // Output: 7
```
- No need for `{}` when there's only one statement.
- No need for `return` when there's only one expression.

---

### 4️⃣ **Immediately Invoked Function Expression (IIFE)**
```javascript
(function() {
    console.log("This runs immediately!");
})();
```
- Runs immediately after definition.
- Used to avoid polluting the global scope.

---

### 5️⃣ **Function with Parameters and Return Value**
```javascript
function add(a, b) {
    return a + b;
}
console.log(add(5, 3));  // Output: 8
```
- Accepts **parameters** (`a`, `b`).
- Returns a **value** using `return`.

---

## **Types of Functions in JavaScript**
1. **Pure Functions** – Always return the same output for the same input and do not modify external variables.
   ```javascript
   function square(x) {
       return x * x;
   }
   ```

2. **Higher-Order Functions** – Functions that take other functions as arguments or return functions.

    A **higher-order function** is a function that either:  
    1️⃣ **Takes one or more functions as arguments**  
    2️⃣ **Returns a function**  

```javascript
function operate(a, b, operation) {
    return operation(a, b); // Calls the function passed as argument
}

// Define basic math operations
function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

// Using the higher-order function
console.log(operate(5, 3, add));       // Output: 8
console.log(operate(5, 3, multiply));  // Output: 15
```

### **How It Works?**
- `operate` is a higher-order function because it **accepts a function (`operation`) as an argument**.
- We pass `add` and `multiply` functions to `operate`, and it executes them dynamically.


3. **Recursive Functions** – A function that calls itself.
   ```javascript
   function factorial(n) {
       if (n === 0) return 1;
       return n * factorial(n - 1);
   }
   console.log(factorial(5));  // Output: 120
   ```

4. **Generator Functions** – Functions that can be paused and resumed (`function*` keyword).
   ```javascript
   function* count() {
       yield 1;
       yield 2;
       yield 3;
   }
   const counter = count();
   console.log(counter.next().value);  // Output: 1
   ```

---

## **Common Methods Used with Functions in JavaScript**

### 1️⃣ `call()`
Calls a function with a specified `this` value and arguments.
```javascript
function greet() {
    console.log(`Hello, ${this.name}`);
}
const user = { name: "Alice" };
greet.call(user);  // Output: Hello, Alice
```

### 2️⃣ `apply()`
Similar to `call()`, but accepts arguments as an array.
```javascript
function sum(a, b) {
    console.log(a + b);
}
sum.apply(null, [3, 4]);  // Output: 7
```

### 3️⃣ `bind()`
Creates a new function with a specified `this` value.
```javascript
const user = { name: "Bob" };
function greet() {
    console.log(`Hello, ${this.name}`);
}
const boundGreet = greet.bind(user);
boundGreet();  // Output: Hello, Bob
```

### 4️⃣ `toString()`
Returns the function's code as a string.
```javascript
function sayHello() {
    return "Hello!";
}
console.log(sayHello.toString());
```

### 5️⃣ `length`
Returns the number of parameters a function expects.
```javascript
function multiply(a, b) {}
console.log(multiply.length);  // Output: 2
```

---

## **Conclusion**
- Functions are **essential** in JavaScript for structuring code.
- JavaScript supports **different types of functions**: declarations, expressions, arrow functions, IIFE, and more.
- **Common methods** like `call()`, `apply()`, and `bind()` help with function execution and context management.