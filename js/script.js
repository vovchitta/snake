import Field from "./Field.js";
import Food from "./Food.js";
import Snake from "./Snake.js";

const field = document.querySelector('.main__field');	
let direction = 'right';

const creator = new Field(0, 0, field);
const food = new Food(findCell);
const snake = new Snake(findCell, direction);

creator.createField();

const cell = document.querySelector('.cell');

function findCell (a, b, color) {
    let xCoord = a;
    let yCoord = b;
    const thisCell = document.querySelector(`.cell[data-x="${xCoord}"][data-y="${yCoord}"]`);
    thisCell.style.backgroundColor = `${color}`;
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

function checkDeath () {
	if (snake.snakeUnit[0].x < 0 ||
		snake.snakeUnit[0].x > 9 ||
		snake.snakeUnit[0].y < 0 ||
		snake.snakeUnit[0].y > 9) {
			return true;
	}

	for (let i = 1; i < snake.snakeUnit.length; i++) {
		if (snake.snakeUnit[0].x === snake.snakeUnit[i].x && snake.snakeUnit[0].y === snake.snakeUnit[i].y) {
			return true;
	}
}
	return false;
}

food.draw();

setInterval(() => snake.move(), 1000);

if (snake.snakeUnit[0].x === food.foodUnit.x && snake.snakeUnit[0].y === food.foodUnit.y) {
	food.draw();
} else {
	snake.snakeUnit.pop();
}

if(checkDeath()) {
	console.log('You lost!');
}