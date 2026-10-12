
import AnswerOption from "./AnswerOption";

function QuestionCard({
  question,
  questionNumber,
  selectedAnswer,
  onSelect
}) {
  return (
    <div className="question-card">
      <p className="question-number">
        Question {questionNumber}
      </p>

      <h2>{question.question}</h2>

      <div className="answer-list">
        {question.choices.map((choice) => (
          <AnswerOption
            key={choice}
            choice={choice}
            selected={selectedAnswer === choice}
            onClick={() => onSelect(choice)}
          />
        ))}
      </div>
    </div>
  );
}
export default QuestionCard;
