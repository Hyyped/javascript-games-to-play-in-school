function playGame() {
var minRange = Math.round(Math.random() * 50) + 1;
var maxRange = Math.round(Math.random() * 100) + 51;
var num = Math.round(Math.random() * maxRange) + minRange;
var answer = prompt(`I am thinking of a number between ${minRange} and ${maxRange}.\nWhat number am I thinking of?`);
if (answer > maxRange || answer < minRange) {
    alert(`Please enter a number between ${minRange} and ${maxRange}.\nGame is resetting.`);
    playGame();
}
else if (answer == num) {
    alert(`Correct! The answer was ${answer}!`);
    if (confirm("Play again?") == true) {
        playGame();
    }
    else {
        throw error("Game Closed");
    };
}
else {
    alert(`Oh no! The answer wasn't ${answer}!`);
    if (confirm("Play again?") == true) {
        playGame();
    }
    else {
        throw error("Game Closed");
    };
};
};
playGame();
