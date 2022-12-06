import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import backMusic from './backMusic.mp3';
import HomePage from './HomePage';
import MainPage from './MainPage';

function App() {
  
  
  return (
    <div className="App" >
      <div className="snow"></div>
      <Router>
        <Routes>
          <Route exact path ='/' element={<HomePage/>} />
          <Route path ='/mainpage' element={<MainPage/>} />
        </Routes>
      </Router>
      <div className="audio-container">
      <audio controls autoPlay loop src={backMusic} id="music">
      </audio>
      </div>
    </div>
  );
}

export default App;
