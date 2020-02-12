import React from 'react';
import './App.css';
import Banner from './banner.js';
import NavBar from './nav.js';
import HikingTrails from './trails.js';
import Middle from './middle.js';

function App() {
  return (
    <div className="App">
      <div>
      <Banner />
      </div>
      <div>
      <NavBar />
      </div>
      <div className = 'trailContents'>
      <HikingTrails />
      </div>
      <Middle />
    </div>
  
  );
}

export default App;
