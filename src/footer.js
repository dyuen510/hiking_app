import React, { Component } from 'react';
import './App.css'
import Social from './social.js';

class Foot extends Component{
    render(){
        return (
            <div className = 'footer'>
                < Social/>
                <h2>@copyright</h2>
            </div>
            
        )
    }
}

export default Foot;