# ✅ **Object-Oriented Programming (OOP) in JavaScript**

JavaScript supports object-oriented programming using both **prototype-based inheritance** and the modern **class syntax**. This allows developers to structure code into **reusable objects and blueprints (classes)**.

---

## 🧠 **1️⃣ Prototypes & Prototype Chain**

### **What is a Prototype?**
- Every JavaScript object has an internal property called `[[Prototype]]`, which refers to another object.
- This forms a **prototype chain** used for **inheritance**.

### **Example:**
```js
const person = {
    greet() {
        console.log("Hello!");
    }
};

const student = Object.create(person); // student inherits from person
student.name = "Alex";

student.greet(); // Output: Hello!
```

### **Prototype Chain Lookup**
When you access `student.greet()`, JavaScript:
1. Looks for `greet()` in `student`.
2. Doesn't find it, so it looks in `person` (the prototype).
3. Executes it from `person`.

---

### **Adding Methods via Prototype**
```js
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function () {
    console.log(`${this.name} makes a noise.`);
};

const dog = new Animal("Dog");
dog.speak(); // Output: Dog makes a noise.
```

---

## 🏗️ **2️⃣ Classes & Constructors**

### **What is a Constructor Function?**
Constructor functions are used to **create multiple similar objects**.

```js
function Car(brand, year) {
    this.brand = brand;
    this.year = year;
}

Car.prototype.getInfo = function () {
    return `${this.brand} was made in ${this.year}`;
};

const car1 = new Car("Toyota", 2020);
console.log(car1.getInfo());
```

---

### **Class Syntax (ES6)**
JavaScript introduced a cleaner, modern syntax with the `class` keyword.

```js
class Car {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }

    getInfo() {
        return `${this.brand} was made in ${this.year}`;
    }
}

const car2 = new Car("Honda", 2021);
console.log(car2.getInfo());
```

✅ **Class is just syntax sugar** over constructor functions and prototype.

---

## 🧬 **3️⃣ `extends` and `super` (Inheritance)**

### **Extending Classes**
Use `extends` to create a child class that inherits properties and methods from a parent class.

```js
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog("Rex");
dog.speak(); // Output: Rex barks.
```

---

### **Using `super()`**
- `super()` calls the **constructor of the parent class**.
- It must be called **before using `this`** in the child constructor.

```js
class Person {
    constructor(name) {
        this.name = name;
    }
}

class Student extends Person {
    constructor(name, grade) {
        super(name); // Call parent constructor
        this.grade = grade;
    }

    info() {
        console.log(`${this.name} is in grade ${this.grade}`);
    }
}

const student = new Student("Emma", 10);
student.info(); // Output: Emma is in grade 10
```

---

## 🚀 **Final Takeaways**

- Every object in JS has a **prototype**; this forms the **inheritance chain**.
- **Constructor functions** were the traditional way to create reusable object templates.
- **Classes** offer a more modern and readable syntax for creating objects and inheritance.
- Use **`extends`** to inherit from a parent class, and **`super()`** to call its constructor.