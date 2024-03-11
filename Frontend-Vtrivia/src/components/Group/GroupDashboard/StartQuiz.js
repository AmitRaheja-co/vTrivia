import React, { useState, useEffect, useRef  } from 'react';
import { useLocation } from 'react-router-dom';
import "./Style.css";
import logo from "../../../assets/QUIZ TIME.gif";
const StartQuiz = () => {
  const location = useLocation();
  const questions = location.state?.props;
  const [selectedOptions, setSelectedOptions] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleOptionChange = (questionId, optionId, optionText) => {
    setSelectedOptions({ ...selectedOptions, [questionId]: { optionId, optionText } });
  };
  
    const [parentHeight, setParentHeight] = useState('100%');
    const childRef = useRef(null);

    useEffect(() => {
        const childHeight = childRef.current.clientHeight;
        const windowHeight = window.innerHeight;

        if (childHeight < windowHeight) {
            setParentHeight('100vh'); // Child is smaller, set parent height to viewport height
        } else {
            setParentHeight('100%'); // Child is larger, set parent height to 100% of its container
        }
    }, []);

  const handleSubmit = () => {
    setSubmitted(true);
    let correctAnswers = 0;
    questions.forEach((question) => {
      const selectedOption = selectedOptions[question.id];
      if (selectedOption && question.answer.trim() === selectedOption.optionText.trim()) {
        correctAnswers++;
      }
    });

    const totalQuestions = questions.length;
    const message = `You answered ${correctAnswers} out of ${totalQuestions} questions correctly.`;
          alert(message);
    
  };

  return (
    <div style={{
      background:'linear-gradient(to bottom, #4338ca, #38bdf8)',
      height: parentHeight
    }}>
      <div className="max-w-screen-xl mx-auto  bg-blue-400 p-8 rounded-lg shadow-md" ref={childRef}>
        <div className="space-y-8" >     
          <img src={logo}
            style={{ 
              position:'relative',
              left:'37%',        
              width:'300px',
              height:'150px'
            }}
          />
          {questions.map((question, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold py-4 px-6">{question.statement}</h3>
              <ul className="list-none p-0">
                {['option1', 'option2', 'option3', 'option4'].map((optionKey, i) => (
                  <li key={i} className="mb-4">
                    <label htmlFor={`question-${question.id}-option-${i + 1}`} className="option-label">
                      <input
                        type="radio"
                        id={`question-${question.id}-option-${i + 1}`}
                        name={`question-${question.id}`}
                        value={question[optionKey]}
                        checked={selectedOptions[question.id] && selectedOptions[question.id].optionId === i + 1}
                        onChange={() => handleOptionChange(question.id, i + 1, question[optionKey])}
                        className="mr-2"
                      />
                      <div
                        className={`option-tab ${selectedOptions[question.id] && selectedOptions[question.id].optionId === i + 1 ? 'selected' : ''} ${submitted && selectedOptions[question.id] && selectedOptions[question.id].optionId === i + 1 && question.answer.trim() !== question[optionKey].trim() ? 'wrong-answer' : ''} ${submitted && selectedOptions[question.id] && selectedOptions[question.id].optionId === i + 1 && question.answer.trim() === question[optionKey].trim() ? 'correct-answer' : ''}`}
                      >
                        {question[optionKey]}
                      </div>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartQuiz;
