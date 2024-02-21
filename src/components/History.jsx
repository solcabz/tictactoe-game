//function for square on click and get the value from the board.jsx
const History = ({ history, moveTo, currentMove }) => {
  return (
    <>
      <div className="history-wrapper">
        <ul className="history">
          {history.map((_, index) => (
            <li key={index}>
              <button
                type="button"
                style={{
                  fontWeight: currentMove === index ? 'bold' : 'normal',
                }}
                className={`btn-move ${currentMove === index ? 'active' : ''}`}
                onClick={() => moveTo(index)}
              >
                {index === 0 ? 'Click to start Game' : `Go to Move #${index}`}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default History;
