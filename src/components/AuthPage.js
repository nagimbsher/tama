
import React, { useState } from 'react';
import LoginForm from '../LoginForm';
import WikipediaContent from './WikipediaContent';
import '../App.css';
import './AuthPage.css';

function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [registrationError, setRegistrationError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = isLogin ? 'https://server-tama.onrender.com/auth/login' : 'https://server-tama.onrender.com/auth/register';

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const data = await response.json();
                console.log(isLogin ? 'Login successful:' : 'Registration successful:', data);

            } else {
                console.log(isLogin ? 'Login failed:' : 'Registration failed:', response.status);
                if (!isLogin) {
                    if (response.status === 409) {
                        setRegistrationError('Account already exists. Please choose a different username.');
                    } else {
                        setRegistrationError('Account already exists. Please choose a different username.');
                    }
                }
            }
        } catch (error) {
            console.error('Request failed:', error);
        }
    };

    return (
        <div className="auth-page-container">
            <img src="https://cdn.vectorstock.com/i/preview-1x/67/87/dancing-people-on-ethnic-background-with-african-vector-29476787.jpg" alt="A traditional Tama drum" style={{ width: '100%', height: 'auto' }} />
{/*        
             <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/CGCOdMM1WPo?autoplay=1&mute=1&loop=1&controls=0"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
              */}
            <div>
                <h1>Welcome to Tama Insights: Your Portal to Cultural Discovery</h1>
                {registrationError && <div className="error-message">{registrationError}</div>}
    
                {isLogin ? (
                    <>
                    <LoginForm
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        formData={formData}
                    />
                    <WikipediaContent />
                    </>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Username:</label>
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit">Register</button>
                    </form>
                )}
                <button onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? 'Create an account? Register' : 'Already have an account? Login'}
                </button>
            </div>
        </div>
    );
}

export default AuthPage;

