class Food {

    constructor(findCell) {
        this.findCell = findCell;
    }

    draw() {
        let fieldWidth = 10;
        let fieldHeight = 10;
        let randomX = Math.floor(Math.random() * fieldWidth);
        let randomY = Math.floor(Math.random() * fieldHeight);
        this.findCell(randomX, randomY, 'red');
    }

}

export default Food;