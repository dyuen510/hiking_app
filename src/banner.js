import React, { Component } from 'react';
import './App.css'
import NavBar from './nav.js';


class Banner extends Component{
    render(){
        return (
            <div className = 'BannerTop'>
                <h2>Welcome to the Hiking Website</h2>
            </div>
            
        )
    }
}

export default Banner;