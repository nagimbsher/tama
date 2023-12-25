import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WikipediaContent.css'; // Ensure you have this CSS file

function WikipediaContent() {
    const [content, setContent] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get('https://en.wikipedia.org/w/api.php', {
            params: {
                action: 'query',
                format: 'json',
                titles: 'Tama_people',
                prop: 'extracts',
                exintro: true,
                explaintext: true,
                origin: '*',
            }
        })
        .then(response => {
            const page = response.data.query.pages;
            const pageId = Object.keys(page)[0];
            setContent(page[pageId].extract);
            setIsLoading(false);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            setError('Failed to load content.');
            setIsLoading(false);
        });
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="wikipedia-content-container">
            <h2>Tama People</h2>
            <p>{content}</p>
        </div>
    );
}

export default WikipediaContent;





// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './WikipediaContent.css';
// function WikipediaContent() {
//     const [content, setContent] = useState('');

//     useEffect(() => {
//         axios.get('https://en.wikipedia.org/w/api.php', {
//             params: {
//                 action: 'query',
//                 format: 'json',
//                 titles: 'Tama_people',
//                 prop: 'extracts',
//                 exintro: true,
//                 explaintext: true,
//                 origin: '*',
//             }
//         })
//         .then(response => {
//             const page = response.data.query.pages;
//             const pageId = Object.keys(page)[0];
//             setContent(page[pageId].extract);
//         })
//         .catch(error => console.error('Error fetching data:', error));
//     }, []);

//     return (
//         <div>
//             <h2>Tama People</h2>
//             <p>{content}</p>
//         </div>
//     );
// }

// export default WikipediaContent; 
