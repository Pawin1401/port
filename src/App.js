import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skill from './pages/Skill';
import Transcript from './pages/Transcript';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: '#1e1e1e', minHeight: '100vh', color: 'white' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/transcript" element={<Transcript />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;