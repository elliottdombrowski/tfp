import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//IMPORTING COMPONENTS
import Header from './components/Header/Header';

//IMPORTING PAGES
import Homepage from './pages/Homepage/Homepage';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />

        <Routes>
          <Route exact path='/' element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
