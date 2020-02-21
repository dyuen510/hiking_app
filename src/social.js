import React, { Component } from 'react';
import './App.css'
import logo from './images/linkedin.png';
import logo2 from './images/github.png';
import logo3 from './images/instagram.png';

class Social extends Component{
    render(){
        return (
            <div className = 'socialMedia'>
                <h3>Connect With Me</h3>
                <a href = 'https://www.linkedin.com/in/david-yuen-549bb3b5/'><img src = {logo} alt='linkedin logo' /></a>
                <a href = 'https://github.com/dyuen510'><img src = {logo2} alt ='github logo'/></a> 
                <a href = 'https://www.instagram.com/dave.yuen'><img src = {logo3} width ='70px' alt ='instagram logo'/></a> 
            </div>
        )
    }
}

export default Social