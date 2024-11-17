console.log("hi");

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

function getHumanChoice(){
    let humanChoice = prompt("please enter your choice rock or paper or cisar");

    while(humanChoice.toUpperCase() != "ROCK" && humanChoice.toUpperCase() != "PAPER" && humanChoice.toUpperCase() != "CISAR"){
        humanChoice = prompt("please enter your choice rock or paper or cisar");
    }

    return humanChoice.toLocaleLowerCase();
}

function playRound(humanChoice, computerChoice){
    if( humanChoice == "rock" && computerChoice == "cisar"){
        humanScore += 1;
        alert(`you won the round your score ${humanScore} and the computer Score ${computerScore}`);
    }else if(humanChoice == "rock" && computerChoice == "paper"){
        computerScore += 1;
        alert(`you loosed the round your score ${humanScore} and the computer Score ${computerScore}`);
    }else if(humanChoice == "rock" && computerChoice == "rock"){
        computerScore += 1;
        humanChoice += 1;
        alert(`draw your score ${humanScore} and the computer Score ${computerScore}`);
    }else if(humanChoice == "cisar" && computerChoice == "paper"){
        humanScore += 1;
        alert(`you won the round your score ${humanScore} and the computer Score ${computerScore}`);
    }else if(humanChoice == "cisar" && computerChoice == "rock"){
        computerScore += 1;
        alert(`you loosed the round your score ${humanScore} and the computer Score ${computerScore}`);
    }else if(humanChoice == "cisar" && computerChoice == "cisar"){
        computerScore += 1;
        humanChoice += 1;
        alert(`draw your score ${humanScore} and the computer Score ${computerScore}`);
    }else if(humanChoice == "paper" && computerChoice == "rock"){
        humanScore += 1;
        alert(`you won the round your score ${humanScore} and the computer Score ${computerScore}`);
    }else if(humanChoice == "paper" && computerChoice == "cisar"){
        computerScore += 1;
        alert(`you loosed the round your score ${humanScore} and the computer Score ${computerScore}`);
    }else{
        computerScore += 1;
        humanChoice += 1;
        alert(`draw your score ${humanScore} and the computer Score ${computerScore}`);
    }
}

function playGame(){
    let humanC;
    let computerC;
    for(let i =0 ; i< 5; i++){
        humanC = getHumanChoice();
        computerC = getComputerChoice();

        playRound(humanC, computerC);
    }
    alert(`Finall Score \n your score ${humanScore} and the computer Score ${computerScore}`)

    if(humanScore > computerScore)
        console.log("you won");
    else console.log("computer won");
    humanScore = 0;
    computerScore = 0;
    return 0;
}

playGame();