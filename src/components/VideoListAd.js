import React, { useEffect, useState } from 'react';
import Video from './Video'; // Adjust path as necessary
import './VideoListad.css';

function VideoListAd() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('https://server-tama.onrender.com/api/videos')
            .then(response => response.json())
            .then(data => setVideos(data))
            .catch(error => console.error('Error fetching videos:', error));
    }, []);

    const handleDelete = (id) => {
        fetch(`https://server-tama.onrender.com/api/videos/${id}`, { method: 'DELETE' })
            .then(response => {
                if (response.ok) {
                    setVideos(videos.filter(video => video.id !== id));
                } else {
                    console.error('Failed to delete the video with id:', id);
                }
            })
            .catch(error => console.error('Error deleting video:', error));
    };

    return (
        <div className="video-list">
            {videos.map(video => (
                <Video key={video.id} video={video} onDelete={handleDelete} />
            ))}
        </div>
    );
}

export default VideoListAd;




// // VideoListAd.js
// import './VideoListAd.css'; 

// import React, { useEffect, useState } from 'react';
// import Video from './Video';

// function VideoListAd() {
//     const [videos, setVideos] = useState([]);

//     useEffect(() => {
//         fetch('http://localhost:3001/api/videos')  // Update with your actual API URL
//             .then(response => response.json())
//             .then(data => setVideos(data))
//             .catch(error => console.error('Error fetching videos:', error));
//     }, []);

//     const handleDelete = (id) => {
//         fetch(`http://localhost:3001/api/videos/${id}`, { method: 'DELETE' })
//             .then(response => {
//                 if (response.ok) {
//                     // Remove the video from state if deletion was successful
//                     setVideos(videos.filter(video => video.id !== id));
//                 } else {
//                     // Handle any errors, such as video not found
//                     console.error('Failed to delete the video with id:', id);
//                 }
//             })
//             .catch(error => console.error('Error deleting video:', error));
//     };

//     return (
//         <div>
//             {videos.map(video => (
//                 <Video key={video.id} video={video} onDelete={handleDelete} />
//             ))}
//         </div>
//     );
// }

// export default VideoListAd;





// // VideoListAd.js

// import React, { useEffect, useState } from 'react';
// import Video from './Video';

// function VideoListAd({ isLoggedIn }) {
//     const [videos, setVideos] = useState([]);

//     useEffect(() => {
//         fetch('http://localhost:3001/api/videos')  // Update with your actual API URL
//             .then(response => response.json())
//             .then(data => setVideos(data))
//             .catch(error => console.error('Error fetching videos:', error));
//     }, []);

//     const handleDelete = (id) => {
//         fetch(`http://localhost:3001/api/videos/${id}`, { method: 'DELETE' })
//             .then(response => {
//                 if (response.ok) {
//                     // Remove the video from state if deletion was successful
//                     setVideos(videos.filter(video => video.id !== id));
//                 } else {
//                     // Handle any errors, such as video not found
//                     console.error('Failed to delete the video with id:', id);
//                 }
//             })
//             .catch(error => console.error('Error deleting video:', error));
//     };

//     return (
//         <div>
//             {videos.map(video => (
//                 <Video key={video.id} video={video} onDelete={handleDelete} isLoggedIn={isLoggedIn} />
//             ))}
//         </div>
//     );
// }

// export default VideoListAd;
