# Understanding `this` in JavaScript

## **1️⃣ Global Context (`this` in Global Scope)**
- The **global scope** is the outermost execution context in JavaScript.
- The value of `this` in the **global scope** depends on two factors:
  1. **Strict mode (`"use strict"`)**
  2. **Execution environment (Browser vs. Node.js)**

### **In Browser (Global Scope):**
```js
console.log(this); // window {...}
```

### **In Browser with Strict Mode:**
```js
"use strict";
console.log(this); // undefined
```

### **In Node.js (Global Scope):**
```js
console.log(this); // global {...}
```

### **In Node.js with Strict Mode:**
```js
"use strict";
console.log(this); // undefined
```

---

## **2️⃣ Function Context (`this` in Regular vs. Arrow Functions)**

### **Regular Functions (`this` depends on strict mode and invocation)**

#### **(A) In Non-Strict Mode**
```js
function showThis() {
  console.log(this);
}

showThis(); // In browser: window {...}
            // In Node.js: global {...}
```

#### **(B) In Strict Mode**
```js
"use strict";

function showThis() {
  console.log(this);
}

showThis(); // undefined
```

### **Regular Function Inside an Object**
```js
const obj = {
  name: "Alice",
  greet: function () {
    console.log(this.name);
  },
};

obj.greet(); // "Alice" (this refers to obj)
```

### **Arrow Functions (No Own `this`, Inherits from Lexical Scope)**
```js
const obj = {
  name: "Alice",
  greet: () => {
    console.log(this.name);
  },
};

obj.greet(); // undefined (this is NOT obj, it inherits from global)
```

### **Arrow Function Inside Another Function**
```js
const obj = {
  name: "Alice",
  greet: function () {
    const arrow = () => {
      console.log(this.name); // this refers to obj (inherited from greet)
    };
    arrow();
  },
};

obj.greet(); // "Alice"
```

---

## **3️⃣ Explicit Binding (`call`, `apply`, `bind`)**

### **`call()` – Manually Set `this` and Pass Arguments One by One**
```js
function greet(age, city) {
  console.log(`Hello, my name is ${this.name}. I am ${age} years old and live in ${city}.`);
}

const person = { name: "Alice" };

greet.call(person, 25, "New York");
// Hello, my name is Alice. I am 25 years old and live in New York.
```

### **`apply()` – Same as `call()`, but Pass Arguments as an Array**
```js
greet.apply(person, [25, "New York"]);
// Hello, my name is Alice. I am 25 years old and live in New York.
```

### **`bind()` – Creates a New Function with `this` Permanently Set**
```js
const boundGreet = greet.bind(person, 30, "London");
boundGreet();  
// Hello, my name is Alice. I am 30 years old and live in London.
```

---

## **Summary Table**
| Method  | What it does  | How arguments are passed | When it executes |
|---------|-------------|-------------------|------------------|
| `call()`  | Sets `this` explicitly and invokes the function immediately | **Individually** (`arg1, arg2, ...`) | Immediately |
| `apply()` | Sets `this` explicitly and invokes the function immediately | **As an array** (`[arg1, arg2, ...]`) | Immediately |
| `bind()`  | Returns a **new function** with `this` permanently set | **Individually** (`arg1, arg2, ...`) | Later (when called) |

---

## **Final Takeaways**
1. **Global Scope:** `this` is `window` (browser) or `{}` (Node.js). Strict mode makes `this` undefined.
2. **Regular Functions:** `this` depends on how the function is called.
3. **Arrow Functions:** `this` is inherited from the surrounding scope.
4. **Explicit Binding:**
   - **`call()`** and **`apply()`** invoke the function immediately.
   - **`apply()`** takes arguments as an array.
   - **`bind()`** returns a new function with `this` permanently set.