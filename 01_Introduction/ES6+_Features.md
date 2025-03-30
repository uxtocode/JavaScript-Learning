# JavaScript ES6 Features

## 1️⃣ let and const vs var

- `let` and `const` were introduced in ES6 to replace `var`.
- `let` allows reassignment, while `const` is for values that don’t change.
- `var` is function-scoped, whereas `let` and `const` are block-scoped.

```js
if (true) {
    let x = 10;  // Block-scoped
    const y = 20; // Block-scoped, cannot be reassigned
    var z = 30;  // Function-scoped
}
console.log(z); // ✅ 30
console.log(x); // ❌ ReferenceError
console.log(y); // ❌ ReferenceError
```

---

## 2️⃣ Template Literals

- Use backticks (`` ` ``) instead of quotes for strings.
- Supports multi-line strings and embedded expressions (`${}`).

```js
const name = "John";
const message = `Hello, ${name}!`;
console.log(message); // "Hello, John!"
```

---

## 3️⃣ Arrow Functions

- Shorter syntax for functions.
- Automatically binds `this` (useful in objects and classes).

```js
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5
```

✅ Implicit return (if there's only one expression):

```js
const greet = name => `Hello, ${name}!`;
console.log(greet("Alice")); // "Hello, Alice!"
```

---

## 4️⃣ Destructuring & Spread/Rest Operators

✅ **Destructuring (Extract values from arrays/objects)**

```js
const person = { name: "John", age: 25 };
const { name, age } = person;
console.log(name, age); // John 25
```

✅ **Spread (`...`) (Expands elements)**

```js
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];  
console.log(arr2); // [1, 2, 3, 4, 5]
```

✅ **Rest (`...`) (Collects remaining values)**

```js
const sum = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);
console.log(sum(1, 2, 3, 4)); // 10
```

---

## 5️⃣ Default Parameters

- Set default values for function parameters.

```js
const greet = (name = "Guest") => `Hello, ${name}!`;
console.log(greet()); // "Hello, Guest!"
console.log(greet("Alice")); // "Hello, Alice!"
```

---

## 6️⃣ for...of Loop

- Iterates over iterable objects (arrays, strings, sets, etc.).

```js
const numbers = [1, 2, 3, 4];
for (const num of numbers) {
    console.log(num); // 1, 2, 3, 4
}
```

---

## 7️⃣ Modules (`import` & `export`)

- Helps split code into multiple files for better organization.

✅ **Export from a file (`math.js`)**

```js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

✅ **Import in another file (`app.js`)**

```js
import { add, subtract } from './math.js';
console.log(add(5, 3)); // 8
