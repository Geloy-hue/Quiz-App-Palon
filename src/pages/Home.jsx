function Home({ startQuiz }) {
  return (
    <main className="home-page">
      <section className="home-card">
        <div className="brand-mark">P</div>
        <p className="eyebrow">LEARN SOMETHING NEW</p>
        <h1>Welcome to Palon</h1>
        <p className="intro-copy">
          A quick web development quiz to check what you know.
          Answer all 10 questions and see your score.
        </p>
        <div className="home-details">
          <span>10 questions</span><span>Multiple choice</span>
        </div>
        <button className="primary-button" onClick={startQuiz}>Start Quiz <span aria-hidden="true">→</span></button>
      </section>
    </main>
  );
}

export default Home;
