let firstCard = 11
let secondCard = 9
let sum = firstCard + secondCard

if ( sum < 21 ) {
  console.log("Do you want to draw a new card? 🙂")
} else if ( sum === 21 ) {
  console.log("Wohooo!You have blackjack! 🥳")
}else {
  console.log("You're out of the game! 😭")
}