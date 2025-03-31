### **Operators & Expressions in JavaScript**

#### **1️⃣ Arithmetic Operators (Perform mathematical operations)**
| Operator | Meaning | Example | Output |
|----------|---------|---------|--------|
| `+`  | Addition | `10 + 5`  | `15` |
| `-`  | Subtraction | `10 - 5`  | `5` |
| `*`  | Multiplication | `10 * 5`  | `50` |
| `/`  | Division | `10 / 5`  | `2` |
| `%`  | Modulus (Remainder) | `10 % 5`  | `0` |
| `**`  | Exponentiation | `10 ** 2`  | `100` |
```js
let a = 10, b = 5;
console.log("Addition:", a + b);   // 15
console.log("Subtraction:", a - b); // 5
console.log("Multiplication:", a * b); // 50
console.log("Division:", a / b);   // 2
console.log("Modulus:", a % b);   // 0
console.log("Exponentiation:", a ** 2); // 100
```

#### **2️⃣ Comparison Operators (Compare values and return `true` or `false`)**
| Operator | Meaning | Example | Output |
|----------|---------|---------|--------|
| `==`  | Equal (loose) | `10 == "10"` | `true` |
| `===` | Equal (strict) | `10 === "10"` | `false` |
| `!=`  | Not equal | `10 != 5` | `true` |
| `!==` | Strict not equal | `10 !== "10"` | `true` |
| `>`  | Greater than | `10 > 5` | `true` |
| `<`  | Less than | `10 < 5` | `false` |
| `>=` | Greater than or equal to | `10 >= 5` | `true` |
| `<=` | Less than or equal to | `10 <= 5` | `false` |
```js
let c = "10";
console.log("Equal (loose):", a == c); // true
console.log("Equal (strict):", a === c); // false
console.log("Not equal:", a != b); // true
console.log("Strict not equal:", a !== c); // true
console.log("Greater than:", a > b); // true
console.log("Less than:", a < b); // false
console.log("Greater than or equal:", a >= b); // true
console.log("Less than or equal:", a <= b); // false
```

#### **3️⃣ Logical Operators (Combine multiple conditions)**
| Operator | Meaning | Example | Output |
|----------|---------|---------|--------|
| `&&` | Logical AND | `10 > 5 && 5 < 10` | `true` |
| `\|\|` | Logical OR | `10 < 5 `\|\|` 5 < 10` | `true` |
| `!` | Logical NOT | `!(10 > 5)` | `false` |
```js
console.log("Logical AND:", a > b && b < a); // true
console.log("Logical OR:", a < b || b < a); // true
console.log("Logical NOT:", !(a > b)); // false
```

#### **4️⃣ Assignment Operators (Assign values to variables)**
| Operator | Meaning | Example | Output |
|----------|---------|---------|--------|
| `=` | Assign | `x = 10` | `10` |
| `+=` | Add & assign | `x += 5` | `15` |
| `-=` | Subtract & assign | `x -= 3` | `12` |
| `*=` | Multiply & assign | `x *= 2` | `24` |
| `/=` | Divide & assign | `x /= 4` | `6` |
```js
let x = 10;
x += 5; console.log("Add & assign:", x); // 15
x -= 3; console.log("Subtract & assign:", x); // 12
x *= 2; console.log("Multiply & assign:", x); // 24
x /= 4; console.log("Divide & assign:", x); // 6
```

#### **5️⃣ Ternary Operator (Shorter `if-else`)**
| Condition | Expression | Output |
|-----------|------------|--------|
| `age >= 18` | `age >= 18 ? "Adult" : "Minor"` | `"Adult"` |
```js
let age = 20;
console.log("Ternary Result:", age >= 18 ? "Adult" : "Minor"); // "Adult"
```

#### **6️⃣ Special Operators**

##### **Nullish Coalescing Operator (`??`)**
| Operator | Meaning | Example | Output |
|----------|---------|---------|--------|
| `??` | Returns right operand if left is `null` or `undefined` | `null ?? "Default"` | `"Default"` |
```js
let user = null;
console.log(user ?? "Guest"); // "Guest"
```

##### **Spread Operator (`...`)**
| Operator | Meaning | Example | Output |
|----------|---------|---------|--------|
| `...` | Expands elements of an array/object | `[...arr]` | `Copies elements` |
```js
let nums = [1, 2, 3];
let newNums = [...nums, 4, 5];
console.log(newNums); // [1, 2, 3, 4, 5]
```

##### **Rest Operator (`...`)**
| Operator | Meaning | Example | Output |
|----------|---------|---------|--------|
| `...` | Gathers multiple elements into an array | `function sum(...nums)` | `Array of arguments` |
```js
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10
```

### **📝 Summary**
- **Arithmetic Operators** → Perform math (`+, -, *, /, %, **`)
- **Comparison Operators** → Compare values (`==, ===, !=, !==, >, <`)
- **Logical Operators** → Combine conditions (`&&, ||, !`)
- **Assignment Operators** → Assign values (`=, +=, -=, *=, /=`)
- **Ternary Operator** → Shorter `if-else` (`condition ? value1 : value2`)
- **Nullish Coalescing (`??`)** → Handles `null` or `undefined`
- **Spread Operator (`...`)** → Expands arrays/objects
- **Rest Operator (`...`)** → Gathers arguments into an array