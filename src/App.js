import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthPage from './components/AuthPage';
import VideoList from './components/VideoList';
import TamaPage from './components/TamaPage'; 

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<AuthPage />} />
                <Route path="/VideoList" element={<VideoList />} />
                <Route path="/tama" element={<TamaPage />} /> {/* New Route */}
                {/* Add more Route elements here */}
            </Routes>
        </div>
    );
}

export default App;





// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import VideoList from './components/VideoList';
// import TamaPage from './components/TamaPage'; 

// function App() {
//     return (
//         <div className="App">
//             <Routes>
//                 <Route path="/" element={<Navigate to="/VideoList" replace />} /> {/* Redirect */}
//                 <Route path="/VideoList" element={<VideoList />} />
//                 <Route path="/tama" element={<TamaPage />} /> {/* New Route */}
//                 {/* Add more Route elements here */}
//             </Routes>
//         </div>
//     );
// }

// export default App;