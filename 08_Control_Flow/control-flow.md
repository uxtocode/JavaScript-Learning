### 🔹 **Control Flow in JavaScript**  
Control flow determines how the program executes based on conditions or loops.

---

## **1️⃣ Conditional Statements**
Conditional statements allow the code to make decisions based on given conditions.

### ✅ **if, else if, else**
These statements execute different blocks of code depending on whether a condition is `true` or `false`.

```javascript
let age = 20;

if (age < 18) {
    console.log("You are a minor.");
} else if (age < 65) {
    console.log("You are an adult.");
} else {
    console.log("You are a senior.");
}
```
📌 **How it works:**  
- If `age < 18`, the first block runs.  
- If `age < 65`, the second block runs.  
- Otherwise, the `else` block runs.

---

### ✅ **switch Statement**
Used when you have multiple possible conditions for a single value.

```javascript
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the workweek.");
        break;
    case "Friday":
        console.log("Weekend is near!");
        break;
    case "Sunday":
        console.log("Relax, it's Sunday!");
        break;
    default:
        console.log("It's a regular day.");
}
```
📌 **Key Points:**  
- `case` checks for a match.
- `break` stops execution after a match (to prevent running all cases).  
- `default` executes if no match is found.

---

## **2️⃣ Loops**
Loops help run code multiple times until a condition is met.

### ✅ **for Loop** (When you know the exact number of iterations)

```javascript
for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i);
}
```
📌 **Steps:**  
1. Initialize (`let i = 1`)  
2. Check condition (`i <= 5`)  
3. Run the block  
4. Increment (`i++`)  
5. Repeat until condition is false

---

### ✅ **while Loop** (When the number of iterations is unknown)
Executes while the condition is `true`.

```javascript
let count = 1;

while (count <= 3) {
    console.log("Count is:", count);
    count++;
}
```
📌 **Runs as long as** `count <= 3`.

---

### ✅ **do...while Loop** (Executes at least once)
Executes the block first, then checks the condition.

```javascript
let num = 5;

do {
    console.log("Number is:", num);
    num--;
} while (num > 0);
```
📌 **Executes at least once**, even if `num = 0`.

---

### ✅ **forEach Loop** (Used for arrays)
Executes a function for each element in an array.

```javascript
let fruits = ["Apple", "Banana", "Cherry"];

fruits.forEach(function(fruit) {
    console.log(fruit);
});
```
📌 **Iterates over arrays without manually managing indices.**

---

### ✅ **for...of Loop** (Used for iterables like arrays, strings)
Iterates over values (not indices).

```javascript
let fruits = ["Apple", "Banana", "Cherry"];

for (let fruit of fruits) {
    console.log(fruit);
}
```
📌 **Cleaner alternative to `forEach` for arrays.**

---

## **3️⃣ Loop Control Statements**
### ✅ **break Statement**
Stops the loop when a condition is met.

```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break; // Stops when i = 3
    }
    console.log(i);
}
```
📌 **Stops looping when `i === 3`**.

---

### ✅ **continue Statement**
Skips the current iteration and moves to the next.

```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // Skips when i = 3
    }
    console.log(i);
}
```
📌 **Prints 1, 2, 4, 5 (skips 3).**

---

## **🚀 Summary**
| Statement | Description |
|-----------|------------|
| `if, else if, else` | Runs different blocks of code based on conditions |
| `switch` | Checks for multiple possible values |
| `for` | Runs a loop a set number of times |
| `while` | Runs while a condition is `true` |
| `do...while` | Runs at least once before checking condition |
| `forEach` | Iterates through an array |
| `for...of` | Iterates through iterable values |
| `break` | Exits a loop early |
| `continue` | Skips an iteration |