import React from "react";
import Square from "../Square/Square";

const Board = ({ squares, onSelectSquare }) => (
  <div className="board">
    {squares.map((square, index) => (
      <Square
        key={index}
        value={square}
        onClick={() => onSelectSquare(index)}
      />
    ))}
  </div>
);

export default Board;

// function Board({ makeMove }) {
//   return (
//     <div>
//       <Square onClick={makeMove(0)} />
//       <Square onClick={makeMove(1)} />
//       <Square onClick={makeMove(2)} />
//       <Square onClick={makeMove(3)} />
//       <Square onClick={makeMove(4)} />
//       <Square onClick={makeMove(5)} />
//       <Square onClick={makeMove(6)} />
//       <Square onClick={makeMove(7)} />
//       <Square onClick={makeMove(8)} />
//     </div>
//   );
// }

// export default Board;
