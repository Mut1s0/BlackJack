let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let firstCard = 6
let secondCard = 7
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

function startGame() {
  renderGame()
}

function renderGame() {
  cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
  sumEl.textContent = "Sum: " + sum
  if (sum <= 20) {
    message = "Do you want to draw a new cad?"
  }else if (sum === 21) {
    message = "You've got Blackjack!"
    hasBlackJack = true
  }else {
    message = "You're out of the game!"
    isAlive = false
  }
  messageEl.textContent = message
}

function newCard() {
  let card = 2
  sum += card
  renderGame()
}