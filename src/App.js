import './styling.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Chores from './pages/Chores';
import Feedback from './pages/Feedback';
import About from './pages/About';

function App() {
  return (
    <Router>
      <NavBar />
      <h1 style={{
        textAlign: 'center',
        fontSize: '2rem',
        marginTop: '1rem',
        color: '#8c3b36',
        fontFamily: 'Segoe UI, sans-serif'
      }}>
        Mom’s Mission Board
      </h1>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/chores" element={<Chores />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
}

export default App;