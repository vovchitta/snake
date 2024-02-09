class Snake {
    constructor(findCell, direction) {
        this.findCell = findCell;
        this.snakeUnit = [
            {x: 3, y: 5},
            {x: 2, y: 5},
        ];
        this.direction = direction;
    }

    move() {
        let snakeHead = { x: this.snakeUnit[0].x , y: this.snakeUnit[0].y };
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
        }
    
}

export default Snake;