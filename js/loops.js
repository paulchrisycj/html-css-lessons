// Loops -> Infinity Loop (Something that repeats and will never end)
// Finite Loop (Something that loops and will eventually end)
// Loops are basically code that repeats itself until a condition is met

// It's important to know what condition causes the loop to stop.
// Eating - stomach full, food is finished
// Running - completed number of rounds on the track
// Push-ups - completed number of push-ups

// Now reverse those conditions, what KEEPS the loop running.
// Eating - food is still available, stomach is hungry
// Running - Have not yet reach the number of rounds
// Push-ups - Have not yet completed number of push-ups

// For Loop
// for(initialization; condition; iteration;){}

// for(var i = 0; i <= 10; i++){
//     console.log(i)
// }

// for(var eat = 100; eat >= 1; eat--){
//     console.log("Number of mouthfulls left: " + eat)
// }

// Simple exercise:
// Write me a loop that prints the odd number from 1 to 30.
// Combine loop with if.
// for(var n = 1; n <= 30; n++){
//     if(n % 2 == 1){
//         console.log(n)
//     }
// }
// For Loop

// While Loop
// while(condition){}

// var i = 1;

// while(i <= 5){
//     console.log(i);
//     i++;
// }
// Simple Exercise: Write me a loop that prints even numbers
// Using while loop. 1 to 30.
// var n = 1;

// while(n <= 30){
//     if(n % 2 == 0){
//         console.log(n);
//     }
//     n++;
// }

// For Loops are good for number based conditions
// While Loops are good for external input conditions

// var input;

// while(input !== "yes" && input !== "no"){
//     input = prompt("Please enter 'yes' or 'no' only.")
// }

// console.log("User entered: " + input);

// Simple exercise: Write a loop that asks if you are full
// And it only stops when you are full.
// var input;

// while(input != "full"){
//     input = prompt("Are you full? If you are, type 'full'")
// }

// console.log("User entered: " + input);