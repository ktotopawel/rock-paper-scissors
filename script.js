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

const buttons = document.querySelector('#buttons');

const log = document.querySelector('.log');

buttons.addEventListener('click', (event) => {
    let target = event.target;
    // console.log(target)
    var logEntry = document.createElement('p');
    logEntry.classList.add('log-entry');
    log.append(logEntry);

    switch(target.id) {
        case 'rock':
            // alert("Chosen rock");
            logEntry.textContent = playRound("rock");
            break;
        case 'scissors':
            // alert("Chosen scissors");
            logEntry.textContent = playRound("scissors");
            break;
        case 'paper':
            // alert("Chosen paper");
            logEntry.textContent = playRound("paper");
            break;
    }
    // console.log(`human score: ${humanScore}`);
    // console.log(`computer score: ${computerScore}`);

    humanScoreCounter.textContent = `${humanScore}`;
    computerScoreCounter.textContent = `${computerScore}`;
    if (humanScore == 5 && humanScore > computerScore) {
        displayPopup(true);
    }
    else if (computerScore == 5 && computerScore > humanScore) {
        displayPopup(false);
    }
})

const humanScoreCounter = document.querySelector('.human-score-counter');
const computerScoreCounter = document.querySelector('.computer-score-counter');

var humanScore = 0;
var computerScore = 0;



function playRound (humanChoice) {
    let computerChoice = getComputerChoice();
    // console.log(humanChoice);
    // console.log(computerChoice);

    switch(humanChoice + "-" + computerChoice) {
        case "rock-scissors": 
            humanScore = humanScore + 1;
            // var logEntry = document.createElement("p");
            // logEntry.textContent = "";
            return "You win! Rock beats scissors.";

        case "rock-paper": 
            computerScore = computerScore + 1;
            // var logEntry = document.createElement("p");
            // logEntry.textContent = "";
            return "You lose! Paper beats rock.";

        case "rock-rock":
            // var logEntry = document.createElement("p");
            // logEntry.textContent = ""; 
            return "Draw!";

        case "scissors-rock":
           computerScore = computerScore + 1;
        //    var logEntry = document.createElement("p");
        //     logEntry.textContent = "";  
        return "You lose! Rock beats scissors.";

        case "scissors-paper":
            humanScore = humanScore + 1;
            // var logEntry = document.createElement("p");
            // logEntry.textContent = "";
        return "You win! Scissors beat paper.";

        case "scissors-scissors":
            // var logEntry = document.createElement("p");
            // logEntry.textContent = "";
        return "Draw!";

        case "paper-scissors":
           computerScore = computerScore + 1;
        //    var logEntry = document.createElement("p");
        //    logEntry.textContent = "You lose! Scissors beat paper.";
        return "You lose! Scissors beat paper.";

        case "paper-rock":
            humanScore = humanScore + 1;
            // var logEntry = document.createElement("p");
            // logEntry.textContent = "You win! Paper beats rock.";
        return "You win! Paper beats rock.";
        
        case "paper-paper":
        //     var logEntry = document.createElement("p");
        //    logEntry.textContent = "Draw!";
        return "Draw!";
    }
}

const overlay = document.querySelector('.overlay');
const popup = document.querySelector('.popup')

function displayPopup(judge) {
    overlay.classList.add('visible');
    console.log(judge);
    if (judge === true) {
        const winDesc = document.createElement('p');
        winDesc.textContent = 'Congratulations!'
        popup.prepend(winDesc);
        const winHeading = document.createElement('h3');
        winHeading.textContent = 'You win!';
        popup.prepend(winHeading);
    }
    else {
        const winDesc = document.createElement('p');
        winDesc.textContent = 'Better luck next time!'
        popup.prepend(winDesc);
        const winHeading = document.createElement('h3');
        winHeading.textContent = 'You lose!';
        popup.prepend(winHeading);
    }
}