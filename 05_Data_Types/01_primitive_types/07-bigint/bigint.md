# Everything You Need to Know About BigInt in JavaScript

## Introduction

- Introduced in **ES11 (ECMAScript 2020)**
- `BigInt` is a special primitive type in JavaScript used for working with **very large integers** that cannot be accurately represented by the `Number` type.

---

## 1. Why Do We Need BigInt?

- In JavaScript, the **largest safe integer** that can be represented using `Number` is **((2 ** 53) - 1)**.
- JavaScript numbers follow the **IEEE 754** standard and are stored as **64-bit floating-point values**.

```js
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

console.log(9007199254740991 + 1); // 9007199254740992 (Correct)
console.log(9007199254740991 + 2); // 9007199254740992 (Incorrect!)
```

- The last example is incorrect because **precision is lost** beyond `Number.MAX_SAFE_INTEGER`.

---

## 2. How to Create a BigInt

There are **two ways** to create a `BigInt`:

1. **Using the `n` suffix** (recommended)
2. **Using the `BigInt()` constructor**

```js
const big1 = 1234567890123456789012345678901234567890n; // Using 'n' suffix
const big2 = BigInt("1234567890123456789012345678901234567890"); // Using constructor

console.log(big1);
console.log(big2);
console.log(big1 === big2); // true
```

---

## 3. Operations with BigInt

BigInt supports **basic arithmetic operations**:

```js
const a = 100000000000000000000000n;
const b = 200000000000000000000000n;

console.log(a + b); // 300000000000000000000000n
console.log(a - b); // -100000000000000000000000n
console.log(a * b); // 20000000000000000000000000000000000000000n
console.log(b / a); // 2n (BigInt division always **rounds down**)
console.log(a % b); // 100000000000000000000000n
```

> **Note:** When dividing `BigInt`, it always **rounds down**, unlike `Number`.

---

## 4. Mixing BigInt and Number (❌ Not Allowed)

JavaScript **does not allow** arithmetic operations between `BigInt` and `Number`:

```js
console.log(10n + 5); // ❌ TypeError: Cannot mix BigInt and other types
```

### ✅ You need to convert between `BigInt` and `Number` manually:

```js
console.log(10n + BigInt(5)); // ✅ 15n
console.log(Number(10n) + 5); // ✅ 15
```

> **Caution:** Converting `BigInt` to `Number` may cause **precision loss**.

---

## 5. Comparisons and Equality

✅ **Comparisons (`<`, `>`, `<=`, `>=`) Work Fine:**

```js
console.log(100n > 50); // true
console.log(100n === 100); // false (Strict equality, different types)
console.log(100n == 100); // true (Loose equality, converts automatically)
```

- `===` checks **both type and value**, so `100n !== 100`.
- `==` allows **implicit conversion** (`100n == 100` → `true`).

---

## 6. Using BigInt with Math (❌ Not Supported)

JavaScript's `Math` functions **do not work** with `BigInt`:

```js
console.log(Math.sqrt(16n)); // ❌ TypeError
```

### ✅ Solution: Convert to `Number`

```js
console.log(Math.sqrt(Number(16n))); // ✅ 4
```

---

## Key Takeaways

- `BigInt` is useful for working with extremely large numbers.
- You can create `BigInt` using **`n` suffix** or **`BigInt()` constructor**.
- Arithmetic operations work, but **division rounds down**.
- `BigInt` cannot be **mixed** with `Number` in operations.
- **Math functions** do not support `BigInt` (must convert to `Number`).

