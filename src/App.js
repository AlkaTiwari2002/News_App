// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import India from './India';
import World from './World';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/india" className="nav-link">India</Link>
            </li>
            <li className="nav-item">
              <Link to="/world" className="nav-link">World</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/india" element={<India />} />
          <Route path="/world" element={<World />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
