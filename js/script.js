import Food from './Food.js';
import Snake from './Snake.js';
import Score from './Score.js';

const board = document.querySelector('.main__board');
const boardWidth = 500;
const boardHeight = 500;
const squareSize = 50;
const randomX = Math.floor(Math.random() * boardWidth / squareSize);
const randomY = Math.floor(Math.random() * boardHeight / squareSize);

const food = new Food(randomX, randomY, changeCellColor);
const snake = new Snake(changeCellColor);
const score = new Score();

function changeCellColor(x, y, color) {
    const cellId = `cell-${x}-${y}`;
    const cell = document.getElementById(cellId);
    if (cell) {
        cell.style.backgroundColor = color;
    }
}

function createCell(x, y) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.id = `cell-${x}-${y}`;
    cell.dataset.x = x;
    cell.dataset.y = y;
    board.appendChild(cell);
}

function createBoard() {
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            createCell(i, j);
        }
    }
}

document.addEventListener("keydown", function (event) {
    changeDirection(event.keyCode);
});

function changeDirection(keyCode) {

    if (keyCode === 37 && direction !== "right") {
    direction = "left";
    } else if (keyCode === 38 && direction !== "down") {
    direction = "up";
    } else if (keyCode === 39 && direction !== "left") {
    direction = "right";
    } else if (keyCode === 40 && direction !== "up") {
    direction = "down";
    }
}

createBoard();
food.draw();
snake.startPosition();
setInterval(snake.move, 100);

if (snakeHead.x === food.x && snakeHead.y === food.y) {
    food.draw();
    score += 1;
} else {
    snake.pop();
}