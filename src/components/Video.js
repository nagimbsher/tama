

// // Video.js
// import React from 'react';
// import './VideoListad.css';

// function Video({ video, onDelete }) {
//     const handleDelete = () => {
//         // Ensure onDelete is a function and call it with video.id
//         if (onDelete && typeof onDelete === 'function') {
//             onDelete(video.id)  // Call the onDelete function with the video ID
//             .then(response => {
//                 if (response.ok) {
//                     alert('Video deleted successfully!');  // Alert the user of success
//                 } else {
//                     alert('Failed to delete the video.');  // Alert the user if the response was not okay
//                 }
//             })
//             .catch(error => {
//                 console.error('Error deleting video:', error);
//                 alert('Failed to delete the video.');  // Alert the user of failure
//             });
//         } else {
//             console.error('onDelete is not a function');
//             alert('Failed to delete the video.');  // Alert the user of failure
//         }
//     };

//     return (
//         <div className="video-item">
//             <h2 className="video-title">{video.title}</h2>
//             <p className="video-description">{video.description}</p>
//             <button onClick={handleDelete}>Delete</button>
//         </div>
//     );
// }

// export default Video;




// Video.js
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
            {/* Delete button is always visible regardless of login status */}
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default Video;





// // Video.js

// import React from 'react';

// function Video({ video, onDelete, isLoggedIn }) {
//     const handleDelete = () => {
//         if (onDelete && typeof onDelete === 'function') {
//             onDelete(video.id);  // Call the onDelete function with the video ID
//         }
//     };

//     return (
//         <div>
//             <h2>{video.title}</h2>
//             <p>{video.description}</p>
//             {/* Show delete button only if logged in */}
//             {isLoggedIn && <button onClick={handleDelete}>Delete</button>}
//         </div>
//     );
// }

// export default Video;
