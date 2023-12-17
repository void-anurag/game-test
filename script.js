const userScoreCard = document.querySelector(".score .user");
const compScoreCard = document.querySelector(".score .comp");
const rockButton = document.querySelector(".options .rock");
const paperButton = document.querySelector(".options .paper");
const scissorsButton = document.querySelector(".options .scissors");
const status = document.querySelector(".status");
const endStatus = document.querySelector(".game-end");
const resetButton = document.querySelector("#reset");

let userScore = 0;
let compScore = 0;
let statusString;
let userChoice;
let rounds = 0;

let compChoice = randChoice();

main();

function randChoice() {
	switch (Math.floor(Math.random() * 3) + 1) {
		case 1:
			return "rock";
		case 2:
			return "paper";
		case 3:
			return "scissors";
	}
}

function main() {
	rockButton.addEventListener("click", () => {
		userChoice = "rock";
		rounds++;
		checkDecision(userChoice);
		compChoice = randChoice();
		checkRoundOver();
	});

	paperButton.addEventListener("click", () => {
		userChoice = "paper";
		rounds++;
		checkDecision(userChoice);
		compChoice = randChoice();
		checkRoundOver();
	});

	scissorsButton.addEventListener("click", () => {
		userChoice = "scissors";
		rounds++;
		checkDecision(userChoice);
		compChoice = randChoice();
		checkRoundOver();
	});

	resetButton.addEventListener("click", reset);
}

function checkDecision(userChoice) {
	switch (userChoice + compChoice) {
		case "rockssissors":
		case "paperrock":
		case "scissorspaper":
			win(userChoice);
			break;
		case "rockrock":
		case "paperpaper":
		case "scissorsscissors":
			draw(userChoice);
			break;
		case "rockpaper":
		case "scissorsrock":
		case "paperscissors":
			loss(compChoice);
			break;
	}
	userScoreCard.innerHTML = userScore;
	compScoreCard.innerHTML = compScore;
}

function win(user) {
	userScore++;
	switch (user) {
		case "rock":
			statusString = "Rock crushed Scissors. ";
			break;
		case "paper":
			statusString = "Paper covered Rocks. ";
			break;
		case "scissors":
			statusString = "Scissors sliced Paper. ";
			break;
	}
	status.innerHTML =
		`Round ${rounds}: ` + statusString + "<strong>You</strong> win!.";

	document.querySelector(`.${userChoice}`).classList.add("win");
	setTimeout(
		() => document.querySelector(`.${userChoice}`).classList.remove("win"),
		600
	);
}

function loss(comp) {
	compScore++;
	switch (comp) {
		case "rock":
			statusString = "Rock crushed Scissors. ";
			break;
		case "paper":
			statusString = "Paper covered Rocks. ";
			break;
		case "scissors":
			statusString = "Scissors sliced Paper. ";
			break;
	}
	status.innerHTML =
		`Round ${rounds}: ` +
		statusString +
		"<strong>Comp</strong> wins!.";
	document.querySelector(`.${userChoice}`).classList.add("loss");
	setTimeout(
		() => document.querySelector(`.${userChoice}`).classList.remove("loss"),
		600
	);
}

function draw(user) {
	switch (user) {
		case "rock":
			statusString = "Two Rocks collided. ";
			break;
		case "paper":
			statusString = "Two Papers stacked. ";
			break;
		case "scissors":
			statusString = "Two Scissors crossed.";
			break;
	}
	status.innerHTML =
		`Round ${rounds}: ` + statusString + "<strong>Draw</strong>.";
	document.querySelector(`.${userChoice}`).classList.add("draw");
	setTimeout(
		() => document.querySelector(`.${userChoice}`).classList.remove("draw"),
		600
	);
}

function reset() {
	userScore = 0;
	compScore = 0;
	if (
		status.innerText ===
			"Make a choice. The computer made its choice already." ||
		status.innerHTML === "New Game! Good luck this time." ||
		status.innerHTML === "Game is already reset."
	) {
		status.innerHTML = "Game is already reset.";
	} else status.innerHTML = "New Game! Good luck this time.";
	userScoreCard.innerHTML = userScore;
	compScoreCard.innerHTML = compScore;
	rockButton.disabled = false;
	paperButton.disabled = false;
	scissorsButton.disabled = false;
	rounds = 0;
	endStatus.innerHTML = "";
}

function checkRoundOver() {
	if (rounds === 5) {
		rockButton.disabled = true;
		paperButton.disabled = true;
		scissorsButton.disabled = true;

		if (userScore > compScore) {
			endStatus.innerHTML = `You win. You are awesome. <p>Play Again?</p>`;
		} else if (compScore > userScore) {
			endStatus.innerHTML = `You lose. Better luck next time. <p>Play Again?</p>`;
		} else {
			endStatus.innerHTML = `Looks like a draw to me. <p>Play Again?</p>`;
		}
	}
}
