import React, { useEffect, useState } from 'react';

function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://server-tama.onrender.com/api/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching posts:', error));
    }, []);

    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.content}</h2>
                  
                </div>
            ))}
        </div>
    );
}

export default PostList;
