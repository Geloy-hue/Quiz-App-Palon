function ResultCard({ total, correct, incorrect, percentage }) {
  let message = "Keep practicing. You are making progress.";
  if (percentage >= 80) message = "Great work. You know these topics well.";
  else if (percentage >= 50) message = "Good effort. Review a few topics and try again.";

  return (
    <section className="result-card">
      <div className="result-icon">✓</div>
      <p className="eyebrow">QUIZ SUMMARY</p>
      <h2>You're all done!</h2>
      <p className="result-message">{message}</p>
      <div className="score-number">{percentage}<span>%</span></div>
      <div className="score-details">
        <div><span>Total questions</span><strong>{total}</strong></div>
        <div><span>Correct answers</span><strong>{correct}</strong></div>
        <div><span>Incorrect answers</span><strong>{incorrect}</strong></div>
      </div>
      <p className="final-score">Final score: {correct} out of {total}</p>
    </section>
  );
}
export default ResultCard;
