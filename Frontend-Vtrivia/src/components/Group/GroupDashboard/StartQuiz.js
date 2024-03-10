import React, { useState } from 'react';
import { useLocation } from "react-router-dom";

const StartQuiz = () => {
  const location = useLocation();
  const questions = location.state?.props;
  const [selectedOptions, setSelectedOptions] = useState({});
  
  const handleOptionChange = (questionId, optionId, optionText) => {
    setSelectedOptions({ ...selectedOptions, [questionId]: { optionId, optionText } });
  };

  const handleSubmit = () => {
    console.log(selectedOptions);
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
    <div style={{ maxWidth: '100%',height:'100vh', margin: '0 auto', padding: '20px', backgroundColor: '#93c5fd', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <div style={{
            margin:'100px'
        }}>
      {questions.map((question, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <h3>{question.statement}</h3>
          <ul style={{ listStyleType: 'none', padding: '0' }}>
            {['option1', 'option2', 'option3', 'option4'].map((optionKey, i) => (
              <li key={i} style={{ marginBottom: '10px' }}>
                <input
                  type="radio"
                  id={`question-${question.id}-option-${i+1}`}
                  name={`question-${question.id}`}
                  value={question[optionKey]}
                  checked={selectedOptions[question.id] && selectedOptions[question.id].optionId === i+1}
                  onChange={() => handleOptionChange(question.id, i+1, question[optionKey])}
                />
                <label htmlFor={`question-${question.id}-option-${i+1}`}>{question[optionKey]}</label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }} onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default StartQuiz;
