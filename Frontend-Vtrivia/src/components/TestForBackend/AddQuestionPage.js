import React, { useState } from 'react';

const AddQuestionPage = () => {
  const [questions, setQuestions] = useState([
    { problemStatement: '', options: ['', '', '', ''], answer: '' },
  ]);

  const addQuestion = () => {
    setQuestions([...questions, { problemStatement: '', options: ['', '', '', ''], answer: '' }]);
  };

  const handleInputChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    if (field === 'options') {
      updatedQuestions[index][field][value.target.dataset.index] = value.target.value;
    } else {
      updatedQuestions[index][field] = value.target.value;
    }
    setQuestions(updatedQuestions);
  };

  const handleSubmit = () => {
    // Submit logic here
    console.log('Questions:', questions);
  };

  return (
    <div style={{ backgroundColor: '#ADD8E6', padding: '20px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {questions.map((question, index) => (
        <div key={index} style={{ marginBottom: '30px', padding: '20px', backgroundColor: '#fff', borderRadius: '5px' }}>
          <h3>Question {index + 1}</h3>
          <div style={{ marginBottom: '20px' }}>
            <label>
              Problem Statement:
              <br />
              <input
                type="text"
                value={question.problemStatement}
                onChange={(e) => handleInputChange(index, 'problemStatement', e)}
                style={{ padding: '5px', width: '80%' }}
              />
            </label>
          </div>
          <div>
            {question.options.map((option, optionIndex) => (
              <label key={optionIndex} style={{ display: 'block', marginBottom: '10px' }}>
                Option {optionIndex + 1}:
                <input
                  type="text"
                  data-index={optionIndex}
                  value={option}
                  onChange={(e) => handleInputChange(index, 'options', e)}
                  style={{ marginLeft: '10px', padding: '5px', width: '80%', borderBottom: '1px solid #000' }}
                />
              </label>
            ))}
          </div>
          <label>
            Answer:
            <input
              type="text"
              value={question.answer}
              onChange={(e) => handleInputChange(index, 'answer', e)}
              style={{ marginTop: '10px', padding: '5px', width: '80%' }}
            />
          </label>
          <br />
        </div>
      ))}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <button onClick={addQuestion} style={{ padding: '10px', backgroundColor: '#4169E1', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '5px', marginRight: '10px' }}>Add Question</button>
        <button onClick={handleSubmit} style={{ padding: '10px', backgroundColor: '#4169E1', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '5px' }}>Submit</button>
      </div>
    </div>
  );
};

export default AddQuestionPage;
