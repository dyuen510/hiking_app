import React from 'react';
import './App.css';
import Banner from './banner.js';
import NavBar from './nav.js';
import HikingTrails from './trails.js';
import Middle from './middle.js';
import Quote from './quote.js';

function App() {
  return (
    <div className="App">
      <div>
      <Banner />
      </div>
      <div className = 'quoteDisplay'>
      <Quote /> 
      </div>
      <div>
      <NavBar />
      </div>
      <div className = 'trailContents'>
      <h1 className ='trailHeading'>Muir Woods</h1>
      <HikingTrails />
      </div>
      {/* <div className = 'quoteDisplay'>
      <Quote /> 
      </div> */}
      <Middle />
    </div>
  
  );
}

export default App;
