import React, { Component } from 'react';
import background from '../../Assets/IMG_7506.jpg';

class HomePage extends Component {
    render() {
        return (
            <div class="main-content">
                <img src={ background } class="background" />
                { /*
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
                <div class="line4"></div>
                <div class="line5"></div>
                */ }
                <div class="title-box">
                    <div class="text" id="main-blurb">What is up?</div>
                </div>
            </div>
        )
    }
}

export default HomePage;