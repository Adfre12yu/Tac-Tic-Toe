import Board from "./Board.js";

let board = new Board();
let gameWon = false;
let currentMark = "x";
const slots = Array.from(document.getElementsByClassName("slot"));
const boardHTML = document.getElementById("board");
const button = document.getElementById("button");

slots.forEach((slot) => {
    slot.addEventListener("click", () => {
        if (!gameWon && board.canAddMark(slot.getAttribute("row"), slot.getAttribute("column"))) {
            board.addMark(currentMark, slot.getAttribute("row"), slot.getAttribute("column"));
            currentMark == "x" ? (currentMark = "o") : (currentMark = "x");
            if (board.checkWin() || board.checkTie()) {
                gameWon = true;
                setTimeout(() => {
                    button.classList.add("show");
                    boardHTML.classList.add("blur");
                    slots.forEach((slot) => {
                        slot.classList.add("disabled");
                    });
                }, 1000);
            }
        }
    });
});

button.addEventListener("click", () => {
    board.resetBoard();
    gameWon = false;
    button.classList.remove("show");
    boardHTML.classList.remove("blur");
    slots.forEach((slot) => {
        slot.classList.remove("disabled");
    });
});
