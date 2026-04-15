var x = 5;
x = 20;
console.log(x) // Output: 20

const y = 30;
// y = 40 // This will produce an error

console.log(x + y) // 50

var firstName = "Paulchris"
var lastName = "Yeow"

console.log(firstName + lastName) // PaulchrisYeow
console.log(firstName + " " + lastName) //Paulchris Yeow

/*
Primitive Data Types
String: Represent text, e.g: your name
Numbers (Integers): For math computations
                    Written without quotes (")
Float (Decimal): Also for math, but is decimal
Booleans: True or False values (1 or 0)
*/

// Special Data Type - Undefined and Null
// Undefined: Before a value is assigned - var x
// Null: Absence of a value / No Value - var x = null
// Both are different from 0.

// Non-Primitive Data Types - Arrays and Objects
// Arrays

var anArray = [1, 2, 3, 4, 5];
console.log(anArray[0]) // 1
console.log(anArray[1]) // 2
console.log(anArray[2]) // 3

var fruits = ["Apple", "Orange", "Banana"]
console.log(fruits[0]) // Apple
console.log(fruits[1]) // Orange
console.log(fruits[2]) // Banana

// Objects
// const movie = {
//     name: "Avengers: Endgame",
//     year: "2019",
//     directors: "Anthony Russo, Joe Russo",
//     runningTime: "3h 1m",
//     storyBy: "Stan Lee, Jack Kirby, Jim Starlin"
// }
// console.log(movie.name)
// console.log(movie.year)
// console.log(movie.storyBy)

// Arrays are sequential (arranged in order of numbers)
// Start from 0
// Objects are used by key-value pairs
// Left side: Key, Right side: Value

// Objects with Arrays
// Arrays within an object
const movie1 = {
    name: "Avengers: Endgame",
    year: "2019",
    directors: ["Anthony Russo", "Joe Russo"],
    runningTime: "3h 1m",
    storyBy: ["Stan Lee", "Jack Kirby", "Jim Starlin"]
}
console.log(movie1.directors[0])

// Arrays of Objects
const movie2 = {
    name: "Up",
    year: "2009",
    directors: ["Pete Doctor"],
    runningTime: "1h 35m",
    storyBy: ["Pete Doctor", "Tom McCarthy", "Bob Peterson"]
}

const movies = [movie1, movie2]
console.log(movies)
console.log(movies[1].storyBy[1]) // Tom McCarthy


// Multi-dimensional array (2D Array)
// What you guys have learnt is 1D Array

const heroes = [
    ["ironman", "spiderman", "hulk"],
    ["superman", "batman", "green arrow"],
    ["Aang", "Korra", "Katara"]
]

console.log(heroes[0][1]); // Spiderman
console.log(heroes[1][2]); // Green Arrow
console.log(heroes[2][0]); // Aang