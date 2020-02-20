import React from 'react';
import './App.css';
import Banner from './banner.js';
import HikingTrails from './trails.js';
import Middle from './middle.js';
import Quote from './quote.js';
import Foot from './footer.js';
import SearchBar from './searchBar.js';
import './mediaQueries.css'

function App() {
  return (
    <div className="App">
      <div>
      <Banner />
      </div>
      <div className = 'quoteDisplay'>
      <Quote /> 
      </div>
      <div className = 'trailContents'>
      <h1 className ='trailHeading'>Hikes Near the Ocean</h1>
      {/* <SearchBar /> */}
      <HikingTrails />
      </div>
      <Middle />
      <div>
      <Foot />
      </div>
    </div>
  
  );
}

export default App;
