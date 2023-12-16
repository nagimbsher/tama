import React, { useState } from 'react';
import LoginForm from '../LoginForm';
import '../App.css';
import './AuthPage.css';

function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [registrationError, setRegistrationError] = useState(''); // Define the registration error state

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
            <h1>Welcome to Tama Insights: Your Portal to Cultural Discovery</h1>
            {registrationError && <div className="error-message">{registrationError}</div>}

            {isLogin ? (
                <LoginForm
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    formData={formData}
                />
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
    );
}

export default AuthPage;




// import React, { useState } from 'react';
// import LoginForm from '../LoginForm';
// import '../App.css';
// import './AuthPage.css';

// function AuthPage() {
//     const [isLogin, setIsLogin] = useState(true);
//     const [formData, setFormData] = useState({ username: '', password: '' });

//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const url = isLogin ? 'https://server-tama.onrender.com/auth/login' : 'https://server-tama.onrender.com/auth/register';

//         try {
//             const response = await fetch(url, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData)
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 console.log(isLogin ? 'Login successful:' : 'Registration successful:', data);

//             } else {
//                 console.log(isLogin ? 'Login failed:' : 'Registration failed:', response.status);
//                 alert('Account created successfully.');

//             }
//         } catch (error) {
//             console.error('Request failed:', error);

//         }
//     };
//     return (
//         <div className="auth-page-container">
//          <h1>Welcome to Tama Insights: Your Portal to Cultural Discovery</h1>
//     {isLogin ?
//         <LoginForm
//             handleChange={handleChange}
//             handleSubmit={handleSubmit}
//             formData={formData}
//         /> :
//         <form onSubmit={handleSubmit}>
//             <div>
//                        <label>Username:</label>
//                        <input
//                             type="text"
//                             name="username"
//                             value={formData.username}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label>Password:</label>
//                         <input
//                             type="password"
//                             name="password"
//                             value={formData.password}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <button type="submit">Register</button>
//                 </form>
//     }
//     <button onClick={() => setIsLogin(!isLogin)}>
//         {isLogin ? 'Create an account? Register' : 'Already have an account? Login'}
//     </button>
// </div>

// )}

// export default AuthPage;




