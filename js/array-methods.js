// Array Methods 1

// Length.

const fruits = ["apple", "kiwi", "durian", "mango", "orange"]
console.log(fruits.length)

// Using length, can you write a loop to output all the fruits?
for(var i = 0; i < fruits.length; i++){
    console.log("Current Fruit: " + fruits[i])
}

// Addition, Subtraction, Add in the middle, Take from the middle
// Push, Pop, Shift, Unshift

fruits.push("banana")
console.log(fruits)
fruits.pop()
console.log(fruits)
fruits.unshift("pineapple")
console.log(fruits)
fruits.shift()
console.log(fruits)

// Splice, Slice

// Splice
// Remove the second element
// .splice(index, how_many)
fruits.splice(1, 1)
console.log(fruits)

// Add an element in the middle
// .splice(index, 0, 'item')
fruits.splice(1, 0, 'passion fruit')
console.log(fruits)

// You can also remove and add at the same time
// fruits.splice(1, 1, 'passion fruit')

// Sample replace
fruits.splice(1, 1, "dragon fruit")
console.log(fruits)

// Slice
// .slice(start, end)
// console.log(fruits.slice(0, 3))

const firstThree = fruits.slice(0, 3)
console.log(firstThree)

// Get the last few elements
// .slice(number_of_elements_to_remove)
console.log(fruits.slice(3))