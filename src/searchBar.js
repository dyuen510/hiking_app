import React, { Component } from 'react';
 

class SearchBar extends Component {
    constructor(props) {
        super(props);
            this.state = {
                longitude: '',
                latitude: '',
            };
            this.handleChange = this.handleChange.bind(this);
        }

        handleChange(event){
            event.preventDefault();
            this.setState({ [event.target.name]: event.target.value });
        }
        render(){
            return (
                <div>
                <form>

                    <label>Longitude</label>
                    <input type="text" name="longitude" onChange={this.handleChange} />

                    <label>Latitude</label>
                    <input type="text" name="latitude" onChange={this.handleChange} />

                </form>
                {/* {console.log(this.state.latitude)}
                {console.log(this.state.longitude)} */}
                </div>
            )
        }
    }


export default SearchBar;