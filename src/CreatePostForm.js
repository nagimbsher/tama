import React, { useState } from 'react';

function CreatePostForm() {
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://server-tama.onrender.com/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ content, author_id: 1 }) 
        })
        .then(response => response.json())
        .then(data => {
            console.log('Post created:', data);
            setContent('');
            
        })
        .catch(error => console.error('Error creating post:', error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea value={content} onChange={e => setContent(e.target.value)} />
            <button type="submit">Create Post</button>
        </form>
    );
}

export default CreatePostForm;
