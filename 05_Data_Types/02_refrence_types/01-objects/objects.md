# Objects in JavaScript

    Objects in JavaScript are used to store multiple values in a structured way. They represent real-world entities by storing properties (key-value pairs) and methods (functions inside an object).

    Objects allow you to group related data and behavior together, making it easier to work with complex data.

## Declaring an Object in JavaScript

    You can declare an object in multiple ways:

    ### 1. Using Object Literal (Most Common Way)

    ```js
    const person = {
    name: "John",
    age: 25,
    isStudent: false,
    greet: function () {
        return "Hello, " + this.name;
    }
    };
    ```

    ### 2. Using the `new Object()` Constructor

    ```js
    const car = new Object();
    car.brand = "Toyota";
    car.model = "Corolla";
    car.year = 2022;
    ```

    ### 3. Using a Constructor Function

    ```js
    function Person(name, age) {
    this.name = name;
    this.age = age;
    }

    const person1 = new Person("Alice", 30);
    const person2 = new Person("Bob", 25);
    ```

    ### 4. Using Class Syntax (ES6)

    ```js
    class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    }

    const dog = new Animal("Buddy", "Dog");
    ```

    ## Accessing Object Properties

    You can access object properties in two ways:

    ### 1. Dot Notation (Preferred)

    ```js
    console.log(person.name);  // Output: John
    console.log(car.brand);    // Output: Toyota
    ```

    ### 2. Bracket Notation (Useful for Dynamic Keys)

    ```js
    console.log(person["age"]);   // Output: 25

    const key = "model";
    console.log(car[key]);  // Output: Corolla
    ```

## Common Methods Used with Objects in JavaScript

    ### 1. `Object.keys(obj)` – Get All Keys
    Returns an array of all the keys (property names) of an object.

    ```js
    console.log(Object.keys(person)); 
    // Output: ["name", "age", "isStudent", "greet"]
    ```

    ### 2. `Object.values(obj)` – Get All Values
    Returns an array of all the values in an object.

    ```js
    console.log(Object.values(person)); 
    // Output: ["John", 25, false, ƒ]
    ```

    ### 3. `Object.entries(obj)` – Get Key-Value Pairs
    Returns an array of `[key, value]` pairs.

    ```js
    console.log(Object.entries(person)); 
    // Output: [["name", "John"], ["age", 25], ["isStudent", false], ["greet", ƒ]]
    ```

    ### 4. `Object.assign(target, source)` – Copy Object Properties
    Copies properties from one object to another.

    ```js
    const obj1 = { a: 1, b: 2 };
    const obj2 = { c: 3 };
    const merged = Object.assign({}, obj1, obj2);
    console.log(merged); 
    // Output: { a: 1, b: 2, c: 3 }
    ```

    ### 5. `Object.freeze(obj)` – Prevent Modifications
    Prevents adding, modifying, or deleting properties.

    ```js
    const frozenObj = { name: "Sam" };
    Object.freeze(frozenObj);
    frozenObj.name = "Alex";  // No effect
    console.log(frozenObj.name);  // Output: Sam
    ```

    ### 6. `Object.seal(obj)` – Prevent Adding/Removing Properties
    Allows modifying existing properties but prevents adding or deleting.

    ```js
    const sealedObj = { age: 30 };
    Object.seal(sealedObj);
    sealedObj.age = 31;  // Allowed
    sealedObj.city = "NY";  // Not allowed
    console.log(sealedObj); // Output: { age: 31 }
    ```

    ### 7. `hasOwnProperty(prop)` – Check if Object Has a Property
    Returns `true` if the object has the specified property.

    ```js
    console.log(person.hasOwnProperty("age")); // Output: true
    console.log(person.hasOwnProperty("gender")); // Output: false
    ```

    ### 8. `Object.create(proto)` – Create an Object with a Prototype
    Creates a new object with the given prototype.

    ```js
    const prototypeObj = { greet: function () { return "Hello!"; } };
    const newObj = Object.create(prototypeObj);
    console.log(newObj.greet()); // Output: Hello!
```

## Conclusion
- Objects store key-value pairs and can also have methods.
- They can be accessed using dot or bracket notation.
- JavaScript provides built-in methods to manipulate and retrieve object properties efficiently.
