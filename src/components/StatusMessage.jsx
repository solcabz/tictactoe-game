const StatusMessage = ({ winner, isXNext, squares }) => {
  //checking square if there is no more moves for draw or a winner
  const noMovesLeft = squares.every(squareValue => squareValue !== null);
  //provide message who's turn X or O
  const playerTurn = isXNext ? 'X' : 'O';

  //add statement player turn or status winner or a draw logic
  const renderStatusMessage = () => {
    if (winner) {
      return (
        <>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      );
    }
    if (!winner && noMovesLeft) {
      return (
        <>
          <span className="text-green">X</span> vs{' '}
          <span className="text-orange">O</span> Is a Draw
        </>
      );
    }
    if (!winner && !noMovesLeft) {
      return (
        <>
          Next player turn{' '}
          <span className={isXNext ? 'text-green' : 'text-orange'}>
            {playerTurn}
          </span>
        </>
      );
    }
  };

  return (
    <>
      <div className="status-message ">
        <h2>{renderStatusMessage()}</h2>
      </div>
    </>
  );
};

export default StatusMessage;
