import Field from "./Field.js";
import Food from "./Food.js";
import Snake from "./Snake.js";

const field = document.querySelector('.main__field');
let direction = 'right';
let bestScoreUnit = document.querySelector('.main__score_best');
let bestScore = localStorage.getItem('yourBestScore');
let startGame;

const creator = new Field(0, 0, field, findCell);
const food = new Food(findCell);

creator.createField();
creator.border('grey');

food.draw();

let foodCoordX = food.foodUnit.x;
let foodCoordY = food.foodUnit.y;

function updateScoreAndCheckBest() {
    if (snake.score > bestScore) {
        bestScore = snake.score;
        localStorage.setItem('yourBestScore', bestScore);
    }
}

function newGame () { window.addEventListener('click', ()=> {
startGame = setInterval(() => {
	snake.move();
	updateScoreAndCheckBest();
	if (snake.score > bestScore) {
		bestScoreUnit.textContent = 'Your best score:' + bestScore;
	}
    }, 200);
})
};

newGame();

	function endGame() {
		clearInterval(startGame);
		let endGameWindow = document.querySelector('.main__start_window');
		endGameWindow.style.display = 'flex';
        let scoreEndGame = document.querySelector('.main__score_new');
        let bestScoreEndGame = document.querySelector('.main__score_best');
        scoreEndGame.style.fontSize = '60px';
        bestScoreEndGame.style.fontSize = '60px';
        let resetGame = document.querySelector('.start_btn');
        resetGame.addEventListener('click', ()=> {
            location.reload();
        });
        if (bestScore > 0) {
            bestScoreUnit.textContent = 'Your best score: ' + bestScore;
        }
	}

const snake = new Snake(findCell, direction, foodCoordX, foodCoordY, endGame);

function findCell (a, b, color, border) {
    let xCoord = a;
    let yCoord = b;
    const thisCell = document.querySelector(`.cell[data-x="${xCoord}"][data-y="${yCoord}"]`);
    thisCell.style.backgroundColor = `${color}`;
    thisCell.style.border = `${border}`;
}

document.addEventListener("keydown", onMove);

function onMove(event) {
    if(event.keyCode == 37 && direction != "right")
        direction = "left";
    else if(event.keyCode == 38 && direction != "down")
        direction = "up";
    else if(event.keyCode == 39 && direction != "left")
        direction = "right";
    else if(event.keyCode == 40 && direction != "up")
        direction = "down";
    snake.direction = direction;
}

	if (bestScore > 0) {
		bestScoreUnit.textContent = 'Your best score: ' + bestScore;
	}

