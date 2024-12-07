function getComputerChoice(){
    let rand = Math.random() * 100
    if (rand <= 33) {
        return "rock";
    }
    else if (rand >= 33 & rand <= 66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
// console.log(getComputerChoice())

function getHumanChoice() {
    let choice = prompt("Choose Rock, Paper or Scissors");
    choice = choice.toLowerCase();
    // console.log(choice)

    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    }
    else {
        alert("Invalid choice");
        let choice2 = getHumanChoice();
        return choice2;
    }
}
// console.log(getHumanChoice())

let humanScore = 0;
let computerScore = 0;

function playRound () {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    // console.log(humanChoice);
    // console.log(computerChoice);

    switch(humanChoice + "-" + computerChoice) {
        case "rock-scissors": 
        humanScore = humanScore + 1;
        return "You win! Rock beats scissors.";

        case "rock-paper": 
        computerScore = computerScore + 1;
        return "You lose! Paper beats rock.";

        case "rock-rock": 
        return "Draw!";

        case "scissors-rock":
        computerScore = computerScore + 1;
        return "You lose! Rock beats scissors.";

        case "scissors-paper":
        humanScore = humanScore + 1;
        return "You win! Scissors beat paper.";

        case "scissors-scissors":
        return "Draw!";

        case "paper-scissors":
        computerScore = computerScore + 1;
        return "You lose! Scissors beat paper.";

        case "paper-rock":
        humanScore = humanScore + 1;
        return "You win! Paper beats rock.";
        
        case "paper-paper":
        return "Draw!";
    }
}

function playGame () {
    for (let i = 0; i < 5; i++) {
        alert(playRound() + ` Computer: ${computerScore} You: ${humanScore}`)
    }
    if (humanScore>computerScore) {
        alert("You have won! Congrats!")
    }
    else {
        alert("You lost... Better luck next time.")
    }
}

playGame();