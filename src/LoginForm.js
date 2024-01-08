// import React, { useState } from 'react';
// import VideoListAd from './components/VideoListAd';
// import AddVideoForm from './components/AddVideoForm';
// import './App.css';

// function LoginForm() {
//     const [credentials, setCredentials] = useState({ username: '', password: '' });
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const [error, setError] = useState('');

//     const handleChange = (e) => {
//         // Update the credentials as the user types
//         setCredentials({
//             ...credentials,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         // Mocking the login logic
//         // In a real app, you would make a POST request to the login endpoint here
//         if (credentials.username === 'user' && credentials.password === 'pass') { // Replace with actual validation
//             setIsLoggedIn(true); // Set the logged in state to true
//             setError(''); // Clear any previous errors
//         } else {
//             setError('Incorrect username or password. Please try again.'); // Set an error message
//         }
//     };

//     return (
//         <div className="auth-background">
//             {error && <div className="error-message">{error}</div>}

//             {!isLoggedIn ? (
//                 <form onSubmit={handleSubmit} className="login-form">
//                     <div className="input-group">
//                         <label htmlFor="username">Username:</label>
//                         <input
//                             id="username"
//                             type="text"
//                             name="username"
//                             value={credentials.username}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div className="input-group">
//                         <label htmlFor="password">Password:</label>
//                         <input
//                             id="password"
//                             type="password"
//                             name="password"
//                             value={credentials.password}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <button type="submit" className="login-button">Login</button>
//                 </form>
//             ) : (
//                 <>
//                     <VideoListAd isLoggedIn={isLoggedIn} />
//                     <AddVideoForm />
//                     {/* Removed the <Video /> component as it doesn't seem to fit here */}
//                 </>
//             )}
//         </div>
//     );
// }

// export default LoginForm;



import React, { useState } from 'react';
import VideoListAd from './components/VideoListAd';
import AddVideoForm from './components/AddVideoForm';
import './App.css';


function LoginForm() {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [isLoggedIn, setIsLoggedIn] = useState(false); 
    const [error, setError] = useState(''); // Define the error state

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
                setError(''); // Reset error message
            } else {
                console.log('Login failed:', response.status);
                setError('Incorrect username or password. Please try again.'); // Set error message
            }
        } catch (error) {
            console.error('Request failed:', error);
            setError('An error occurred while logging in. Please try again later.'); // Set error message
        }
    };

    return (
        <div className="auth-background">
          {error && <div className="error-message">{error}</div>}

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
                <VideoListAd />
                <AddVideoForm />
              
                </>
                
            )}
        </div>
    );
}

export default LoginForm;



