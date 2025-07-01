let userChoice = null;

function startGame() {
  userChoice = null; // Reset choice

  const userHand = document.getElementById('user-hand');
  const computerHand = document.getElementById('computer-hand');
  const result = document.getElementById('result');
  const countdown = document.getElementById('countdown');

  //Enable choice buttons
   const buttons = document.querySelectorAll('.choice-button');
  buttons.forEach(btn => btn.disabled = false);

  // Reset display
  result.textContent = '';
  countdown.textContent = '';

  // Show fists
  userHand.src = './image/fist.png';
  computerHand.src = './image/fist.png';

  // Start shaking
  userHand.classList.add('shake');
  computerHand.classList.add('shake');

  // Start countdown (5 → 0)
  let timeLeft = 5;
  countdown.textContent = `Please choose among the 3 options... Time left: ${timeLeft}`;

  const timer = setInterval(() => {
    timeLeft--;
    if (timeLeft > 0) {
      countdown.textContent = `Please choose among the 3 options... Time left: ${timeLeft}`;
    } else {
      clearInterval(timer); // stop timer
      countdown.textContent = ''; // clear message

      // Stop shaking
      userHand.classList.remove('shake');
      computerHand.classList.remove('shake');

      // If no choice, player loses
      if (!userChoice) {
        result.textContent = "You didn't choose in time!";
        setTimeout(() => {
          askPlayAgain();
        }, 2000);
        return;
      }

      // Computer chooses
      const choices = ['rock', 'paper', 'scissors'];
      const computerChoice = choices[Math.floor(Math.random() * 3)];

      // Show final hands
      userHand.src = `./image/${userChoice}.png`;
      computerHand.src = `./image/${computerChoice}.png`;

      // Decide winner
      let outcome = '';
      if (userChoice === computerChoice) {
        outcome = "It's a tie!";
      } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
      ) {
        outcome = "You win!";
      } else {
        outcome = "Computer wins!";
      }

      result.textContent = outcome;

      // Wait 2 sec → ask to play again
      setTimeout(() => {
        askPlayAgain();
      }, 2000);
    }
  }, 1000); // run every 1 sec
}

// This helper function can go anywhere in your script (top or bottom)
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// This is your choose() function, which uses capitalize()
function choose(choice) {
  userChoice = choice; // Record user choice

  const result = document.getElementById('result');
  result.textContent = `You selected ${capitalize(choice)}.`;  // Show message
}


function askPlayAgain() {
  const playAgain = confirm("Do you want to play again?");
  if (playAgain) {
    window.location.reload();
  } else {
document.getElementById('result').innerHTML = 
  "Thank you for playing!<br>Please refresh the page if you want to continue playing...";

    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true);
  }
}
