import React, { useState } from 'react';
import axios from 'axios';

function QuizForm() {
    const [startTimestamp, setStartTimestamp] = useState('');
    const [timeWindow, setTimeWindow] = useState(0);
    const [quizDuration, setQuizDuration] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Prepare the data to be sent
        const formData = {
            startTimestamp:startTimestamp,
            timeWindow: parseInt(timeWindow),
            quizDuration: parseInt(quizDuration),
            groupId: 4
        };

        // Make the Axios POST call
        axios.post('https://localhost:7089/api/Quiz', formData,{
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
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto' }}>
            <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Quiz Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="startTimestamp">Start Timestamp</label>
                    <input
                        type="datetime-local"
                        id="startTimestamp"
                        value={startTimestamp}
                        onChange={(e) => setStartTimestamp(e.target.value)}
                        required
                        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="timeWindow">Time Window (in minutes)</label>
                    <input
                        type="number"
                        id="timeWindow"
                        value={timeWindow}
                        onChange={(e) => setTimeWindow(e.target.value)}
                        required
                        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="quizDuration">Quiz Duration (in minutes)</label>
                    <input
                        type="number"
                        id="quizDuration"
                        value={quizDuration}
                        onChange={(e) => setQuizDuration(e.target.value)}
                        required
                        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
                    />
                </div>
                <div className="form-group" style={{ textAlign: 'center' }}>
                    <button type="submit" style={{ padding: '8px 16px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default QuizForm;
