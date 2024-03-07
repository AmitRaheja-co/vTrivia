import React, { useState } from 'react';
import axios from 'axios';

function CreateQue() {
    const [problemStatement, setProblemStatement] = useState('');
    const [options, setOptions] = useState(['', '', '', '']);
    const [answer, setAnswer] = useState('');

    const handleOptionChange = (index, value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission (e.g., send data to backend)
        axios.post('https://localhost:7089/api/Quiz', {}, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(response => {
                console.log('POST request successful:', response.data);
                // Add any additional logic after successful submission
            })
            .catch(error => {
                console.error('Error submitting form:', error);
                // Handle errors appropriately
            });
        console.log('Problem Statement:', problemStatement);
        console.log('Options:', options);
        console.log('Answer:', answer);
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: 'auto' }}>
            <div>
                <label htmlFor="problemStatement">Problem Statement:</label>
                <input
                    type="text"
                    id="problemStatement"
                    value={problemStatement}
                    onChange={(e) => setProblemStatement(e.target.value)}
                    style={{ width: '100%', padding: '5px', marginBottom: '10px', border: '1px solid blue' }}
                    className="input"
                    required
                />
            </div>
            <div>
                <label>Options:</label>
                {options.map((option, index) => (
                    <input
                        key={index}
                        type="text"
                        value={option}
                        onChange={(e) => handleOptionChange(index, e.target.value)}
                        style={{ width: '100%', padding: '5px', marginBottom: '5px', border: '1px solid #ccc' }}
                        className="input"
                        required
                    />
                ))}
            </div>
            <div>
                <label htmlFor="answer">Answer:</label>
                <input
                    type="text"
                    id="answer"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    style={{ width: '100%', padding: '5px', marginBottom: '10px', border: '1px solid #ccc' }}
                    className="input"
                    required
                />
            </div>
            <button type="submit" style={{ padding: '5px 10px', backgroundColor: 'blue', color: 'white', border: 'none', cursor: 'pointer' }}>Submit</button>
        </form>
    );
}

export default CreateQue;
