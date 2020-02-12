import React, { Component } from 'react';
import './App.css'

class NavBar extends Component {
    render(){
        return (
            <div className = 'navBar'>
                <h3 className = 'welcome'>Welcome</h3>
                <ul className = 'links'>
                    <li id = 'navButton'>Home</li>
                    <li id ='navButton'>Events</li>
                    <li id = 'navButton'>Articles</li>
                    <li id = 'navButton'>Contact</li>
                </ul>
            </div>
        )
    }
}

export default NavBar;