import Food from "./Food.js";
class Snake {
    constructor(findCell, direction, foodCoordX, foodCoordY, endGame) {
        this.findCell = findCell;
        this.snakeUnit = [
            {x: 3, y: 5},
            {x: 2, y: 5}
        ];
        this.direction = direction;
        this.foodCoordX = foodCoordX;
        this.foodCoordY = foodCoordY;
        this.food = new Food(findCell);
        this.score = 0;
        this.scoreUnit = document.querySelector('.main__score_new');
        this.updatescore();
        this.endGame = endGame;
}

    updatescore() {
        this.scoreUnit.textContent = "Your score: " + this.score;
    }

    move () {
        let snakeHead = {x: this.snakeUnit[0].x, y: this.snakeUnit[0].y};
            if (this.direction === 'right') {
            snakeHead.x++;
        } else if (this.direction === 'left') {
            snakeHead.x--;
        } else if (this.direction === 'up') {
            snakeHead.y--;
        } else if (this.direction === 'down') {
            snakeHead.y++;
        }
        this.snakeUnit.unshift(snakeHead);
        this.findCell(snakeHead.x, snakeHead.y, 'yellow');

        if (snakeHead.x <= 0 ||
            snakeHead.x >= 11 ||
            snakeHead.y <= 0 ||
            snakeHead.y >= 11) {
                this.findCell(this.snakeUnit[0].x, this.snakeUnit[0].y, 'red');
                this.endGame();
            }

        if (snakeHead.x === this.foodCoordX && snakeHead.y === this.foodCoordY) {
            const newFoodCoordinates = this.food.draw();
            this.foodCoordX = newFoodCoordinates.x;
            this.foodCoordY = newFoodCoordinates.y;
            this.score += 1;
            this.updatescore();
        } else {
            this.findCell(this.snakeUnit[this.snakeUnit.length - 1].x, this.snakeUnit[this.snakeUnit.length - 1].y, '');
            this.snakeUnit.pop();
        }

        for (let i = 1; i < this.snakeUnit.length; i++) {
            this.findCell(this.snakeUnit[i].x, this.snakeUnit[i].y, '#80D91A');
        }

        for (let i = 1; i < this.snakeUnit.length; i++) {
            if (snakeHead.x === this.snakeUnit[i].x && snakeHead.y === this.snakeUnit[i].y) {
                this.findCell(this.snakeUnit[0].x, this.snakeUnit[0].y, 'red');
                this.endGame();
            }
        }
        for (let i = 0; i < this.snakeUnit.length; i++) {
            if (this.food.foodUnit.x === this.snakeUnit[i].x && this.food.foodUnit.y === this.snakeUnit[i].y) {
                this.findCell(this.snakeUnit[i].x, this.snakeUnit[i].y, 'yellow');
                const newFoodCoordinates = this.food.draw();
            this.foodCoordX = newFoodCoordinates.x;
            this.foodCoordY = newFoodCoordinates.y;Ы
            }
        }
    }
}

export default Snake;