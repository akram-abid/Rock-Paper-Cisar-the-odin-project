let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let computerChoice;
    let computerChoiceNumber = Math.floor(Math.random()*10);
    while(computerChoiceNumber < 1 || computerChoiceNumber > 3){
        computerChoiceNumber = Math.floor(Math.random()*10);
    }
    if(computerChoiceNumber == 1)
        computerChoice = "rock";
    else if(computerChoiceNumber == 2)
        computerChoice = "paper";
    else computerChoice = "cisar"
    
    return computerChoice.toLowerCase();
}

function getHumanChoice(humanChoice){
    
    while(humanChoice.toUpperCase() != "ROCK" && humanChoice.toUpperCase() != "PAPER" && humanChoice.toUpperCase() != "CISAR"){
        humanChoice = prompt("please enter your choice rock or paper or cisar");
    }

    return humanChoice.toLocaleLowerCase();
}

function playRound(humanChoice, computerChoice){
    if( humanChoice == "rock" && computerChoice == "cisar"){
        humanScore += 1;
        //alert(`you won the round your score ${humanScore} and the computer Score ${computerScore}`);
    }else if(humanChoice == "rock" && computerChoice == "paper"){
        computerScore += 1;
        //alert(`you loosed the round your score ${humanScore} and the computer Score ${computerScore}`);
    }else if(humanChoice == "rock" && computerChoice == "rock"){
        computerScore += 1;
        humanChoice += 1;
        //alert(`draw your score ${humanScore} and the computer Score ${computerScore}`);
    }else if(humanChoice == "cisar" && computerChoice == "paper"){
        humanScore += 1;
        //alert(`you won the round your score ${humanScore} and the computer Score ${computerScore}`);
    }else if(humanChoice == "cisar" && computerChoice == "rock"){
        computerScore += 1;
        //alert(`you loosed the round your score ${humanScore} and the computer Score ${computerScore}`);
    }else if(humanChoice == "cisar" && computerChoice == "cisar"){
        computerScore += 1;
        humanChoice += 1;
        //alert(`draw your score ${humanScore} and the computer Score ${computerScore}`);
    }else if(humanChoice == "paper" && computerChoice == "rock"){
        humanScore += 1;
        //alert(`you won the round your score ${humanScore} and the computer Score ${computerScore}`);
    }else if(humanChoice == "paper" && computerChoice == "cisar"){
        computerScore += 1;
        //alert(`you loosed the round your score ${humanScore} and the computer Score ${computerScore}`);
    }else{
        computerScore += 1;
        humanChoice += 1;
        //alert(`draw your score ${humanScore} and the computer Score ${computerScore}`);
    }
}

function playGame(humanC){
    let computerC;
    computerC = getComputerChoice();
    playRound(humanC, computerC);
    alert(`Finall Score \n your score ${humanScore} and the computer Score ${computerScore}`)

    if(humanScore > computerScore)
        console.log("you won");
    else console.log("computer won");
    humanScore = 0;
    computerScore = 0;
    return 0;
}

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorBtn = document.querySelector(".scissor");

rockBtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice())
    resultAn.textContent = `your score is ${humanScore} and the computer score is${computerScore}`;
    if(humanScore == 5 || computerScore == 5){
        if(humanScore>computerScore)
            winner.textContent = "YOU WIN !! Congratulations";
        else winner.textContent = "Computer won WIN !! you ediot you couldn't deafeat a machine";
        result.appendChild(winner);
        humanScore = 0;
        computerScore = 0;
    }else{
        winner.textContent = "";
    }
});

paperBtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
    resultAn.textContent = `your score is ${humanScore} and the computer score is${computerScore}`;
    if(humanScore == 5 || computerScore == 5){
        if(humanScore>computerScore)
            winner.textContent = "YOU WIN !! Congratulations";
        else winner.textContent = "Computer won WIN !! you ediot you couldn't deafeat a machine";
        if(humanScore == 5 || computerScore ==5)
            result.appendChild(winner);
        humanScore = 0;
        computerScore = 0;
        resultAn.textContent = `your score is ${humanScore} and the computer score is${computerScore}`;
    }else{
        winner.textContent = "";
    }
});

console.log(scissorBtn);
scissorBtn.addEventListener("click", () => {
    playRound("cisar", getComputerChoice());
    resultAn.textContent = `your score is ${humanScore} and the computer score is${computerScore}`;
    if(humanScore == 5 || computerScore == 5){
        if(humanScore>computerScore)
            winner.textContent = "YOU WIN !! Congratulations";
        else winner.textContent = "Computer won WIN !! you ediot you couldn't deafeat a machine";
        result.appendChild(winner);
        humanScore = 0;
        computerScore = 0;
    }else{
        winner.textContent = "";
    }
});

const result = document.createElement("div");
document.body.appendChild(result);
result.classList.add("result");
const resultAn = document.createElement("p");
result.appendChild(resultAn);
const winner = document.createElement("p");
resultAn.textContent = `your score is ${humanScore} and the computer score is${computerScore}`;