import './styles.scss';
import { useState } from 'react';
import Board from './components/Board';
import StatusMessage from './components/StatusMessage';
import History from './components/History';
import { calculateWinner } from './winner';

const NEWGAME = [{ squares: Array(9).fill(null), isXNext: false }];

function App() {
  const [history, setHistory] = useState(NEWGAME);
  const [currentMove, setCurrentMove] = useState(0);
  const gamingBoard = history[currentMove];

  //calculates winner tru winner.js
  const { winner, winningSquare } = calculateWinner(gamingBoard.squares);

  const handleSquareClick = clickedPosition => {
    //condition if the square box has valued it stayed as its current state
    if (gamingBoard.squares[clickedPosition] || winner) {
      return;
    }

    //function if the square box is null it place the value of O or X vice versa
    setHistory(currentHistory => {
      const isTraversing = currentMove + 1 !== currentHistory.length;

      const lastGamingState = isTraversing
        ? currentHistory[currentMove]
        : history[history.length - 1];

      const nextSquareState = lastGamingState.squares.map(
        (squareValue, position) => {
          if (clickedPosition === position) {
            return lastGamingState.isXNext ? 'X' : 'O';
          }
          return squareValue;
        }
      );

      const base = isTraversing
        ? currentHistory.slice(0, currentHistory.indexOf(lastGamingState) + 1)
        : currentHistory;

      return base.concat({
        squares: nextSquareState,
        isXNext: !lastGamingState.isXNext,
      });
    });

    //function if the square box is null it place the value of O or X as its next move
    setCurrentMove(move => move + 1);
  };

  const moveTo = move => {
    setCurrentMove(move);
  };

  const onGameRestart = () => {
    setHistory(NEWGAME);
    setCurrentMove(0);
  };

  return (
    <>
      <div className="app">
        <StatusMessage winner={winner} gamingBoard={gamingBoard} />
        <Board
          squares={gamingBoard.squares}
          handleSquareClick={handleSquareClick}
          winningSquare={winningSquare}
        />
        <button type="button" className="btn-reset" onClick={onGameRestart}>
          {/* {`btn-reset ${winner ? 'active' : ''}`} */}
          Start New Game
        </button>
        <h2>Game History</h2>
        <History history={history} moveTo={moveTo} currentMove={currentMove} />
      </div>
    </>
  );
}

export default App;
