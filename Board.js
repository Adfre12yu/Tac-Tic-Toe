export default class Board {
    constructor() {
        this.b = [
            [[], [], []],
            [[], [], []],
            [[], [], []],
        ];
        this.slots = Array.from(document.getElementsByClassName("slot"));
        this.boardHTML = [this.slots.slice(0, 3), this.slots.slice(3, 6), this.slots.slice(6, 9)];
    }

    addMark(mark, row, column) {
        this.b[row][column] = mark;
        let slot = this.boardHTML[row][column];
        mark == "x"
            ? (slot.innerHTML = `<i style="font-size: var(--x-font)" class="fa-solid fa-xmark"></i>`)
            : (slot.innerHTML = `<i class="fa-solid fa-o">`);
    }

    canAddMark(row, column) {
        return this.b[row][column] != "x" && this.b[row][column] != "o";
    }

    checkRowWin() {
        let isWin = false;
        this.b.forEach((row) => {
            if (row[0] == row[1] && row[1] == row[2]) {
                isWin = true;
            }
        });
        return isWin;
    }

    checkColumnWin() {
        let isWin = false;
        for (let col = 0; col < 3; col++) {
            if (this.b[0][col] == this.b[1][col] && this.b[1][col] == this.b[2][col]) {
                isWin = true;
            }
        }
        return isWin;
    }

    checkDiagonalWin() {
        let isWin = false;
        if (this.b[0][0] == this.b[1][1] && this.b[1][1] == this.b[2][2]) {
            isWin = true;
        }
        if (this.b[0][2] == this.b[1][1] && this.b[1][1] == this.b[2][0]) {
            isWin = true;
        }
        return isWin;
    }

    checkTie() {
        let filledSlots = 0;
        this.b.forEach((row) => {
            row.forEach((slot) => {
                if (slot == "x" || slot == "o") {
                    filledSlots++;
                }
            });
        });
        if (filledSlots == 9) {
            return true;
        }
    }

    checkWin() {
        if (this.checkRowWin() || this.checkColumnWin() || this.checkDiagonalWin()) {
            return true;
        }
    }

    resetBoard() {
        this.b = [
            [[], [], []],
            [[], [], []],
            [[], [], []],
        ];
        this.slots.forEach((slot) => {
            slot.innerHTML = "";
        });
    }
}
