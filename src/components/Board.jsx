import Square from './Square';
import { useState } from 'react';

const Board = () => {
  //state where the square box is value empty
  const [squares, setSquares] = useState(Array(9).fill(null));

  const [isXNext, setXNext] = useState(false);

  const handleSquareClick = clickPosition => {
    //condition if the square box has valued it stayed as its current state
    if (squares[clickPosition]) {
      return;
    }

    //function if the square box is null it place the value of O or X vice versa
    setSquares(currentSquares => {
      return currentSquares.map((squareValue, position) => {
        if (clickPosition === position) {
          return isXNext ? 'X' : 'O';
        }
        return squareValue;
      });
    });

    //function if the square box is null it place the value of O or X as its next move
    setXNext(currentXNext => !currentXNext);
  };

  //function where we render the square box on its position to the dom
  const renderSquare = position => {
    return (
      <Square
        value={squares[position]}
        onClick={() => handleSquareClick(position)}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
