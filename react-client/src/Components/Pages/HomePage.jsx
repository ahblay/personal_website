import React, { Component } from 'react';
import background from '../../Assets/calvin.png';

var image = {
    backgroundImage: "url(" + background + ")"
};

class HomePage extends Component {
    render() {
        return (
            <div id="title-background" style = {image}>
            </div>
        )
    }
}

export default HomePage;