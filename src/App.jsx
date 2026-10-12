import { useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Quiz from "./pages/Quiz.jsx";
import Result from "./pages/Result.jsx";
import "./App.css";

function QuizFlow() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const navigate = useNavigate();

  const clearProgress = () => {
    setQuestionIndex(0);
    setResponses({});
  };

  const begin = () => {
    clearProgress();
    navigate("/quiz");
  };

  const restart = () => {
    clearProgress();
    navigate("/quiz");
  };

  const goHome = () => {
    clearProgress();
    navigate("/");
  };

  return (
    <Routes>
      <Route path="/" element={<Home startQuiz={begin} />} />
      <Route path="/quiz" element={
        <Quiz
          current={questionIndex}
          setCurrent={setQuestionIndex}
          answers={responses}
          setAnswers={setResponses}
        />
      } />
      <Route path="/result" element={
        <Result retakeQuiz={restart} returnHome={goHome} />
      } />
    </Routes>
  );
}

export default function App() {
  return <BrowserRouter><QuizFlow /></BrowserRouter>;
}
