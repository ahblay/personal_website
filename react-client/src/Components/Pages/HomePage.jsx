import React, { Component } from 'react';
import background from '../../Assets/IMG_7506.jpg';
import arrow from '../../Assets/arrow.png';

const backgroundStyle = {
    backgroundImage: "url(" + background + ")"
}

class HomePage extends Component {
    render() {
        return (
            <div class="background" style={ backgroundStyle }>
                <div class="structure">
                    <div class="title-box">
                        <div id="main-blurb">Hello.</div>
                        <div id="secondary-blurb">My name is <span class="red">Abel</span>.</div>
                        <div id="tagline">I'm a software engineer and math tutor. And some other stuff.</div>
                    </div>
                    <div class="line-a inner"></div>
                    <div class="line-a inner-mid"></div>
                    <div class="line-a outer-mid"></div>
                    <div class="line-a outer"></div>
                    <div class="line-b inner"></div>
                    <div class="line-b inner-mid"></div>
                    <div class="line-b outer-mid"></div>
                    <div class="line-b outer"></div>
                    <div class="line-joint j-inner"></div>
                    <div class="line-joint j-inner-mid"></div>
                    <div class="line-joint j-outer-mid"></div>
                    <div class="line-joint j-outer"></div>
                    {/*
                    <div id="arrow">
                        <img src={ arrow } />
                    </div>
                    */}
                </div>
            </div>
        )
    }
}

export default HomePage;