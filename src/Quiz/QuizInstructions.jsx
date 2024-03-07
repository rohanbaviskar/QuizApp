import React, { useState } from 'react';
import './edit.css';
import { Helmet } from 'react-helmet';
const QuizInstructions = () => {
  <Helmet><title>Quiz Instruction - Quiz App</title></Helmet>
  const [quizData] = useState([
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      answer: 'Paris',
    },
    {
      question: 'What is the largest planet in our solar system?',
      options: ['Mars', 'Saturn', 'Jupiter', 'Neptune'],
      answer: 'Jupiter',
    },
    {
      question: 'What is the chemical symbol for gold?',
      options: ['Au', 'Ag', 'Cu', 'Fe'],
      answer: 'Au',
    },
    {
      question: 'Who painted the Mona Lisa?',
      options: [
        'Pablo Picasso',
        'Vincent van Gogh',
        'Leonardo da Vinci',
        'Michelangelo',
      ],
      answer: 'Leonardo da Vinci',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Venus', 'Mercury', 'Uranus'],
      answer: 'Mars',
    },
    {
      question: 'What is the largest species of shark?',
      options: [
        'Great White Shark',
        'Whale Shark',
        'Tiger Shark',
        'Hammerhead Shark',
      ],
      answer: 'Whale Shark',
    },
    {
      question: 'Which animal is known as the King of the Jungle?',
      options: ['Lion', 'Tiger', 'Elephant', 'Giraffe'],
      answer: 'Lion',
    },
    {
      question: 'Who is credited with inventing the World Wide Web?',
      options: [
        'Bill Gates',
        'Tim Berners-Lee',
        'Steve Jobs',
        'Mark Zuckerberg',
      ],
      answer: 'Tim Berners-Lee',
    },
    {
      question: 'What is the largest mammal in the world?',
      options: ['Blue Whale', 'Elephant', 'Giraffe', 'Hippopotamus'],
      answer: 'Blue Whale',
    },
    {
      question: 'Which country is the largest by land area?',
      options: ['Russia', 'Canada', 'China', 'United States'],
      answer: 'Russia',
    },
    {
      question: 'Who wrote "To Kill a Mockingbird"?',
      options: ['Harper Lee', 'Ernest Hemingway', 'J.K. Rowling', 'Mark Twain'],
      answer: 'Harper Lee',
    },
    {
      question: 'What is the chemical symbol for water?',
      options: ['H2O', 'CO2', 'NaCl', 'CH4'],
      answer: 'H2O',
    },
    // Other questions...
  ]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [disableOptions, setDisableOptions] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSubmission = () => {
    if (!selectedAnswer) {
      return; // Don't submit if no answer is selected
    }

    const answer = selectedAnswer;
    if (answer === quizData[currentQuestion].answer) {
      setScore(score + 1);
    } else {
      setIncorrectAnswers([
        ...incorrectAnswers,
        {
          question: quizData[currentQuestion].question,
          incorrectAnswer: answer,
          correctAnswer: quizData[currentQuestion].answer,
        }
      ]);
    }

    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setDisableOptions(false); // Reset disableOptions to false for the next question
    } else {
      setQuizCompleted(true);
    }
  };

  const handleOptionSelection = (option) => {
    if (disableOptions) {
      return; // Don't allow selection if options are disabled
    }

    setSelectedAnswer(option);
  };

  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="container">
      <h1>Hello to play the game</h1>
      {currentQuestion < quizData.length && (
        <div>
          <div className="question">{quizData[currentQuestion].question}</div>
          <div className="options">
            {quizData[currentQuestion].options.map((option, index) => (
              <label key={index} className="option">
                <input
                  type="radio"
                  name="quiz"
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={() => handleOptionSelection(option)}
                  disabled={disableOptions}
                />
                {option}
              </label>
            ))}
          </div>
          {selectedAnswer && (
            <button className="button" onClick={handleAnswerSubmission}>
              {currentQuestion + 1 === quizData.length ? 'Submit' : 'Next Question'}
            </button>
          )}
        </div>
      )}
      {quizCompleted && (
        <div>
          <p>You scored {score} out of {quizData.length}!</p>
          <button className="button" onClick={handleRetry}>
            Retry
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizInstructions;