class Food {

    constructor(findCell) {
        this.findCell = findCell;
        this.foodUnit = {};
    }

    draw() {
        let fieldWidth = 10;
        let fieldHeight = 10;
        this.foodUnit.x = Math.floor((Math.random() * fieldWidth) + 1);
        this.foodUnit.y = Math.floor((Math.random() * fieldHeight) + 1);
        this.findCell(this.foodUnit.x, this.foodUnit.y, 'red');
        return { x: this.foodUnit.x, y: this.foodUnit.y };
    }
}

export default Food;