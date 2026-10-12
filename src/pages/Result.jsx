
import { useLocation } from "react-router-dom";
import ResultCard from "../components/ResultCard";
import questions from "../questions";

function Result({ retakeQuiz, returnHome }) {
  const location = useLocation();
  const answers = location.state?.answers || {};

  const correct = questions.filter(
    (question, index) =>
      answers[index] === question.answer
  ).length;

  const incorrect = questions.length - correct;
  const percentage = Math.round(
    (correct / questions.length) * 100
  );

  return (
    <div className="page-container result-page">
      <ResultCard
        total={questions.length}
        correct={correct}
        incorrect={incorrect}
        percentage={percentage}
      />

      <div className="result-actions">
        <button
          className="primary-button"
          onClick={retakeQuiz}
        >
          Retake Quiz
        </button>

        <button
          className="secondary-button"
          onClick={returnHome}
        >
          Return Home
        </button>
      </div>
    </div>
  );
}

export default Result;
