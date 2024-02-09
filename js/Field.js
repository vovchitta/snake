class Field {

    constructor(x, y, field) {
        this.x = x;
        this.y = y;
        this.field = field;
    }

    createCell(x, y) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.dataset.x = y;
        cell.dataset.y = x;
        this.field.appendChild(cell);
    }

    createField() {
        for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 10; j++) {
        this.createCell(i, j);
        }
    }
}

}

export default Field;