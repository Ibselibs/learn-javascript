// // Create a function (you decide the name) that logs out the number 42 to the console
// function testFunction() {
//     console.log(42)
// }

// // Call/invoke the function

// testFunction()

let lap1 = 34
let lap2 = 33
let lap3 = 36

// Create a function that logs out the sum of all the lap times 
//Alternative 1:
function loggingLaps() {
    let lapTotal = lap1 + lap2 + lap3 
    console.log(lapTotal)
}

loggingLaps()

//Alternative 2:
function logLapTime() {
    console.log(lap1 + lap2 + lap3)
}

logLapTime()