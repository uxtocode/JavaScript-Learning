## **What is Date in JavaScript?**
In JavaScript, the `Date` object is used to work with dates and times. It allows you to create, manipulate, and format dates.

### **Declaring a Date in JavaScript**
To create a date, use the `Date` constructor.

### **1️⃣ Creating a Date Object**
#### **Current Date and Time**
```javascript
const now = new Date();
console.log(now);  // Example Output: 2025-03-30T12:34:56.789Z
```

#### **Specific Date**
```javascript
const specificDate = new Date(2023, 5, 15); // Year, Month (0-based), Day
console.log(specificDate); // Output: Thu Jun 15 2023 00:00:00 GMT+0000
```
- **Months start from `0` (January) to `11` (December).**

#### **Using a Date String**
```javascript
const dateFromString = new Date("2024-12-25");
console.log(dateFromString); // Output: Wed Dec 25 2024
```

#### **Using Timestamps (Milliseconds since Jan 1, 1970)**
```javascript
const dateFromTimestamp = new Date(1700000000000);
console.log(dateFromTimestamp); // Output: Thu Nov 14 2023
```

---

## **Common Methods Used with Date in JavaScript**

### **1️⃣ Getting Date and Time Components**
```javascript
const date = new Date();

console.log(date.getFullYear());  // Output: 2025 (current year)
console.log(date.getMonth());     // Output: 2 (March, since months start at 0)
console.log(date.getDate());      // Output: 30 (Day of the month)
console.log(date.getDay());       // Output: 0 (Sunday, 0 represents Sunday)
console.log(date.getHours());     // Output: 12 (Hours)
console.log(date.getMinutes());   // Output: 34 (Minutes)
console.log(date.getSeconds());   // Output: 56 (Seconds)
console.log(date.getMilliseconds()); // Output: 789 (Milliseconds)
console.log(date.getTime());      // Output: Timestamp (milliseconds since 1970)
```

---

### **2️⃣ Setting Date and Time Components**
```javascript
const date = new Date();
date.setFullYear(2026);
date.setMonth(5);    // June
date.setDate(15);
date.setHours(10);
date.setMinutes(45);

console.log(date);  // Updated Date: Mon Jun 15 2026 10:45:00
```

---

### **3️⃣ Formatting Dates**
#### **Convert Date to a String**
```javascript
const date = new Date();
console.log(date.toString());      // Example: Sun Mar 30 2025 12:34:56 GMT+0000
console.log(date.toDateString());  // Example: Sun Mar 30 2025
console.log(date.toUTCString());   // Example: Sun, 30 Mar 2025 12:34:56 GMT
console.log(date.toISOString());   // Example: 2025-03-30T12:34:56.789Z
console.log(date.toLocaleDateString()); // Example: 3/30/2025 (format depends on locale)
console.log(date.toLocaleTimeString()); // Example: 12:34:56 PM (format depends on locale)
console.log(date.toLocaleString()); // Example: 3/30/2025, 12:34:56 PM
```

---

### **4️⃣ Getting the Timestamp (Milliseconds)**
```javascript
const timestamp = Date.now();
console.log(timestamp); // Example Output: 1711800000000
```

---

### **5️⃣ Comparing Dates**
```javascript
const date1 = new Date("2025-03-30");
const date2 = new Date("2025-04-01");

if (date1.getTime() < date2.getTime()) {
    console.log("date1 is earlier than date2");
} else {
    console.log("date1 is later than or equal to date2");
}
// Output: date1 is earlier than date2
```

---

## **What is the Type of Date in JavaScript?**
The type of `Date` in JavaScript is **an object**.
```javascript
const date = new Date();
console.log(typeof date);  // Output: "object"
```
Even though it represents a date, it is an instance of the `Date` class.

---

## **Conclusion**
- The `Date` object in JavaScript is used to **work with dates and times**.
- You can **create, modify, and format dates** using various methods.
- The `Date` type is an **object** and is not a primitive data type.
- The timestamp (milliseconds) is useful for **date comparisons**.