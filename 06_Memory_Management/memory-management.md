# Memory management in JavaScript 

## **1️⃣ Stack vs Heap Memory**  
JavaScript uses two types of memory storage:  

### **Stack Memory (Fast & Small - Used for Primitive Data Types)**  
- **Used for storing primitive values** (`Number`, `String`, `Boolean`, `undefined`, `null`, `Symbol`, `BigInt`).  
- Stored **directly in memory** and accessed quickly.  
- Follows the **Last In, First Out (LIFO)** principle.  
- Each function call creates a new "stack frame" that holds local variables until the function completes.  

💡 **Example**:  
```js
let x = 10; // Stored in the stack
let y = x;  // A copy of 'x' is made and stored separately

x = 20; // Changing x does not affect y
console.log(y); // Output: 10
```
Here, `x` and `y` are **independent** because primitives are copied by **value**.

---

### **Heap Memory (Larger & Slower - Used for Objects and Arrays)**  
- **Used for reference types** (`Objects`, `Arrays`, `Functions`).  
- Objects are **stored in the heap**, but **references** to them are stored in the stack.  
- Changes to the object affect all references pointing to it.  

💡 **Example**:  
```js
let obj1 = { name: "Alice" }; // Object stored in the heap, reference stored in stack
let obj2 = obj1; // Both obj1 and obj2 point to the same heap memory location

obj1.name = "Bob"; // Changing obj1 also affects obj2
console.log(obj2.name); // Output: "Bob"
```
Since objects are copied **by reference**, changing `obj1` affects `obj2` because they point to the same memory.

---

## **2️⃣ Primitive vs Reference Types in Memory**  
### **Primitive Data Types (Stored in Stack)**
- Stored **directly** in memory.  
- When assigned to a new variable, a **copy** is made.  

```js
let a = 5;
let b = a; // b gets a separate copy
a = 10;
console.log(b); // Output: 5 (b remains unchanged)
```

### **Reference Data Types (Stored in Heap)**
- The **actual value is stored in heap memory**.  
- The variable stores only a **reference (address) in the stack**.  
- Copying a reference type **does not create a new object**, only a new reference to the same memory location.  

```js
let arr1 = [1, 2, 3];
let arr2 = arr1; // arr2 points to the same array in heap

arr1.push(4);
console.log(arr2); // Output: [1, 2, 3, 4] (Both point to the same array)
```

---

## **3️⃣ Garbage Collection (Automatic Memory Cleanup)**  
JavaScript **automatically** frees up memory that is no longer used.  

### **How It Works?**  
- JavaScript uses **Garbage Collection** with an algorithm called **Mark and Sweep**.  
- When an object is **no longer reachable**, it gets removed from memory.  
- If no variable references an object, JavaScript will free the memory automatically.

💡 **Example**:
```js
let obj = { name: "Charlie" };
obj = null; // The object is now unreachable and will be garbage collected
```
Since there are **no references to the object**, JavaScript will remove it from memory.

---

## **📝 Key Takeaways**  
1. **Stack Memory** is for primitives and works with **copy by value**.  
2. **Heap Memory** is for objects, which are copied **by reference**.  
3. **Garbage Collection** automatically removes unused memory.  