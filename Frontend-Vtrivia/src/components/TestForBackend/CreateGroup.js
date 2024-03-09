import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

function CreateGroupPopup({ onClose }) {
    const [groupTitle, setGroupTitle] = useState('');
    const [groupDescription, setGroupDescription] = useState('');
    const jwt = localStorage.getItem("jwt");
    console.log("DONE");
    console.log(jwt);
    const handleSubmit = (e) => {
        e.preventDefault();

        // Dummy data for post request
        const postData = {
            name: groupTitle,
            description: groupDescription
        };

        // Dummy Axios post request
        axios.post('https://localhost:7089/Group', postData,
        {
            headers: {
              "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`
            },
          }
        
        )
            .then(response => {
                console.log('Post request response:', response.data);
                // Close the popup
                onClose();
            })
            .catch(error => {
                console.error('Post request error:', error);
            });
    };

    return (
        <div className="popup-container" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className="popup" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                <h2>Create Group</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="groupTitle">Group Title</label>
                        <input
                            type="text"
                            id="groupTitle"
                            value={groupTitle}
                            onChange={(e) => setGroupTitle(e.target.value)}
                            required
                            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '3px' }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="groupDescription">Group Description</label>
                        <textarea
                            id="groupDescription"
                            value={groupDescription}
                            onChange={(e) => setGroupDescription(e.target.value)}
                            required
                            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '3px' }}
                        ></textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit" style={{ padding: '8px 16px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Create</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

function CreateGroupPage() {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className="App">
            <h1>My App</h1>
            <button onClick={togglePopup} style={{ padding: '8px 16px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>Create Group</button>
            {showPopup && <CreateGroupPopup onClose={togglePopup} />}
        </div>
    );
}

export default CreateGroupPage;
