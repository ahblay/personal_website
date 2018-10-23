import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './Pages/HomePage';
import NavBar from './HeaderComponent/NavBar';
import Footer from './FooterComponent/Footer';
import Info from './Pages/Info';

class App extends Component {
    render() {
        return (
            <Router>
                <div class="container">
                    <NavBar />
                    <Route name="home" exact path="/" component={HomePage} />
                    <Info />
                </div>
            </Router>
        )
    }
}

export default App;