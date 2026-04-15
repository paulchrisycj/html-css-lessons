// Functions are basically reuse-able code that you
// can call upon to do the same thing
// multiple times

// This is the syntax
function sayHello(){
    console.log("I AM SAYING HELLO")
    console.log("This is what I say after Hello")
}

// This is how you invoke/call the function
// sayHello()
// sayHello()
// sayHello()
// sayHello()

//                      Arguments
function sayHelloWithName(name /* This is called an argument*/){
    console.log("Hi " + name)
}
// sayHelloWithName("Paul")
// sayHelloWithName("Jacky")
// sayHelloWithName("Shakthy")

function sayHelloWithNameAndAge(name, age, yearOrMonth){
    if(yearOrMonth == "year"){
        console.log("Hi " + name + " and you are " + age + " years old")
    }else{
        console.log("Hi " + name + " and you are " + age + " months old")
    }
}
// sayHelloWithNameAndAge("Paul", "60", "year")
// sayHelloWithNameAndAge("Ping Jin", 18, "year")
// sayHelloWithNameAndAge("Ian", 24, "month")

// return Statement
function add(n1, n2){
    return n1 + n2
}
console.log(add(5, 7))

var num1 = 12
var num2 = 32
const sum = add(num1, num2) // 44, basically return makes the function
                            // give back a value, in this case it's
                            // the sum of the two numbers
console.log(sum)

// Simpler Example
function sampleReturnStatement(){
    return "This is a sample string" // This will make the function give
                                    // back a string value
}
const sampleString = sampleReturnStatement() // sampleReturnStatement()
                                            // returns "This is a sample string"
                                            // So it is assigning "This is a sample string"
                                            // to the variable 'sampleString'
console.log(sampleString)

function subtract(n1, n2){
    return n1 - n2
}
var bigNum = 144
var smallNum = 50
const difference = subtract(bigNum, smallNum) //94
console.log(difference) // 94

var anotherBigNum = 300
var anotherSmallNum = 140
const anotherDifference = subtract(anotherBigNum, anotherSmallNum) // 160
console.log(anotherDifference)

function toCelsius(fahrenheit){
    return (5 / 9) * (fahrenheit - 32)
}
console.log(toCelsius(90)) // 32.222222