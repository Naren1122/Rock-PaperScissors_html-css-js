function playRPS() {
    console.log("Welcome to the Rock, Paper, Scissors Game!");
    const userChoices = prompt("Please enter your choice (Rock, Paper, Scissors):");
    const lowerCaseChoices = userChoices.toLowerCase();

    if (lowerCaseChoices !== "rock" && lowerCaseChoices !== "paper" && lowerCaseChoices !== "scissors") {
        console.log("Invalid choice! Please enter Rock, Paper, or Scissors.");
        return;// Restart the game if invalid input
    }

    let computerChoice;
    let randomNumber = Math.floor(Math.random() * 3) + 1;

    function getComputerChoice() {
        if (randomNumber === 1) {
            computerChoice = "rock";
        } else if (randomNumber === 2) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        }
    }

    getComputerChoice(); // Make sure computerChoice is set before the switch

    switch (lowerCaseChoices) {
        case "rock":
            console.log("User's choice: " + lowerCaseChoices);
            console.log("Computer's choice: " + computerChoice);
            if (computerChoice === "rock") {
                console.log("It's a tie!");
            } else if (computerChoice === "paper") {
                console.log("Sorry! You lose. Better luck next time!");
            } else {
                console.log("Congratulations! You win!");
            }
            break;

        case "paper":
            console.log("User's choice: " + lowerCaseChoices);
            console.log("Computer's choice: " + computerChoice);
            if (computerChoice === "paper") {
                console.log("It's a tie!");
            } else if (computerChoice === "scissors") {
                console.log("Sorry! You lose. Better luck next time!");
            } else {
                console.log("Congratulations! You win!");
            }
            break;

        case "scissors":
            console.log("User's choice: " + lowerCaseChoices);
            console.log("Computer's choice: " + computerChoice);
            if (computerChoice === "scissors") {
                console.log("It's a tie!");
            } else if (computerChoice === "rock") {
                console.log("Sorry! You lose. Better luck next time!");
            } else {
                console.log("Congratulations! You win!");
            }
            break;
    }

    const playAgain = prompt("Do you want to play again? (yes/no):");
    const lowercasePlayAgain = playAgain ? playAgain.toLowerCase() : 'no';
    if (lowercasePlayAgain === 'yes') {
        playRPS();
    } else {
        console.log("Thank you for playing! Goodbye!");
    }
}
playRPS();
