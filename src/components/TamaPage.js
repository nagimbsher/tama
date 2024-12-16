import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './TamaPage.css';
import VideoList from './VideoList';
import WikipediaContent from './WikipediaContent';
import '../App.css';

function TamaPage() {
    const handleTamaMusic = () => {
        console.log("Tama Music clicked!");
    };

    const handleDream = () => {
        console.log("Tama Dream clicked!");
    };

    const handleTeachingTama = () => {
        console.log("Teaching Tama clicked!");
    };

    return (
        <div className="tama-page-container">
            {/* Sticky Header */}
            <div className="sticky-header">
                <h1>Welcome to the Tama Page</h1>
            </div>

            {/* Breadcrumb Navigation */}
            {/* <div className="breadcrumb">
                <Link to="/">create an ccount </Link> &gt; <span>Tama Page</span>
            </div> */}

            {/* Wikipedia Content */}
            <div className="wikipedia-section">
                <WikipediaContent />
            </div>

            {/* Buttons Section */}
            <div className="button-section">
                <button className="submit-button" onClick={handleTamaMusic}>
                    Tama Music
                </button>
                <button className="submit-button" onClick={handleDream}>
                    Tama Dream
                </button>
                <button className="submit-button" onClick={handleTeachingTama}>
                    Tama Language
                </button>
            </div>

            {/* Learn More Link */}
            <div className="learn-more">
                <a 
                    href="https://en.wikipedia.org/wiki/Tama_people" 
                    className="learn-more-link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Learn More about the Tama People
                </a>
            </div>

            {/* Video List Section */}
            <div className="video-list-section">
                <VideoList />
            </div>
        </div>
    );
}

export default TamaPage;

// import React from 'react';
// import './TamaPage.css'; 
// import VideoList from './VideoList';
// import WikipediaContent from './WikipediaContent';

// import '../App.css';



// function TamaPage() {
    
//     const handleTamaMusic = () => {
//     };

//     const handleDream = () => {
    
//     };

//     const handleTeachingTama = () => {
        
//     };
   

//     return (
//         <div>
//             <div className="sticky-header">
//                 <h1>Welcome to Tama page </h1>
//             </div>
//             <div className="breadcrumb">
               

//             </div>
          
//             <WikipediaContent />
//             <button className="submit-button" onClick={handleTamaMusic}>Tama Music</button>
            
//             <button className="submit-button" onClick={handleDream}> Tama Dream</button>
            
           
//             <button className="submit-button" onClick={handleTeachingTama}>Tama Language</button>

//             <a href="https://en.wikipedia.org/wiki/Tama_people" className="learn-more-link" target="_blank" rel="noopener noreferrer">Learn More about tama</a>

//             <VideoList />
            
//         </div>
//     );
// }

// export default TamaPage;


