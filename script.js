function getComputerChoice(){
    let rand = Math.random() * 100
    if (rand <= 33) {
        return "Rock";
    }
    else if (rand >= 33 & rand <= 66) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

console.log(getComputerChoice())