let firstCard = 11
let secondCard = 9
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true

if ( sum < 21 ) {
  console.log("Do you want to draw a new card? 🙂")
} else if ( sum === 21 ) {
  console.log("Wohooo!You have blackjack! 🥳")
  hasBlackJack = true
}else {
  console.log("You're out of the game! 😭")
  isAlive = false
}