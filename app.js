// alert("Do you want to play my game?");

var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const smallUserWord = "user".fontsize(3).sub();
const smallCompWord = "comp".fontsize(3).sub();

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === 'r') return "Rock";
    if (letter === 'p') return "Paper";
    return "Scissors"
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = convertToWord(userChoice) + smallUserWord + " beats " + convertToWord(computerChoice) + smallCompWord + "! You Win :)!";
    userChoice_div.classList.add("green-glow");
    setTimeout(function() {userChoice_div.classList.remove('green-glow')}, 500);
    if (userScore > computerScore && userScore === 5) {
        alert("You have beaten the machine!");
        reset()
    }
}
function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convertToWord(computerChoice) + smallCompWord + " beats " + convertToWord(userChoice) +smallUserWord + "! You Lost :(";
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow')}, 500);
    if (userScore < computerScore && computerScore === 5) {
        alert("The machine never loses!");
        reset()
    }
}

function reset() {
    userScore = 0;
    computerScore = 0;
    userScore_span.innerHTML = 0;
    computerScore_span.innerHTML = 0;
}

function draw(userChoice, computerChoice) {
    console.log('draw');
    result_p.innerHTML = "You both selected " + convertToWord(userChoice) + "! It's a tie...";
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('grey-glow')}, 500)

}
function game(userChoice) {
    const computerChoice = getComputerChoice();
    console.log("User Choice => " + userChoice);
    console.log("Computer Choice => " + computerChoice);
    switch(userChoice + computerChoice) {
        case "pr":
        case "rs":
        case "sp":
            win(userChoice, computerChoice);
            break;
    }
    switch(computerChoice + userChoice) {
        case "pr":
        case "rs":
        case "sp":
            lose(userChoice, computerChoice);
            break;
    }
    switch(computerChoice + userChoice) {
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    })

    paper_div.addEventListener('click', function () {
        game("p");
    })
    scissors_div.addEventListener('click', function () {
        game("s");
    })
}

main();


















