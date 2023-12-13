import React, { useEffect, useState } from 'react';
import './VideoList.css';
function VideoList() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('https://server-tama.onrender.com/api/videos')
            .then(response => response.json())
            .then(data => setVideos(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const getYouTubeID = (url) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);

        return (match && match[2].length === 11) ? match[2] : null;
    };
    return (
        <>
            <ul className="video-list">
                {videos.map(video => (
                    <li key={video.id} className="video-item">
                        <div className="overlay">Watch Now</div>
                        <h2>{video.title}</h2>
                        <p>{video.description}</p>
                        <iframe
                            title={`video-${video.id}`}
                            src={`https://www.youtube.com/embed/${getYouTubeID(video.url)}`}
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default VideoList;
