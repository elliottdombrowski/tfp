import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//IMPORTING COMPONENTS
import Header from './components/Header/Header';

//IMPORTING PAGES
import Homepage from './pages/Homepage/Homepage';
import BlogPage from './pages/BlogPage/BlogPage';
import BlogCMS from './pages/BlogCMS/BlogCMS';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <BlogCMS />

        <Routes> 
          {/* <Route exact path='/' element={<Homepage />} /> */}

          <Route exact path='/blog' element={<BlogPage />} />
          <Route exact path='/blogcms' element={<BlogCMS />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
