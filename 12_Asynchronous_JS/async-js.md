# ✅ **Asynchronous JavaScript**

JavaScript is **single-threaded**, meaning it executes one line of code at a time. To handle **time-consuming operations** like fetching data, we use **asynchronous techniques** such as **callbacks**, **promises**, and **async/await**.

---

## 🔁 **1️⃣ Callbacks & Callback Hell**

### **What is a Callback?**
A **callback** is a function passed as an argument to another function to be **executed later** (often after an async operation like `setTimeout()` or an API call).

#### **Example: Basic Callback**
```js
function greet(name, callback) {
    console.log("Hi " + name);
    callback();
}

function sayBye() {
    console.log("Bye!");
}

greet("Alex", sayBye);
```

---

### **Callback Hell**
When callbacks are nested within callbacks multiple times, it becomes **hard to read and maintain** – this is called **Callback Hell**.

#### **Example: Callback Hell**
```js
setTimeout(() => {
    console.log("Step 1");
    setTimeout(() => {
        console.log("Step 2");
        setTimeout(() => {
            console.log("Step 3");
        }, 1000);
    }, 1000);
}, 1000);
```

⚠️ **Problem**: Hard to **read**, **debug**, and **scale**.

---

## 🌐 **2️⃣ Promises**

### **What is a Promise?**
A **Promise** represents a value that may be **available now**, **later**, or **never**.

### **States of a Promise:**
| State     | Description                  |
|-----------|------------------------------|
| Pending   | Initial state, not resolved  |
| Fulfilled | Operation completed          |
| Rejected  | Operation failed             |

---

### **Creating a Promise**
```js
const myPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Operation successful!");
    } else {
        reject("Something went wrong.");
    }
});
```

---

### **Using `.then()`, `.catch()`, `.finally()`**
```js
myPromise
    .then((result) => {
        console.log(result); // If resolved
    })
    .catch((error) => {
        console.error(error); // If rejected
    })
    .finally(() => {
        console.log("Always runs"); // Regardless of outcome
    });
```

---

### **Example: Simulating Async Task**
```js
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched!");
        }, 2000);
    });
}

fetchData()
    .then(data => console.log(data))
    .catch(err => console.error(err))
    .finally(() => console.log("Done fetching"));
```

---

## ⚙️ **3️⃣ async & await**

### **What is async/await?**
- `async` makes a function always return a **Promise**.
- `await` waits for the **Promise to resolve** (can only be used inside `async` functions).

🧠 It makes **asynchronous code look synchronous**, improving readability.

---

### **Example: Using async/await**
```js
function getData() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Async data received!"), 2000);
    });
}

async function showData() {
    console.log("Fetching...");
    const result = await getData();
    console.log(result); // Output after 2 seconds
}

showData();
```

---

### **Handling Errors with try/catch**
```js
async function fetchUser() {
    try {
        let response = await fetch("https://api.example.com/user");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    } finally {
        console.log("Operation finished.");
    }
}
```

---

## 🚀 **Final Takeaways**

- **Callbacks** are functions passed to other functions to run later.
- **Callback Hell** occurs when many nested callbacks reduce readability.
- **Promises** simplify async flows and handle success/failure with `.then()`/`.catch()`.
- **async/await** provides a cleaner, more readable way to write async code.
- Always handle errors using **try/catch** in async/await to avoid unexpected crashes.
