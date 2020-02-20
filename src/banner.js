import React, { Component } from 'react';
import './App.css'
import NavBar from './nav.js';


class Banner extends Component{
    render(){
        return (
            <div className = 'BannerTop'>
                <h2>The Hiking Experience</h2>
                < NavBar />
            </div>
            
        )
    }
}

export default Banner;