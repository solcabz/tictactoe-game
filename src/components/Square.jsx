//function for square on click and get the value from the board.jsx
const Square = ({ value, onClick, isWinningSquare }) => {
  const colorClassName = value === 'X' ? 'text-green' : 'text-orange';
  const winningAnimation = isWinningSquare ? 'winning' : '';
  return (
    <>
      <button
        type="button"
        className={`square ${colorClassName} ${winningAnimation}`}
        onClick={onClick}
      >
        {value}
      </button>
    </>
  );
};

export default Square;
