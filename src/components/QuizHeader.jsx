function QuizHeader({ current, total }) {
  return (
    <header className="quiz-header">
      <div><p className="eyebrow">PALON QUIZ</p><h1>Web Development</h1></div>
      <div className="question-counter"><strong>{String(current).padStart(2, "0")}</strong><span> / {String(total).padStart(2, "0")}</span></div>
    </header>
  );
}
export default QuizHeader;
