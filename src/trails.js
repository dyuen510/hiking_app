import React, { Component } from 'react';
import './App.css'

class HikingTrails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }
    componentDidMount() {
        fetch('https://www.hikingproject.com/data/get-trails?lat=37.8890&lon=-122.6108&key=200684290-b9eee42ec1bad2091e0fbde0ed1ad635')
            .then(res => res.json())
            .then(
                (res) => {
                    this.setState({
                        isLoaded: true,
                        items: res.trails
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }
    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className = 'trailList'>
                    {items.map(item => (
                        <div className ='content' key={item.name}>
                            <h3>{item.name} </h3>
                            <img className = 'img' src = {item.imgSmall} />
                            <p>{item.summary}</p>
                        </div>
                    ))}
                </div>
            );
                    }
        }
} 

export default HikingTrails