// What is null in JavaScript ?
    
//     * null is a special value in JavaScript that represents "nothing" or "empty".
    
//     * It is an intentional absence of any value.

//     * Think of null as an empty box that is meant to hold something, but currently holds nothing.

//     Example of null

        let name = null;
        console.log(name); // Output: null
        

        // Here, name is declared, but it does not have any meaningful value.Instead, it is explicitly set to null.



// When to Use null ?
    
//     * When you want to clear a variable and indicate that it has no value yet.

//     * When an object does not exist or data is missing.

//     Example:

    let user = { name: "Alice" };
    user.name = null; // The name is now cleared
    console.log(user.name); // null