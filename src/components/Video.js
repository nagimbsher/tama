
import './VideoListad.css';
import React from 'react';

function Video({ video, onDelete }) {
    const handleDelete = () => {
        if (onDelete && typeof onDelete === 'function') {
            onDelete(video.id);  // Call the onDelete function with the video ID
        }
    };

    return (
        <div>
            <h2>{video.title}</h2>
            <p>{video.description}</p>
        
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default Video;


