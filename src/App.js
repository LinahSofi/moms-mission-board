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
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/chores" element={<Chores />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
}

export default App;