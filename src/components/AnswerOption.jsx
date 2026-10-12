
function AnswerOption({ choice, selected, onClick }) {
  return (
    <button
      className={`answer-option ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      {choice}
    </button>
  );
}

export default AnswerOption;
