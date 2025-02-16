import React, { useState } from 'react';

const VoiceInput = () => {
    const [text, setText] = useState('');
    const [voice, setVoice] = useState('default');

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleVoiceChange = (e) => {
        setVoice(e.target.value);
    };

    const handleGenerateVoice = () => {
        // Call the backend API to generate voice
        fetch('/generate-voice', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text, voice }),
        })
        .then(response => response.blob())
        .then(audioBlob => {
            const audioUrl = URL.createObjectURL(audioBlob);
            const audio = new Audio(audioUrl);
            audio.play();
        })
        .catch(error => {
            console.error('Error generating voice:', error);
        });
    };

    return (
        <div className="voice-input">
            <textarea
                value={text}
                onChange={handleTextChange}
                placeholder="Enter text here"
            />
            <select value={voice} onChange={handleVoiceChange}>
                <option value="default">Default Voice</option>
                <option value="premium">Premium Voice</option>
                {/* Add more voice options as needed */}
            </select>
            <button onClick={handleGenerateVoice}>Generate Voice</button>
        </div>
    );
};

export default VoiceInput;