let firstCard = 1
let secondCard = 10
let sum = firstCard + secondCard 
let hasBlackJack = false
let isAlive = true
let message = ""
if (typeof document !== 'undefined') {
    let messageEl = document.createElementbyId("message-el")
    
    
    function startGame() {
        if (sum <= 20) {
            message = "Do you want to draw a new card? 🙂"
        } else if (sum === 21) {
            message = "Wohoo! You've got Blackjack! 🥳"
            hasBlackJack = true
        } else {
            message = "You're out of the game! 😭"
            isAlive = false
        }
        
        console.log(message)    
    }
 }


function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    
    console.log(messageEl.textContext)    
}

   //Cash Out!
//

