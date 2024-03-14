class Field {

    constructor(x, y, field, findCell) {
        this.x = x;
        this.y = y;
        this.field = field;
        this.findCell = findCell;
    }

    createCell(x, y) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.dataset.x = y;
        cell.dataset.y = x;
        this.field.appendChild(cell);
    }

    createField() {
        for(let i = 0; i < 12; i++) {
        for(let j = 0; j < 12; j++) {
        this.createCell(i, j);
        }
    }
}

    border(color) {
        for (let i = 0; i < 12; i++) {
            this.findCell(i, 0, `${color}`, 'none');
    };
        for (let i = 0; i < 12; i++) {
            this.findCell(0, i, `${color}`, 'none');
    };
        for (let i = 0; i < 12; i++) {
            this.findCell(i, 11, `${color}`, 'none');
};
        for (let i = 0; i < 12; i++) {
            this.findCell(11, i, `${color}`, 'none');
};
}

}

export default Field;