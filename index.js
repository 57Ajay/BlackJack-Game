const getRandomCard = ()=>{
    
    randomNumber = Math.floor(1+Math.random()*13)
    if (randomNumber > 10){
        return 10
    }else if (randomNumber === 1){
        return 11
    }else{
        return randomNumber
    }
}

let Cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#card-el")


const renderGame = ()=>{
    
    cardEl.textContent = "Cards: "
    // A for loop that renders out all the cards.
    for (let i = 0; i < Cards.length; i++) {
        cardEl.textContent += Cards[i] + " | "
    }

    sumEl.textContent = "Sum: " + sum
    
    

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
        
    }
    messageEl.textContent = message  
     
}

const startGame = ()=>{
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    Cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    console.log("Game Started")
    renderGame()
}

const reStartGame = ()=>{
    location.reload()
}

const newCard = ()=>{
    if (isAlive === true && hasBlackJack === false){
        console.log("Drawing a new card from the deck!")
        let card = getRandomCard()
        sum += card
        Cards.push(card)
        renderGame()
    }
    

    if(sum > 21){
        // Set a refresh timer for 2000 milliseconds (3 seconds)
        setTimeout(function() {
        // Reload the current page after 2 seconds
        location.reload();
        }, 2000); 
    }

}

