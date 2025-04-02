# 📌 **Introduction to the DOM (Document Object Model)**

## **1️⃣ What is the DOM?**
### **Definition**
The **DOM (Document Object Model)** is a programming interface for web documents. It represents the structure of a webpage as a **tree-like hierarchy of objects**, allowing JavaScript to **interact with, modify, and manipulate HTML and CSS dynamically**.

### **How Does It Work?**
1. When a webpage is loaded, the browser **parses the HTML** and constructs a **DOM tree**.
2. This tree structure represents every element (tags, attributes, text) as **nodes**.
3. JavaScript can access this tree to **select, modify, add, or delete** elements.

### **Visual Representation of the DOM Tree**
Consider this simple HTML structure:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Page</title>
</head>
<body>
    <h1 id="main-heading">Hello, World!</h1>
    <p class="text">This is a paragraph.</p>
    <button>Click Me</button>
</body>
</html>
```

The browser converts this into the following **DOM tree**:

```
Document
 ├── <html>
 │   ├── <head>
 │   │   ├── <title>My Page</title>
 │   ├── <body>
 │   │   ├── <h1 id="main-heading">Hello, World!</h1>
 │   │   ├── <p class="text">This is a paragraph.</p>
 │   │   ├── <button>Click Me</button>
```

Now that the DOM structure is set up, **JavaScript can manipulate it dynamically**.

---

## **2️⃣ Selecting Elements from the DOM**
To work with the DOM, we first need to **select elements** using JavaScript. Here are the primary ways:

### **1️⃣ `getElementById()` – Select by ID**
- Selects a single element using its **`id`** attribute.
- **Returns:** A **single element** (or `null` if not found).

```js
const heading = document.getElementById("main-heading");
console.log(heading); // <h1 id="main-heading">Hello, World!</h1>
```

---

### **2️⃣ `querySelector()` – Select by CSS Selector (First Match)**
- Selects the **first matching element** based on a **CSS selector**.
- **Returns:** A **single element** (or `null` if not found).

```js
const paragraph = document.querySelector(".text"); // Selects the first <p> with class "text"
console.log(paragraph); // <p class="text">This is a paragraph.</p>
```

---

### **3️⃣ `querySelectorAll()` – Select All Matching Elements**
- Selects **all elements** that match the given CSS selector.
- **Returns:** A **NodeList** (like an array but not exactly an array).

```js
const paragraphs = document.querySelectorAll(".text");
console.log(paragraphs); // NodeList of all matching <p> elements
```

---

## **3️⃣ Modifying Elements (Changing Content & Styles)**

### **1️⃣ Changing Content (`innerHTML`, `textContent`)**

#### **A) `innerHTML` - Change HTML Inside an Element**
- Can insert **HTML tags** inside an element.
- **Security Risk:** Can expose the website to **XSS attacks** if inserting user input.

```js
const heading = document.getElementById("main-heading");
heading.innerHTML = "Welcome to JavaScript!"; // Changes the text
```

#### **B) `textContent` - Change Only Text (Safer)**
- Only inserts **text**, ignoring HTML tags.

```js
heading.textContent = "<b>Welcome!</b>"; // Displays as raw text: "<b>Welcome!</b>"
```

---

### **2️⃣ Changing Styles (`style` Property)**
You can change an element’s CSS styles using JavaScript.

```js
const heading = document.getElementById("main-heading");
heading.style.color = "blue"; // Changes text color to blue
heading.style.fontSize = "24px"; // Changes font size
heading.style.backgroundColor = "yellow"; // Sets background color
```

---

## **4️⃣ Event Listeners (Handling User Interactions)**
JavaScript allows us to handle user interactions using **event listeners**.

### **1️⃣ What is an Event?**
An **event** is any action performed by the user, such as:
- **Clicking** a button (`click`)
- **Pressing a key** (`keydown`)
- **Hovering** over an element (`mouseover`)
- **Submitting a form** (`submit`)

---

### **2️⃣ `addEventListener()` - Attach an Event Listener**
- The `addEventListener()` method lets you listen for an event and run a function when it occurs.

#### **Example: Click Event**
```js
const button = document.querySelector("button");

button.addEventListener("click", function () {
    alert("Button was clicked!");
});
```

---

### **3️⃣ Keydown Event (Detecting Key Presses)**
```js
document.addEventListener("keydown", function (event) {
    console.log(`Key pressed: ${event.key}`);
});
```

---

### **4️⃣ Mouseover Event (Detecting Hover)**
```js
const heading = document.getElementById("main-heading");

heading.addEventListener("mouseover", function () {
    heading.style.color = "red"; // Change text color on hover
});
```

---

## **🎯 Summary Table of DOM Concepts**
| Concept | Description | Example |
|---------|-------------|---------|
| **`getElementById(id)`** | Selects an element by `id` | `document.getElementById("main")` |
| **`querySelector(selector)`** | Selects **first** matching element | `document.querySelector(".text")` |
| **`querySelectorAll(selector)`** | Selects **all** matching elements | `document.querySelectorAll("p")` |
| **`innerHTML`** | Changes **HTML content** inside an element | `element.innerHTML = "<b>Bold Text</b>"` |
| **`textContent`** | Changes **text content only** | `element.textContent = "Hello"` |
| **`style`** | Modifies an element’s styles | `element.style.color = "red"` |
| **`addEventListener(event, callback)`** | Adds an event listener to an element | `element.addEventListener("click", function)` |

---

## **🚀 Final Takeaways**
- The **DOM** is a **tree representation** of the webpage, allowing JavaScript to manipulate it dynamically.
- **Selecting elements** is done using `getElementById`, `querySelector`, and `querySelectorAll`.
- **Modifying content** is done using `innerHTML`, `textContent`, and `style`.
- **Event listeners** help make webpages interactive (`click`, `keydown`, `mouseover`, etc.).
- **Use `addEventListener()`** to attach events without overwriting existing ones.