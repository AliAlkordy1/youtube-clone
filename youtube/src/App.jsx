import Navbar from './components/navbar.jsx';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Home from './pages/home.jsx';
import Video from './pages/video.jsx';
function App() {

  const  [Sidebar , setSidebar] = useState(true);
  return (
    <>
      <Navbar setSidebar={setSidebar}/>
      <Routes>
      <Route path="/" element={<Home Sidebar={Sidebar}/>} />
      <Route path="/video/:categoryId/:videoId" element={<Video />} />
      </Routes>
    </>
  );
}

export default App;
