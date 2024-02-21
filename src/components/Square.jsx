//function for square on click and get the value from the board.jsx
const Square = ({ value, onClick }) => {
  return (
    <>
      <button type="button" className="square" onClick={onClick}>
        {value}
      </button>
    </>
  );
};

export default Square;
