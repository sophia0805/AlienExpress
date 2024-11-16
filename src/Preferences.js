import './Preferences.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CropPreference() {
    const [text, setText] = useState('Enter your crops');

    const handleClick = () => {
        setText('');
    };

    const handleChange = (e) => {
        const newText = e.target.value;
        setText(newText); 
    };

    return (
        <div className="preferences flex">
            <p className="textBold">What crops are you growing?</p>
            <textarea
                className="input cursor"
                value={text}
                onClick={handleClick}
                onChange={handleChange}
            />
            {text.toLowerCase() === "corn" && (
                <table className="table padding">
                    <thead>
                        <tr>
                            <th>Crop</th>
                            <th>Ideal soil moisture</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Corn</td>
                            <td>0.5</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    );
}

function Preferences() {
    const navigate = useNavigate();

    const handlePrevious = () => {
        navigate('/map');
    };

    return (
        <div className="content">
            <div className="top elementContainer">
                <p className="instruction textSmall">Step 2: Set your preferences</p>
            </div>
            <CropPreference />
            <div className="bottom elementContainer">
                <button onClick={handlePrevious} className="previous textSmall cursor">Previous</button>
                <button className="next textSmall cursor">Next</button>
            </div>
        </div>
    );
}

export default Preferences;