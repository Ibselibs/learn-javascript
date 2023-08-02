let firstCard = 10
let secondCard = 10
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true
let message = ""
// 1. Declare a variable called message and assign its value to an empty string

// 2. Reassign the message variable to the string we're logging out
if (sum <= 20) {
    message = "Do you want to draw a new card?"
}else if (sum === 21) {
    message = "Woohoo! You have BlackJack!"
    hasBlackJack = true
}else {
    message = "You are out of the game!"
    isAlive = false
}

   //Cash Out!
//console.log(isAlive)
//console.log(hasBlackJack)

// 3. Log it out!
console.log(message)