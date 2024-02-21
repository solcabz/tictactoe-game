import './styles.scss';
import { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './winner';

function App() {
  //state where the square box is value empty
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setXNext] = useState(false);

  //calculates winner tru winner.js
  const winner = calculateWinner(squares);

  //provide message who's turn X or O
  const playerTurn = isXNext ? 'X' : 'O';

  const statusMessage = winner
    ? `Winner is ${winner}`
    : `Next Player is ${playerTurn}`;

  const handleSquareClick = clickPosition => {
    //condition if the square box has valued it stayed as its current state
    if (squares[clickPosition] || winner) {
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

  return (
    <>
      <div className="app">
        <h2>{statusMessage} </h2>
        <Board squares={squares} handleSquareClick={handleSquareClick} />
      </div>
    </>
  );
}

export default App;
