import React, { useState, useEffect } from 'react';
import axios from 'axios';

function WikipediaContent() {
    const [content, setContent] = useState('');

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
        })
        .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h2>Tama People</h2>
            <p>{content}</p>
        </div>
    );
}

export default WikipediaContent; 
