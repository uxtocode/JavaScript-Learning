### ✅ **Asynchronous JavaScript**

---

**1. What is a callback function in JavaScript?**

A **callback** is a function passed as an argument to another function, to be executed **after** the parent function finishes. It's used for asynchronous tasks like API requests.

```js
function greet(name, callback) {
  console.log("Hi", name);
  callback();
}
greet("Alex", () => console.log("Callback called"));
```

---

**2. What is callback hell and how can you avoid it?**

**Callback hell** occurs when callbacks are nested within other callbacks, making code **difficult to read and maintain**. It can be avoided using **Promises** or `async/await`.

```js
// Callback hell:
getData(() => {
  process(() => {
    save(() => {
      console.log("Done");
    });
  });
});
```

---

**3. What is a Promise in JavaScript?**

A **Promise** represents the eventual **completion or failure** of an asynchronous operation. It has three states: `pending`, `fulfilled`, and `rejected`.

---

**4. How do `.then()`, `.catch()`, and `.finally()` work with Promises?**

- `.then()` is used for handling resolved values.  
- `.catch()` handles rejections (errors).  
- `.finally()` executes after success or failure.

```js
fetchData()
  .then(data => console.log(data))
  .catch(error => console.error(error))
  .finally(() => console.log("Done"));
```

---

**5. What is `async/await` in JavaScript?**

`async` functions return Promises. `await` pauses execution **until a Promise is resolved**, making asynchronous code look synchronous.

```js
async function fetchData() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

---

**6. Can you use `await` outside an `async` function?**

No. `await` can only be used **inside an async function**, or at the **top level in modern environments with ES modules**.

---

**7. What’s the difference between `Promise.then()` and `await`?**

- `.then()` chains callbacks and is more traditional.  
- `await` is more readable and makes code appear synchronous.

---

### ✅ **Object-Oriented Programming (OOP) in JavaScript**

---

**8. What is a prototype in JavaScript?**

Every JavaScript object has a hidden `[[Prototype]]` (can be accessed via `__proto__`). It’s a reference to another object from which it inherits properties.

---

**9. What is prototypal inheritance?**

It’s the ability of one object to **inherit** properties/methods from another via the **prototype chain**.

```js
const parent = {
  greet() {
    console.log("Hello");
  }
};
const child = Object.create(parent);
child.greet(); // Hello
```

---

**10. How does the prototype chain work?**

When accessing a property, JavaScript looks up the object. If not found, it traverses the prototype chain until `null`.

---

**11. What is the difference between `__proto__` and `prototype`?**

- `__proto__` is a reference used by instances to access their prototype.  
- `prototype` is a property of constructor functions used when creating new instances.

---

**12. What is the role of a constructor function in JavaScript?**

A **constructor function** is used with the `new` keyword to create objects and set up inheritance.

```js
function Person(name) {
  this.name = name;
}
const p = new Person("Alex");
```

---

**13. How are ES6 classes different from constructor functions?**

ES6 classes are **syntactic sugar** over prototype-based inheritance. They are clearer and support inheritance via `extends` and `super`.

---

**14. What is the purpose of the `super` keyword in classes?**

`super()` is used to **call the constructor of a parent class**.

```js
class Parent {
  constructor(name) {
    this.name = name;
  }
}
class Child extends Parent {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}
```

---

**15. What is the difference between `class` and `object` in JavaScript?**

- A **class** is a blueprint for creating objects.
- An **object** is an instance of a class (or constructor function).

---

### ✅ **JavaScript Modules & Web APIs**

---

**16. What is the Fetch API used for?**

The **Fetch API** is used to make network requests and returns Promises. It replaces the older `XMLHttpRequest`.

---

**17. How do you parse JSON data using Fetch?**

Use `.json()` on the response object to convert it into a JavaScript object:

```js
fetch(url)
  .then(res => res.json())
  .then(data => console.log(data));
```

---

**18. What’s the difference between `localStorage` and `sessionStorage`?**

| Feature       | localStorage       | sessionStorage     |
|---------------|--------------------|--------------------|
| Lifetime      | Permanent (until cleared) | Ends with session |
| Shared Tabs   | Yes                | No                |

---

**19. How do you import and export modules in JavaScript?**

```js
// math.js
export function add(a, b) {
  return a + b;
}

// main.js
import { add } from "./math.js";
```

---

**20. Can you export multiple values from a module?**

Yes. You can use **named exports** or **default + named**.

```js
export const name = "JS";
export function greet() {}

// or default:
export default function () { ... }
```

---

### ✅ **Asynchronous JavaScript**

---

**21. What are the problems with using only callbacks for async code?**  
- Difficult to **debug**, **hard to manage errors**, and leads to **callback hell**.
- No structured way to handle **multiple asynchronous operations**.

---

**22. What is the event loop in JavaScript?**  
The **event loop** continuously checks the **call stack** and **task queue**, and if the stack is empty, it pushes the first task from the queue into the stack to execute.

---

**23. How does the call stack handle asynchronous functions?**  
Asynchronous operations like `setTimeout` or `fetch` are **moved to Web APIs**, and their callbacks are placed in the **task queue**, not the call stack, until ready.

---

**24. What is the difference between microtask and macrotask queues?**  
- **Microtasks** (e.g., Promises) run **before** the next render.
- **Macrotasks** (e.g., `setTimeout`) run **after** microtasks complete.

---

**25. How can you create a custom Promise?**  
```js
const customPromise = new Promise((resolve, reject) => {
  const success = true;
  success ? resolve("Done") : reject("Error");
});
```

---

**26. What happens if you forget to handle errors in Promises?**  
It may lead to **unhandledPromiseRejection**, which can crash apps or create memory leaks.

---

**27. Can `async` functions return non-promises?**  
Yes. If they return a non-promise value, it is **wrapped in a resolved Promise** automatically.

---

**28. How can you run multiple Promises in parallel?**  
Use `Promise.all()`:

```js
Promise.all([fetch(url1), fetch(url2)])
  .then(([res1, res2]) => console.log(res1, res2));
