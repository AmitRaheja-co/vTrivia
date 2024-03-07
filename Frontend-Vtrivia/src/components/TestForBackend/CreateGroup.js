import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

function CreateGroupPopup({ onClose }) {
    const [groupTitle, setGroupTitle] = useState('');
    const [groupDescription, setGroupDescription] = useState('');

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
              Authorization: "Bearer CfDJ8AH6pGLB7GxPkY-2gNTRT5thhKU2lafdMdncHQh1reAdvZoJThknqjmXvosYEW5xF3Dy1T3fGCiyRcdh7OLTLKpiLggX5S30xjC0VGQFkTKYU7hGgeFTRy_3E4QnYO5cFs89q2ilkBw8SNCQ9aCdMfcfROVL7ULHc4XrmRJVqUgByIu8Ysa4Ed3FR0y_bfLaZ5lJINLF9xhd6oSBRhezj2w_ZMK7Hv45hADtdwNJrYIpYrcOdkLRFhUpQXY8cpjg8rzgIkdYmZ0iflRwaEQxStCCdpr1zYBo9SJNnVldr8SA2j1u_ohX6bcIUDrEnzXxUnzboOd-uQBhNwij86GBOpVyx0rb7ondfgA6JrvYtTsNkLFetXX0WCLYEaCtZ1D91isKR-heq8h-rZ95-BA_BYnYg6IQcDZnftzIwp1jjGLhMiipkV_Um5KSi6yQKejJw_UGzcpoShVuvpZ3iir187kHoVGZTlQe_kQqcmB7_uKWTM_yhERWOa_my2PZv3e6bRwIIN1KtIAVLGy-VpT6F4ZILXmYCElFGz8uqJbEddOToNLCz_SLWYsSmsUGFoBYMHoGDlptiplNPo6_k7WLY0srTsfWsRE06VxRixpIpSKyM5Ml0bJrZu-qVEIg4tOu06T1adNb1kXK6Kxrob_BNqmXmLSzXlGWIKbIowmdXvOaOcRJVvinqvfK7OvJFWL7gg"
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
