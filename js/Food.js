class Food {
    constructor(randomX, randomY, changeCellColor) {
this.randomX = randomX;
this.randomY = randomY;
this.changeCellColor = changeCellColor;
    }

draw() {
    this.changeCellColor(this.randomX, this.randomY, 'red');
}

};

export default Food;