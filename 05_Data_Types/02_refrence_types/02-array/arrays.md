### **What is an Array in JavaScript?**
An **array** in JavaScript is a special type of object used to store multiple values in a single variable. Arrays can hold a collection of elements, including numbers, strings, objects, or even other arrays.

### **Declaring an Array**
You can declare an array in multiple ways:

#### **1. Using Square Brackets (Recommended)**
```js
let fruits = ["Apple", "Banana", "Mango"];
```

#### **2. Using `new Array()` Constructor**
```js
let numbers = new Array(10, 20, 30);
```
(Note: This is less commonly used, as `new Array(5)` creates an array with 5 empty slots.)

---

### **Accessing Values in an Array**
Each element in an array has an **index**, starting from `0`. You can access values using square brackets:

```js
console.log(fruits[0]); // "Apple"
console.log(fruits[1]); // "Banana"
console.log(fruits[2]); // "Mango"
```

---

### **Common Array Methods**
JavaScript provides many built-in methods to manipulate arrays. Here are the most commonly used ones:

#### **1. `push()` – Adds an Element to the End**
```js
fruits.push("Orange");
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]
```

#### **2. `pop()` – Removes the Last Element**
```js
fruits.pop();
console.log(fruits); // ["Apple", "Banana", "Mango"]
```

#### **3. `unshift()` – Adds an Element to the Beginning**
```js
fruits.unshift("Grapes");
console.log(fruits); // ["Grapes", "Apple", "Banana", "Mango"]
```

#### **4. `shift()` – Removes the First Element**
```js
fruits.shift();
console.log(fruits); // ["Apple", "Banana", "Mango"]
```

#### **5. `length` – Finds the Length of the Array**
```js
console.log(fruits.length); // 3
```

#### **6. `indexOf()` – Finds the Index of an Element**
```js
console.log(fruits.indexOf("Banana")); // 1
console.log(fruits.indexOf("Pear")); // -1 (Not found)
```

#### **7. `includes()` – Checks if an Element Exists**
```js
console.log(fruits.includes("Mango")); // true
console.log(fruits.includes("Pear")); // false
```

#### **8. `slice()` – Extracts Part of an Array**
```js
let slicedFruits = fruits.slice(1, 3); 
console.log(slicedFruits); // ["Banana", "Mango"]
```

#### **9. `splice()` – Adds/Removes Elements**
```js
fruits.splice(1, 1, "Peach", "Cherry"); 
console.log(fruits); // ["Apple", "Peach", "Cherry", "Mango"]
```
(First parameter: index, Second: number of elements to remove, Third+: items to add)

#### **10. `join()` – Converts an Array to a String**
```js
console.log(fruits.join(", ")); // "Apple, Peach, Cherry, Mango"
```

#### **11. `reverse()` – Reverses the Array**
```js
console.log(fruits.reverse()); // ["Mango", "Cherry", "Peach", "Apple"]
```

#### **12. `sort()` – Sorts an Array**
```js
let numbers = [40, 100, 1, 5, 25, 10];
console.log(numbers.sort((a, b) => a - b)); // [1, 5, 10, 25, 40, 100] (Ascending order)
```

#### **13. `map()` – Transforms Each Element**
```js
let numbersDoubled = numbers.map(num => num * 2);
console.log(numbersDoubled); // [2, 10, 20, 50, 80, 200]
```

#### **14. `filter()` – Filters Elements Based on a Condition**
```js
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [10, 40, 100]
```

#### **15. `reduce()` – Reduces the Array to a Single Value**
```js
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 181
```

#### **16. `forEach()` – Loops Over Each Element**
```js
fruits.forEach(fruit => console.log(fruit));
```
(Logs each fruit)

---

### **Summary**
- Arrays store multiple values.
- Access elements using indexes.
- Methods like `push()`, `pop()`, `map()`, `filter()`, and `reduce()` help manipulate arrays.