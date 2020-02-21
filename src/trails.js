import React, { Component } from 'react';
import './App.css'
import SearchBar from './searchBar.js';


class HikingTrails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        }
        this.handleChange = this.handlechange.bind(this);
    }

    handlechange(event){
        event.preventDefault();
        this.setState({[event.target.name]: event.target.value});
    }


    componentDidMount() {

        fetch(`https://www.hikingproject.com/data/get-trails?lat=37.5124&lon=-121.8805&key=200684290-b9eee42ec1bad2091e0fbde0ed1ad635`)
            .then(res => res.json())
            .then(
                (res) => {
                    this.setState({
                        isLoaded: true,
                        items: res.trails,
                        latitude: this.state.latitude,
                        longitude: this.state.longitude
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
            return (
                <div className='trailList'>
                    {items.map(item => (
                        <div className='content' key={item.name}>
                            <h3>{item.name} </h3>
                            <h4>{item.location}</h4>
                            <img className='img' src={item.imgSmall} />
                            <p>{item.summary}</p>
                            <a href={item.url}>Check it out</a>
                            <hr />
                        </div>
                    ))}
                </div>
            );
        }
    }
// }

export default HikingTrails