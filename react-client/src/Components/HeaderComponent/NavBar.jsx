import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <header>
                <ul id="header-buttons">
                    <li class="nav-button"><a href="#intro">Intro</a></li>
                    <li class="nav-button"><a href="#projects">Projects</a></li>
                    <li class="nav-button"><a href="#work">Work Experience</a></li>
                    <li class="nav-button">Contact</li>
                </ul>
            </header>
        )
    }
}

export default NavBar;