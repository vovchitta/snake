class Food {

    constructor(findCell) {
        this.findCell = findCell;
        this.foodUnit = {x: '', y: ''};
    }

    draw() {
        let fieldWidth = 10;
        let fieldHeight = 10;
        this.foodUnit.x = Math.floor(Math.random() * fieldWidth);
        this.foodUnit.y = Math.floor(Math.random() * fieldHeight);
        this.findCell(this.foodUnit.x, this.foodUnit.y, 'red');
    }

}

export default Food;