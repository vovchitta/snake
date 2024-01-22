class Snake {
    constructor(changeCellColor) {
        this.changeCellColor = changeCellColor;
        this.snake = [];
        this.direction = 'right';
    }

    draw(x, y) {
        this.changeCellColor(x, y, 'green');
    }

    startPosition() {
        this.changeCellColor(4, 3, 'green');
        this.changeCellColor(4, 4, 'green'); 
        this.snake = [
            {x: 4, y: 3},
            {x: 4, y: 4},
        ]
    }

    move() {
        let snakeHead = { x: this.snake[0].x, y: this.snake[0].y };

        if (this.direction === 'right') {
            snakeHead.y++;
        } else if (this.direction === 'left') {
            snakeHead.y--;
        } else if (this.direction === 'up') {
            snakeHead.x--;
        } else if (this.direction === 'down') {
            snakeHead.x++;
        }

        this.snake.unshift(snakeHead);
    }
}

export default Snake;
