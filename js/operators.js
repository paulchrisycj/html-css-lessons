// What is the '=' operator called?
// = is an Assignment Operator
const myVar = 50

// Comparison Operators
// > (greater than)
// < (less than)
// >= (greater than or equal to)
// <= (less than or equal to)
// != (not equal)
// == (equal)

// !== (strict not equal) (checks data type)
// === (strict equal) (checks data type)
console.log(myVar == 50); // true
console.log(30 > 50) // false
console.log(40 < 80) // true
console.log(35 >= 27) // true
console.log(60 <= 70) // true
console.log(80 != 81) // true
console.log(80 != 79) // true
console.log(50 == '50') // true
console.log(80 != '80') // false
console.log(50 === '50') // false
console.log(80 !== '80') // true

console.log("--------------------------------------------------------")

// Logical Operators
// AND, OR
// &&, ||
console.log(50 == 50 && 20 == 15) // false
console.log(50 == 50 || 20 == 15) // true
console.log(50 == 50 && 20 > 15) // true
console.log(50 == 50 || 20 < 15) // true