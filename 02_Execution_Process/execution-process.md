# 📌 JavaScript Execution Process - Detailed Notes

## 1️⃣ JavaScript Execution: Interpreter vs Compiler

- JavaScript is both an Interpreted and Compiled Language.
- Traditionally, JavaScript was an interpreted language (executing code line by line).
- Modern JavaScript engines (e.g., V8 in Chrome) use JIT (Just-In-Time) Compilation for speed.
- JIT compiles frequently used code into machine code at runtime.

### 🔹 How JIT Compilation Works

1️⃣ JavaScript engine parses the code.
2️⃣ Optimizes frequently used code and compiles it into machine code instead of interpreting it every time.
3️⃣ This boosts performance significantly.

### ❌ Common Misconception

- JavaScript does not first convert code into bytecode before machine code.
- Instead, JIT directly compiles frequently executed code into machine code.

---

## 2️⃣ Execution Context (Global & Functional)

### 📌 What is Execution Context?

Execution Context is the environment in which JavaScript code runs, including:

- Variables
- Functions
- The `this` keyword

### 🔹 Two Phases in Execution Context

1️⃣ **Memory Creation Phase (Hoisting)**
   - Allocates memory for variables (`undefined`) and stores functions as definitions.

2️⃣ **Code Execution Phase**
   - Variables are assigned actual values, and functions execute.

### 🔹 Types of Execution Context

#### 1️⃣ Global Execution Context (GEC)

✅ Created when JavaScript starts executing.
✅ Contains:

- All global variables (undefined initially)
- Function definitions
- Value of `this` (depends on environment)
  - In a browser → `this === window`
  - In Node.js → `this === global`

#### 2️⃣ Functional Execution Context (FEC)

✅ Created every time a function is called.
✅ Each function has its own:

- Local variables
- Lexical environment (scope chain)
- Its own `this` value (depends on how the function is called)

### 🔹 Two Phases in Functional Execution Context

1️⃣ **Memory Creation Phase**
   - Variables → `undefined`
   - Functions → Stored as definitions

2️⃣ **Code Execution Phase**
   - Values assigned and code executed

### 🔹 Example Execution Context Flow

```js
let num1 = 10;
let num2 = 5;

function addSum(a, b) {
    let result = a + b;
    return result;
}

let result1 = addSum(num1, num2);
let result2 = addSum(8, 5);
```

#### 🔹 Step 1: Global Execution Context Created

**📌 Memory Creation Phase**

```
num1 = undefined
num2 = undefined
addSum = function definition
result1 = undefined
result2 = undefined
```

**📌 Code Execution Phase**

```
num1 = 10
num2 = 5
```

#### 🔹 Step 2: Function Execution Context for `addSum(num1, num2)`

**📌 Memory Creation Phase**

```
a = undefined
b = undefined
result = undefined
```

**📌 Code Execution Phase**

```
a = 10
b = 5
result = 15
```

✅ Function returns `15`, stored in `result1`.
✅ Function Execution Context removed from Call Stack.

#### 🔹 Step 3: Function Execution Context for `addSum(8, 5)`

**📌 Memory Creation Phase**

```
a = undefined
b = undefined
result = undefined
```

**📌 Code Execution Phase**

```
a = 8
b = 5
result = 13
```

✅ Function returns `13`, stored in `result2`.
✅ Function Execution Context removed from Call Stack.

---

## 3️⃣ Call Stack (Function Execution Order)

📌 **Call Stack follows the LIFO (Last In, First Out) principle.**

### ✅ How it Works

1️⃣ JavaScript adds functions to the Call Stack when called.
2️⃣ The function executes.
3️⃣ Once finished, it is removed from the Call Stack.

### 🔹 Example Call Stack Execution

```js
function one() {
    two();
    console.log("first");
}

function two() {
    three();
    console.log("Second");
}

function three() {
    console.log("third");
}

one();
```

### ✅ Call Stack Execution Order

```
third
Second
first
```

🔹 The last function added to the stack executes first.

---

## 4️⃣ Event Loop & Callback Queue

📌 **JavaScript is single-threaded but uses the Event Loop to handle async tasks.**

### ✅ Components in Async Execution

- **Call Stack** → Handles function execution
- **Web APIs** → Handles async tasks (e.g., `setTimeout`, `fetch`)
- **Callback Queue** → Stores callbacks from Web APIs
- **Microtask Queue** → Handles high-priority tasks (e.g., Promises)

### 🔹 Execution Order

1️⃣ Global Execution Context is created.
2️⃣ Functions execute in the Call Stack.
3️⃣ Async tasks (`setTimeout`, `fetch`) move to Web APIs.
4️⃣ Web APIs push completed tasks to the Callback Queue.
5️⃣ Microtasks (Promises) run before Callback Queue tasks.
6️⃣ Event Loop moves tasks from queue to Call Stack when empty.

### 🔹 Example Execution Order

```js
console.log("Start");

setTimeout(() => {
    console.log("setTimeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");
```

### ✅ Actual Output:

```
Start
End
Promise
setTimeout
```

### 🔹 Why?

- `console.log("Start")` runs first.
- `setTimeout()` is registered in Web APIs and moved to Callback Queue.
- `Promise.resolve()` moves to the Microtask Queue.
- `console.log("End")` executes.
- The Microtask Queue executes first (Promise runs before `setTimeout`).

---

## 🎯 Final Notes

✅ JavaScript is not purely interpreted, it uses JIT compilation.
✅ Execution Context consists of Memory & Code Execution Phases.
✅ Call Stack follows LIFO (Last In, First Out).
✅ Microtasks (Promises) execute before Callback Queue tasks.
✅ Event Loop ensures non-blocking execution.