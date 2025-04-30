# ✅ **JavaScript Modules & Web APIs**

Modern JavaScript provides access to powerful **browser Web APIs** and supports a modular coding structure with **ES Modules** for clean, reusable code.

---

## 🌐 **1️⃣ Fetch API & JSON**

### **What is Fetch API?**
- The **Fetch API** allows you to make **HTTP requests** (like GET, POST) to servers.
- It returns a **Promise** that resolves to the **response object**.

---

### ✅ **Example: Fetching JSON Data**
```js
fetch("https://api.example.com/data")
    .then(response => response.json()) // Convert response to JSON
    .then(data => {
        console.log(data); // Use the fetched data
    })
    .catch(error => {
        console.error("Fetch error:", error);
    });
```

---

### 📝 **POST Request Example**
```js
fetch("https://api.example.com/submit", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ name: "Alex", age: 25 })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error(error));
```

---

## 💾 **2️⃣ LocalStorage & SessionStorage**

Both APIs store **key-value pairs** in the browser, but:

| Feature            | localStorage       | sessionStorage     |
|--------------------|--------------------|--------------------|
| Lifespan           | Until manually cleared | Until browser/tab closed |
| Shared across tabs | ✅ Yes             | ❌ No               |
| Capacity           | ~5MB               | ~5MB               |

---

### ✅ **Common Methods**
| Method                      | Description                        |
|-----------------------------|------------------------------------|
| `setItem(key, value)`       | Save a value                      |
| `getItem(key)`              | Get a value                       |
| `removeItem(key)`           | Remove a specific key             |
| `clear()`                   | Remove all keys                   |

---

### 🧪 **Example: Using localStorage**
```js
localStorage.setItem("username", "alex");
console.log(localStorage.getItem("username")); // alex
localStorage.removeItem("username");
```

### 🧪 **Example: Using sessionStorage**
```js
sessionStorage.setItem("sessionToken", "abc123");
console.log(sessionStorage.getItem("sessionToken")); // abc123
sessionStorage.clear();
```

---

## 📦 **3️⃣ JavaScript Modules (import, export)**

JavaScript **modules** let you split your code across multiple files and **reuse functionality** using `import` and `export`.

---

### ✅ **Basic Export**
**math.js**
```js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

---

### ✅ **Importing Functions**
**main.js**
```js
import { add, subtract } from './math.js';

console.log(add(5, 3)); // 8
console.log(subtract(5, 3)); // 2
```

---

### ✅ **Default Export**
**greet.js**
```js
export default function greet(name) {
    console.log(`Hello, ${name}!`);
}
```

**main.js**
```js
import greet from './greet.js';
greet("Alex"); // Hello, Alex!
```

---

### ⚙️ **Using Modules in Browser**
Use `type="module"` in your HTML:
```html
<script type="module" src="main.js"></script>
```

> Note: Modules are **deferred by default** and **run in strict mode**.

---

## 🚀 **Final Takeaways**

- Use the **Fetch API** to make network requests and handle data using Promises.
- Store small key-value data with **localStorage** (persistent) and **sessionStorage** (temporary).
- Organize your code with **modules** using `export` and `import` to improve maintainability.