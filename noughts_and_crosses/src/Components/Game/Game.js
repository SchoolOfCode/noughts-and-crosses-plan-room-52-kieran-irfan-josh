import React, { useState } from "react";

function Game() {
  let board = [null, null, null, null, null, null, null, null, null];
  const [board, setBoard] = useState(board);

  const [xturn, setXturn] = useState(true);

  function makeMove(index) {
    if (board[index] === null) {
      if (xturn === true) {
        let newBoard = board.splice(index, 1, "X");
        setBoard(newBoard);
        setXturn(false);
      } else if (xturn === false) {
        let newBoard = board.splice(index, 1, "O");
        setBoard(newBoard);
        setXturn(true);
      }
    } else {
      alert("choose another square");
      console.log("choose another square");
    }
  }
  function checkWinner(index) {}

  return <div>Game</div>;
}

export default Game;
