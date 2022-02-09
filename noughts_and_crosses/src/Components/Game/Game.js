import React, { useState } from "react";
import Board from "../Board/Board";
import calculateWinner from "../../Helper";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [XTurn, setXTurn] = useState(true);
  const winner = calculateWinner(board);
  const currentPlayer = XTurn ? "X" : "O";

  const handleSquareClick = (index) => {
    if (winner || board[index]) {
      return;
    }

    setBoard([
      ...board.slice(0, index),
      currentPlayer,
      ...board.slice(index + 1),
    ]);
    setXTurn(!XTurn);
  };

  return (
    <div>
      <Board squares={board} onSelectSquare={handleSquareClick} />
      <div className="info-wrapper">
        <h3>{winner ? "Winner:" + winner : "Next Player:" + currentPlayer}</h3>
      </div>
    </div>
  );
};

// return (
//     <>
//       <h1>React Tic Tac Toe - With Hooks</h1>
//       <Board squares={history[stepNumber]} onClick={handleClick} />
//       <div className="info-wrapper">
//         <div>
//           <h3>History</h3>
//           {renderMoves()}
//         </div>
//         <h3>{winner ? "Winner: " + winner : "Next Player: " + xO}</h3>
//       </div>
//     </>
//   );
// };

// export default Game;

// function Game() {
//   let B = [null, null, null, null, null, null, null, null, null];
//   const [board, setBoard] = useState(B);

//   const [xturn, setXturn] = useState(true);

//   function makeMove(index) {
//     if (board[index] === null) {
//       if (xturn === true) {
//         let newBoard = board.splice(index, 1, "X");
//         setBoard(newBoard);
//         setXturn(false);
//         // checkWinner();
//         console.log("x");
//       } else if (xturn === false) {
//         let newBoard = board.splice(index, 1, "O");
//         setBoard(newBoard);
//         setXturn(true);
//         // checkWinner();
//         console.log("o");
//       }
//     } else {
//       alert("choose another square");
//       console.log("choose another square");
//     }
//   }
// function checkWinner() {
//   for (let i = 0; i < board.length; i++) {
//     let topRow = board[0] + board[1] + board[2];
//     let topMiddle = board[3] + board[4] + board[5];
//     let topBottom = board[6] + board[7] + board[8];
//     let leftColumn = board[0] + board[3] + board[6];
//     let middleColumn = board[1] + board[4] + board[7];
//     let rightColumn = board[2] + board[5] + board[8];
//     let diagnal1 = board[2] + board[4] + board[6];
//     let diagnal2 = board[0] + board[4] + board[8];
//     if (board[i] === null) {
//       if (
//         (board[i] !== null && topRow === "XXX") ||
//         topMiddle === "XXX" ||
//         topMiddle === "XXX" ||
//         topBottom === "XXX" ||
//         leftColumn === "XXX" ||
//         middleColumn === "XXX" ||
//         rightColumn === "XXX" ||
//         diagnal1 === "XXX" ||
//         diagnal2 === "XXX"
//       ) {
//         alert("X Wins!");
//         console.log("X wins");
//       } else if (
//         (board[i] !== null && topRow === "OOO") ||
//         topMiddle === "OOO" ||
//         topMiddle === "OOO" ||
//         topBottom === "OOO" ||
//         leftColumn === "OOO" ||
//         middleColumn === "OOO" ||
//         rightColumn === "OOO" ||
//         diagnal1 === "OOO" ||
//         diagnal2 === "OOO"
//       ) {
//         alert("O Wins!");
//         console.log("O wins");
//       }
//     } else {
//       alert("DRAW");
//       console.log("draw");
//       setBoard(B);
//     }
//   }
// }

//   return (
//     <div>
//       <Board makeMove={makeMove} />
//     </div>
//   );
// }

export default Game;
