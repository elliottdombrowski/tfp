import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//IMPORTING COMPONENTS
import Header from './components/Header/Header';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        
        <Routes>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
