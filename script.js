let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")

let message = ""
let cards = []
let sum = 0
let isAlive = false
let hasBlackjack = false

function startGame() {
    cardsEl.textContent = "Cards: "
    message = "Would you like to pick again?"
    isAlive = true
    let firstCard = getRandomNumber()
    let secondCard = getRandomNumber()
    cards = [] 
    cards[0] = firstCard
    cards[1] = secondCard
    renderGame()
}

function renderGame() {
    sum = 0
    for(i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
        sum += cards[i]
    }

    
    if(sum < 21 && sum != 0){
        message = "Would you like to pick again?"
        isAlive = true
        hasBlackjack = false
    }
    else if(sum === 0){
        isAlive = false
        message = "Want to play a round?"
    }
    else if(sum === 21) {
        message = "You've got Blackjack 😁"
        isAlive = false
        hasBlackjack = true
    }
    else if(sum > 21){
        message = "You are out of the game"
        isAlive = false
        hasBlackjack = false
    }
    
    if(sum > 0){
        sumEl.textContent = "Sum: " + sum
    }
    messageEl.textContent = message
}

function newCard() {
    if(isAlive === true && hasBlackjack === false){
        cards.push(getRandomNumber())
    }
    cardsEl.textContent = "Cards: "
    renderGame()
    console.log(sum)
}

function getRandomNumber() {
    let randomNumber = Math.floor( Math.random() * 13 + 1)
    if (randomNumber === 11 || randomNumber === 12 || randomNumber === 13){
        return 10
    }
    else {
        return randomNumber
    }
}