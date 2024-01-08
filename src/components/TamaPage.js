import React from 'react';
import './TamaPage.css'; 
import VideoList from './VideoList';
import WikipediaContent from './WikipediaContent';
import LoginForm from '../LoginForm';



function TamaPage() {
    
    const handleTamaMusic = () => {
    };

    const handleDream = () => {
    
    };

    const handleTeachingTama = () => {
        
    };
   

    return (
        <div>
            <div className="sticky-header">
                <h1>Welcome to Tama page </h1>
            </div>
            <div className="breadcrumb">
               

            </div>
          
            <WikipediaContent />
            <button className="submit-button" onClick={handleTamaMusic}>Tama Music</button>
            
            <button className="submit-button" onClick={handleDream}> Tama Dream</button>
            
           
            <button className="submit-button" onClick={handleTeachingTama}>Tama Language</button>

            <a href="https://en.wikipedia.org/wiki/Tama_people" className="learn-more-link" target="_blank" rel="noopener noreferrer">Learn More about tama</a>

            <VideoList />
            <LoginForm />
        </div>
    );
}

export default TamaPage;


