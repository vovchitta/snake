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
const snake = new Snake();
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

createBoard();
food.draw();