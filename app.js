window.onload = () => {

    const userScoreSpan = document.getElementById('user-score');
    const computerScoreSpan = document.getElementById('computer-score');
    const rockDiv = document.getElementById('rock');
    const paperDiv = document.getElementById('paper');
    const scissorsDiv = document.getElementById('scissors');
    let resultDiv = document.querySelector('.result');
    let userScore = 0;
    let computerScore = 0;

    // mainFunction 
    const getComputerChoice = (computerMove) => {
        const choices = ["r", "p", "s"];
        const randomNumber = Math.floor(Math.random() * 3);
        computerMove = choices[randomNumber];
        return computerMove;
    }
    // console.log(getComputerChoice());

    const win = () => {
        // console.log('Win');
        // console.log(userScore);
        userScore++;
        userScoreSpan.innerHTML = userScore;
        resultDiv.innerHTML = "You Won, Congrats";
    }
    const lost = () => {
        // console.log('Looser');
        // console.log(computerScore);
        computerScore++;
        computerScoreSpan.innerHTML = computerScore;
    }
    const draw = () => {
        console.log('A draw');
    }

    const game = ((userChoice) => {
        computerChoice = getComputerChoice();
        switch (userChoice + computerChoice) {
            case "rs":
            case "pr":
            case "sp":
                win();
                userScore++;
                break;
            case "sr":
            case "rp":
            case "ps":
                lost();
                computerChoice++;
                break;
            case "rr":
            case "pp":
            case "ss":
                draw();
                break;
        }

    })

    rockDiv.addEventListener('click', event => {
        // console.log(rockDiv);
        game("r");
    })

    paperDiv.addEventListener('click', event => {
        // console.log(paperDiv);
        game("p");
    })

    scissorsDiv.addEventListener('click', event => {
        // console.log(scissorsDiv);
        game("s");

    })
};