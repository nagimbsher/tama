import React, { useState } from 'react';
import './AddVideoForm.css';
function AddVideoForm() {
    const [videoData, setVideoData] = useState({
        title: '',
        url: '',
        description: ''
    });

    const handleChange = (e) => {
        setVideoData({ ...videoData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation or more advanced validation can go here
        fetch('https://server-tama.onrender.com/api/videos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(videoData),
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to add video. Status: ' + response.status);
            }
        })
        .then(data => {
            console.log('Success:', data);
            alert('Video added successfully!'); 
            setVideoData({ title: '', url: '', description: '' }); 
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Failed to add the video.'); 
        });
    };

    return (
        <form onSubmit={handleSubmit} className="add-video-form">
            <input
                className="input-title"
                name="title"
                value={videoData.title}
                onChange={handleChange}
                placeholder="Title"
                required // As a simple validation step
            />
            <input
                className="input-url"
                name="url"
                value={videoData.url}
                onChange={handleChange}
                placeholder="URL"
                required
            />
            <textarea
                className="textarea-description"
                name="description"
                value={videoData.description}
                onChange={handleChange}
                placeholder="Description"
                required
            />
            <button type="submit" className="submit-button">Add Video</button>
        </form>
    );
}

export default AddVideoForm;




// import React, { useState } from 'react';

// function AddVideoForm() {
//     const [videoData, setVideoData] = useState({
//         title: '',
//         url: '',
//         description: ''
//     });

//     const handleChange = (e) => {
//         setVideoData({ ...videoData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         fetch('http://localhost:3001/api/videos', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(videoData),
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log('Success:', data);
//             alert('Video added successfully!'); // Alert the user of success
//             // Clear form or provide further user feedback
//             setVideoData({ title: '', url: '', description: '' }); // Reset form fields
//         })
//         .catch((error) => {
//             console.error('Error:', error);
//             alert('Failed to add the video.'); // Alert the user of failure
//         });
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 name="title"
//                 value={videoData.title}
//                 onChange={handleChange}
//                 placeholder="Title"
//             />
//             <input
//                 name="url"
//                 value={videoData.url}
//                 onChange={handleChange}
//                 placeholder="URL"
//             />
//             <textarea
//                 name="description"
//                 value={videoData.description}
//                 onChange={handleChange}
//                 placeholder="Description"
//             />
//             <button type="submit">Add Video</button>
//         </form>
//     );
// }

// export default AddVideoForm;





// import React, { useState } from 'react';

// function AddVideoForm() {
//     const [videoData, setVideoData] = useState({
//         title: '',
//         url: '',
//         description: ''
//     });

//     const handleChange = (e) => {
//         setVideoData({ ...videoData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         fetch('http://localhost:3001/api/videos', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(videoData),
//         })
//         .then(response => response.json())
//         .then(data => {
//             console.log('Success:', data);
//             // Clear form or provide further user feedback
//         })
//         .catch((error) => {
//             console.error('Error:', error);
//         });
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 name="title"
//                 value={videoData.title}
//                 onChange={handleChange}
//                 placeholder="Title"
//             />
//             <input
//                 name="url"
//                 value={videoData.url}
//                 onChange={handleChange}
//                 placeholder="URL"
//             />
//             <textarea
//                 name="description"
//                 value={videoData.description}
//                 onChange={handleChange}
//                 placeholder="Description"
//             />
//             <button type="submit">Add Video</button>
//         </form>
//     );
// }

// export default AddVideoForm;
