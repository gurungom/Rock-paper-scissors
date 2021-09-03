

const handOption = {
    "rock": "img/Rock.png",
    "paper": "img/Paper.png",
    "scissors": "img/Scissors.png"
}

let SCORE = 0;

const pickUserHand = (hand) => {

    // Hide hands
    let hands = document.querySelector(".hands");
    hands.style.display = "none";

    // Show the next page with hand you picked
    let contest = document.querySelector(".contest");
    contest.style.display = "flex";

    //Set user pick
    document.getElementById("userPickImage").src = handOption[hand];

    // Set computer hand
    let cphand = pickComputerhand();

    //Set referee decision
    referee(hand, cphand);

}

const pickComputerhand = () => {
    let hands = ["rock", "paper", "scissors"];

    let cpHand = hands[Math.floor(Math.random()*3)];

    //set computer pick
    document.getElementById("computerPickImage").src = handOption[cpHand];

    return cpHand;
}

const referee = (userHand, cpHand) => {
    if (userHand == "paper" && cpHand == "scissors") {
        setDecision("YOU LOSE!");
      }
      if (userHand == "paper" && cpHand == "rock") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
      }
      if (userHand == "paper" && cpHand == "paper") {
        setDecision("It's a tie!");
      }
      if (userHand == "rock" && cpHand == "scissors") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
      }
      if (userHand == "rock" && cpHand == "paper") {
        setDecision("YOU LOSE!");
      }
      if (userHand == "rock" && cpHand == "rock") {
        setDecision("It's a tie!");
      }
      if (userHand == "scissors" && cpHand == "scissors") {
        setDecision("It's a tie!");
      }
      if (userHand == "scissors" && cpHand == "rock") {
        setDecision("YOU LOSE!");
      }
      if (userHand == "scissors" && cpHand == "paper") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
      }
}

const setDecision = (decision) => {
    document.querySelector('.decision h1').innerText = decision;
}

const setScore = (score) => {
    SCORE = score;
    document.querySelector('.score h1').innerText = score;
}

const playAgain = () => {
    // Show hands
    let hands = document.querySelector(".hands");
    hands.style.display = "flex";

    // Hide the contest page with hand you picked
    let contest = document.querySelector(".contest");
    contest.style.display = "none";
}

const showOrHideRules = () => {
  let rules = document.querySelector('.rules-Box');
  if (rules.style.display === "none") {
    rules.style.display = "flex";
  } else {
    rules.style.display = "none";
  }
  
}
/*
const hideRules = () => {
  let hiderules = document.querySelector('.rules-box');
  hiderules.style.display = "none";
  console.log(1);
}
*/