```

---

**29. What is `Promise.race()` used for?**  
It returns the **first settled (resolved or rejected)** Promise out of a list.

---

**30. Can `await` be used inside loops? Is it recommended?**  
Yes, but it **runs serially**. For parallel execution, use `Promise.all()` instead.

---

### ✅ **Object-Oriented Programming (OOP) in JavaScript**

---

**31. What’s the difference between instance and prototype properties?**  
- **Instance properties** are created inside the constructor.  
- **Prototype properties** are shared among all instances.

```js
function Person(name) {
  this.name = name; // instance
}
Person.prototype.greet = function () {}; // prototype
```

---

**32. How can you add methods to a class after it’s declared?**  
Use the prototype:

```js
MyClass.prototype.newMethod = function () {};
```

---

**33. What is method overriding in JavaScript classes?**  
A **child class** can **override** a method from the parent class by redefining it.

---

**34. What is method chaining in OOP?**  
Returning `this` from methods allows **chaining calls**:

```js
class Chain {
  step1() { console.log(1); return this; }
  step2() { console.log(2); return this; }
}
new Chain().step1().step2();
```

---

**35. How do getters and setters work in classes?**  
They allow you to control access to object properties:

```js
class User {
  get name() { return this._name; }
  set name(value) { this._name = value.toUpperCase(); }
}
```

---

**36. What are static methods in JavaScript classes?**  
They are called on the **class itself**, not on instances.

```js
class Utils {
  static greet() {
    return "Hi";
  }
}
```

---

**37. How can you check if one object is a prototype of another?**  
Use `isPrototypeOf()`:

```js
Parent.prototype.isPrototypeOf(child); // true or false
```

---

**38. What is mixin in JavaScript OOP?**  
Mixin is a pattern where **methods from one object** are copied to another, providing **multiple inheritance-like behavior**.

```js
Object.assign(target.prototype, source);
```

---

### ✅ **JavaScript Modules & Web APIs**

---

**39. What is the difference between CommonJS and ES Modules?**  
- **CommonJS**: Used in Node.js (`require`, `module.exports`)  
- **ES Modules**: Modern JavaScript (`import`, `export`) and **static structure**.

---

**40. What are the limitations of using localStorage?**  
- Only stores **strings**.  
- Size limit (~5MB).  
- Not secure — visible to client-side scripts.  
- **No expiration**, unlike cookies.

---

### ✅ **Asynchronous JavaScript**

---

**41. What is callback hell and how can it be avoided?**  
Callback hell is deeply nested callbacks that make code **hard to read and maintain**. It can be avoided using:
- **Modular functions**
- **Named functions**
- **Promises** or `async/await`

---

**42. What is the default behavior of `fetch()` in handling errors?**  
`fetch()` only rejects on **network errors**. HTTP errors (like 404, 500) are considered **successful responses**, and you must manually check `response.ok`.

```js
if (!response.ok) throw new Error("HTTP Error!");
```

---

**43. What’s the difference between `await Promise` and `Promise.then()`?**  
- `await` pauses execution in an `async` function.
- `.then()` attaches a callback, does not pause execution.
- `await` makes code more **synchronous-like** and readable.

---

**44. What happens if you `await` a non-Promise value?**  
It’s automatically **converted into a resolved Promise**.  
```js
async function test() {
  const x = await 10; // becomes Promise.resolve(10)
}
```

---

### ✅ **Object-Oriented Programming (OOP)**

---

**45. How does inheritance work in JavaScript ES6 classes?**  
Using `extends`, a child class inherits from a parent:

```js
class Animal {}
class Dog extends Animal {}
```

Methods from the parent class are **available in the child**, and `super()` is used to call the parent constructor.

---

**46. What is the purpose of the `super()` keyword in constructors?**  
`super()` is used to **call the parent class constructor** before accessing `this` in the subclass.

```js
class Parent { constructor(name) { this.name = name; } }
class Child extends Parent {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}
```

---

**47. What happens if you forget to call `super()` in a subclass constructor?**  
You’ll get a **ReferenceError**: Must call `super()` before accessing `this` in a derived class constructor.

---

**48. Can a class extend more than one class in JavaScript?**  
No, **multiple inheritance** is not supported.  
Workaround: Use **mixins** to copy behaviors from multiple sources.

---

### ✅ **JavaScript Modules & Web APIs**

---

**49. What is tree shaking in the context of JavaScript modules?**  
Tree shaking is a **build optimization** (like in Webpack) that **removes unused exports** from ES modules to reduce final bundle size.

---

**50. How do you export multiple values from a module?**  
Use named exports:

```js
export const a = 1;
export function greet() {}
```

And import:

```js
import { a, greet } from './module.js';
```