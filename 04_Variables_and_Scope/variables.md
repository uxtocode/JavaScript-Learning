# JavaScript Variables, Scope, and Hoisting

## Definition of Variables in JavaScript
A variable in JavaScript is a named storage location that holds data. It allows us to store, retrieve, and manipulate values during program execution.

JavaScript provides three ways to declare variables:
- `var` (old, function-scoped, avoid using)
- `let` (modern, block-scoped, can be reassigned)
- `const` (modern, block-scoped, cannot be reassigned)

### Example: Declaring Variables
```js
let name = "John";  // String
const age = 25;  // Number
var isStudent = false;  // Boolean
```

### Rules for Declaring Variable Names (Identifiers)
1. Must start with a letter (a-z, A-Z), underscore (_), or dollar sign ($)
2. Can contain letters, digits (0-9), underscore (_), and dollar sign ($)
3. Cannot be a reserved keyword (like let, const, var, if, else, function, etc.)
4. Case-sensitive (`myVar` and `myvar` are different)
5. Use meaningful names for better readability
6. Use camelCase for multi-word variable names (Recommended in JavaScript)

---

## Variable Declaration: `var`, `let`, `const`

### `var` (Function-Scoped & Hoisted)
- Can be redeclared and reassigned.
- Function-scoped (not block-scoped).
- Hoisted but initialized as `undefined`.

```js
console.log(a); // undefined (hoisted)
var a = 10;
console.log(a); // 10

if (true) {
    var x = 5;
}
console.log(x); // ✅ Accessible outside (unexpected behavior)
```

### `let` (Block-Scoped & No Hoisting Initialization)
- Cannot be redeclared, but can be reassigned.
- Block-scoped (exists only inside `{}`).
- Hoisted but not initialized (TDZ - Temporal Dead Zone).

```js
console.log(b); // ❌ ReferenceError (b is in TDZ)
let b = 20;
console.log(b); // ✅ 20

if (true) {
    let y = 10;
}
console.log(y); // ❌ ReferenceError (not accessible outside block)
```

### `const` (Block-Scoped & Immutable)
- Cannot be redeclared or reassigned.
- Block-scoped (same as `let`).
- Must be initialized at the time of declaration.

```js
const PI = 3.14;
PI = 3.1415; // ❌ TypeError (cannot reassign)

if (true) {
    const z = 100;
}
console.log(z); // ❌ ReferenceError
```

---

## Scope in JavaScript
Scope defines where a variable is accessible.

### 1. Global Scope
- Variables declared outside any function are global.
- Accessible anywhere in the script.

```js
const globalVar = "I am global";

function showGlobal() {
    console.log(globalVar); // ✅ Accessible inside function
}

showGlobal();
console.log(globalVar); // ✅ Accessible anywhere
```

### 2. Function Scope
- `var` is function-scoped (only accessible inside functions).
- `let` and `const` are block-scoped, even inside functions.

```js
function myFunction() {
    var functionVar = "Inside function";
    console.log(functionVar); // ✅ Accessible here
}

myFunction();
console.log(functionVar); // ❌ ReferenceError (not accessible outside)
```

### 3. Block Scope (ES6)
- Only `let` and `const` are block-scoped.
- `{}` blocks create a new scope for `let` and `const`.

```js
if (true) {
    let blockScoped = "Inside if block";
    console.log(blockScoped); // ✅ Accessible inside block
}
console.log(blockScoped); // ❌ ReferenceError (outside block)
```

But `var` is NOT block-scoped:

```js
if (true) {
    var notBlockScoped = "I escape blocks!";
}
console.log(notBlockScoped); // ✅ Accessible (bad practice)
```

---

## Hoisting in JavaScript
Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope before execution.

### 1. Hoisting with `var`
- Only the declaration is hoisted, but initialization happens later.

```js
console.log(a); // ❓ undefined (hoisted)
var a = 10;
console.log(a); // ✅ 10
```

Internally, JavaScript processes this as:

```js
var a; // Hoisted
console.log(a); // undefined
a = 10; // Assigned later
```

### 2. Hoisting with `let` and `const`
- Hoisted but NOT initialized (exist in Temporal Dead Zone (TDZ)).
- Accessing them before declaration causes a `ReferenceError`.

```js
console.log(b); // ❌ ReferenceError (TDZ)
let b = 5;
console.log(b); // ✅ 5
```

### 3. Hoisting with Functions
- Function declarations are fully hoisted, meaning they can be called before their definition.

```js
greet(); // ✅ "Hello!"

function greet() {
    console.log("Hello!");
}
```

- Function expressions (assigned to `var`, `let`, or `const`) are NOT hoisted.

```js
sayHi(); // ❌ TypeError: sayHi is not a function

var sayHi = function () {
    console.log("Hi!");
};
```

---

## Key Takeaways
- `var` is function-scoped, while `let` and `const` are block-scoped.
- `var` is hoisted and initialized as `undefined`, while `let` and `const` are hoisted but stay in the TDZ.
- Function declarations are hoisted, but function expressions are NOT.
- Avoid `var` and use `let` or `const` to prevent scope-related bugs.
