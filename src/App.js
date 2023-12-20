// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import AuthPage from './components/AuthPage';
// import VideoList from './components/VideoList';
// import TamaPage from './components/TamaPage'; // Import the new component

// function App() {
//     return (
//         <div className="App">
//             <Routes>
//                 <Route path="/" element={<AuthPage />} />
//                 <Route path="/VideoList" element={<VideoList />} />
//                 <Route path="/tama" element={<TamaPage />} /> {/* New Route */}
//                 {/* Add more Route elements here */}
//             </Routes>
//         </div>
//     );
// }

// export default App;





import React from 'react';
import AuthPage from './components/AuthPage';

function App() {
    return (
        <div className="App">
            <AuthPage />
        </div>
    );
}

export default App;
