import React, { useState } from 'react';
import VideoList from './components/VideoList'; 

import './App.css';
function LoginForm() {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [isLoggedIn, setIsLoggedIn] = useState(false); 

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://server-tama.onrender.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials)
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Login successful:', data);
                setIsLoggedIn(true); 
                
            } else {
                console.log('Login failed:', response.status);
                
            }
        } catch (error) {
            console.error('Request failed:', error);
            
        }
    };

    return (
        <div className="auth-background">
          
            {!isLoggedIn ? (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Username:</label>
                        <input
                            type="text"
                            name="username"
                            value={credentials.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={credentials.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            ) : (
                <>
                
                <VideoList />
                </>
                
            )}
        </div>
    );
}

export default LoginForm;


