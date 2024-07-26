import { useState } from "react";


const Quiz = () => {
  const questions = [
    { text: "Как вас зовут?" },
    { text: "Сколько вам лет?" },
    { text: "Где вы живете?" },
  ];
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (value) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setSubmitted(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h1>Викторина</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              {questions[currentQuestionIndex].text}
              <input
                type="text"
                value={answers[currentQuestionIndex]}
                onChange={(e) => handleChange(e.target.value)}
              />
            </label>
          </div>
          <button type="button" onClick={handleNext}>
            {currentQuestionIndex < questions.length - 1
              ? "Далее"
              : "Отправить"}
          </button>
        </form>
      ) : (
        <div>
          <h2>Результаты:</h2>
          <div>
            {answers.map((answer, index) => (
              <p key={index}>
                {questions[index].text}: {answer}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};


export default Quiz;
