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
            // longitude: '',
            // latitude: '',
        }
        this.handleChange = this.handlechange.bind(this);
    }

    handlechange(event){
        event.preventDefault();
        this.setState({[event.target.name]: event.target.value});
    }
    // handleChange = ({ target }) => {
    //     this.setState({
    //         [target.name]: target.value
    //     })
    // }

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

//     handleChange(event){
//         // event.preventDefault();
//         fetch(`https://www.hikingproject.com/data/get-trails?lat=${this.state.latitude}&lon=${this.state.longitude}&key=200684290-b9eee42ec1bad2091e0fbde0ed1ad635`)
//         .then(res => res.json())
//         .then(
//             (res) => {
//                 this.setState({
//                     isLoaded: true,
//                     items: res.trails,
//                     latitude: this.state.latitude,
//                     longitude: this.state.longitude
//                 })
//             },
//             (error) => {
//                 this.setState({
//                     isLoaded: true,
//                     error
//                 })
//             }
//         )
//                 console.log(this.state.latitude);
//         console.log(this.state.longitude);
// }
    render() {
        // console.log(this.state.latitude);
        // console.log(this.state.longitude);
        const { error, isLoaded, items } = this.state;
        // if (error) {
        //     return <div>Error: {error.message}</div>;
        // } else if (!isLoaded) {
        //     return <div>Loading...</div>;
        // } else {
            return (
                <div className='trailList'>
                    {/* <form onSubmit = {this.handleChange}>

                        <label>Longitude</label>
                        <input type="text" name="longitude" onChange={this.handleChange} />

                        <label>Latitude</label>
                        <input type="text" name="latitude" onChange={this.handleChange} />
                    </form> */}
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