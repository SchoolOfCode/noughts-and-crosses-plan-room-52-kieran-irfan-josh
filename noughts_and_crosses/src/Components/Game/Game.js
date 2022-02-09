import React, { useState } from "react";

function Game() {
  let board = [null, null, null, null, null, null, null, null, null];
  const [board, setBoard] = useState(board);

  const [xturn, setXturn] = useState();

  function makeMove(index) {
    if (board[index] === null) {
      setBoard;
    }
  }

  return <div>Game</div>;
}

export default Game;
