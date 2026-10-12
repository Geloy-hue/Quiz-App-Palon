import { useNavigate } from "react-router-dom";
import QuizHeader from "../components/QuizHeader.jsx";
import QuestionCard from "../components/QuestionCard.jsx";
import ProgressBar from "../components/ProgressBar.jsx";
import questions from "../questions.js";

function Quiz({ current, setCurrent, answers, setAnswers }) {
  const navigate = useNavigate();
  const activeQuestion = questions[current];

  const chooseAnswer = (choice) => {
    setAnswers((saved) => ({ ...saved, [current]: choice }));
  };

  const moveForward = () => {
    if (answers[current] === undefined) {
      window.alert("Choose an answer before continuing.");
      return;
    }

    setCurrent((position) => Math.min(position + 1, questions.length - 1));
  };

  const finish = () => {
    if (answers[current] === undefined) {
      window.alert("Choose an answer before finishing.");
      return;
    }
    navigate("/result", { state: { answers } });
  };

  return (
    <main className="page-container">
      <QuizHeader current={current + 1} total={questions.length} />
      <ProgressBar current={current + 1} total={questions.length} />
      <QuestionCard
        question={activeQuestion}
        questionNumber={current + 1}
        selectedAnswer={answers[current]}
        onSelect={chooseAnswer}
      />
      <nav className="quiz-navigation" aria-label="Quiz navigation">
        <button className="secondary-button" disabled={current === 0}
          onClick={() => setCurrent((position) => Math.max(position - 1, 0))}>
          Back
        </button>
        {current === questions.length - 1 ? (
          <button className="primary-button" onClick={finish}>See Results <span aria-hidden="true">→</span></button>
        ) : (
          <button className="primary-button" onClick={moveForward}>Next <span aria-hidden="true">→</span></button>
        )}
      </nav>
    </main>
  );
}

export default Quiz;
