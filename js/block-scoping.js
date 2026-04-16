var globalVar = "This is a global variable";

// 3 Types of Scope
// Global Scope - Accessible anywhere in the code
// Function Scope - Accessible inside the function
// Block Scope - Accessible within the 'block' only
// let - is a block-scope declaration
// var - is a function-scope declaration

// Example of Function Scope
function exampleFunction() {
    var functionVar = "I am a function-scoped variable";
    console.log(globalVar);
    console.log(functionVar);

    if (true) {
        var blockVar = "I am a block-scoped variable";
        // let blockVar = "I am a block-scoped variable"
        console.log(blockVar);
        console.log(functionVar);
    }
    console.log(blockVar);
}
exampleFunction();
// console.log(functionVar)

for (let i = 0; i < 3; i++) {
    console.log("Inside the loop: " + i);
}

console.log("Outside the loop: " + i); // "Outside the loop: 3"
// if using 'let' // ReferenceError: i is not defined