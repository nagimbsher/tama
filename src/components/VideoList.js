import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // To navigate to tama page
import './VideoList.css';

function VideoList() {
    const [videos, setVideos] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredVideos, setFilteredVideos] = useState([]);
    const navigate = useNavigate();

    const getYouTubeID = (url) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return match && match[2].length === 11 ? match[2] : null;
    };

    useEffect(() => {
        fetch('https://server-tama.onrender.com/api/videos')
            .then(response => response.json())
            .then(data => {
                setVideos(data);
                setFilteredVideos(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        const filtered = videos.filter(video =>
            video.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredVideos(filtered);
    }, [searchQuery, videos]);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleVideoClick = (video) => {
        // Pass the selected video ID to the tama page
        navigate(`/tama?videoId=${getYouTubeID(video.url)}`);
    };

    return (
        <div className="video-list-container">
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Search Dream videos & music.... "
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="search-input"
                />
                <button className="search-button" type="button">
                    Search
                </button>
            </div>
            <ul className="video-list">
                {filteredVideos.map(video => (
                    <li
                        key={video.id}
                        className="video-item"
                        onClick={() => handleVideoClick(video)} // Navigate to Tama Page
                        style={{ cursor: 'pointer' }}
                    >
                        <h2>{video.title}</h2>
                        <p>{video.description}</p>
                        <iframe
                            title={`video-${video.id}`}
                            src={`https://www.youtube.com/embed/${getYouTubeID(video.url)}?rel=0`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default VideoList;



// import React, { useEffect, useState } from 'react';
// import './VideoList.css';

// function VideoList() {
//     const [videos, setVideos] = useState([]);
//     const [searchQuery, setSearchQuery] = useState('');
//     const [filteredVideos, setFilteredVideos] = useState([]);

//     const getYouTubeID = (url) => {
//         const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
//         const match = url.match(regExp);

//         return (match && match[2].length === 11) ? match[2] : null;
//     };

//     useEffect(() => {
//         fetch('https://server-tama.onrender.com/api/videos')
//             .then(response => response.json())
//             .then(data => {
//                 setVideos(data);
//                 setFilteredVideos(data); 
//             })
//             .catch(error => console.error('Error fetching data:', error));
//     }, []);

//     useEffect(() => {
        
//         const filtered = videos.filter(video =>
//             video.title.toLowerCase().includes(searchQuery.toLowerCase())
//         );
//         setFilteredVideos(filtered);
//     }, [searchQuery, videos]);

//     const handleSearchChange = e => {
//         setSearchQuery(e.target.value);
//     };

//     return (
//         <div className='video-list-container'>
//             <div className="input-container"> 
//                 <input
//                     type="text"
//                     placeholder="Search Dream videos & music.... "
//                     value={searchQuery}
//                     onChange={handleSearchChange}
//                     className="search-input"
//                 />
//                 <button className="search-button" type="button">
//                     Search
//                 </button>
//             </div>
//             <ul className="video-list">
//                 {filteredVideos.map(video => (
//                     <li key={video.id} className="video-item">
//                         <div className="overlay">Watch Now</div>
//                         <h2>{video.title}</h2>
//                         <p>{video.description}</p>
//                         <iframe
//                             title={`video-${video.id}`}
//                             src={`https://www.youtube.com/embed/${getYouTubeID(video.url)}`}
//                             frameBorder="0"
//                             allowFullScreen
//                         ></iframe>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default VideoList;
