import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#f8f8f8' }}>
      <Link to="/">About</Link>
      <Link to="/chores">Chores</Link>
      <Link to="/feedback">Feedback</Link>
    </nav>
  );
}

export default NavBar;