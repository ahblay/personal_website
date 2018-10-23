import React, { Component } from 'react';

class Info extends Component {
    render() {
        return (
            <div class="secondary-background">
                <div class="s-header">
                    <div class="heading-content intro">The Basics
                        <a class="anchor" name="intro"></a>
                    </div>
                    <div class="heading-content projects">The Projects
                        <a class="anchor" name="projects"></a>
                    </div>
                    <div class="heading-content work">The Work Experience
                        <a class="anchor" name="work"></a>
                    </div>
                </div>
                <div class="line-ss ss-inner"></div>
                <div class="line-ss ss-inner-mid"></div>
                <div class="line-ss ss-outer-mid"></div>
                <div class="line-ss ss-outer"></div>
                <div class="s-content">
                    <div class="section-content intro">
                        <p>Welcome to my website! I built it all by myself. I'm a full-stack developer with an
                        interest in the problem solving capacities of programming. I'm educated in mathematics and I
                        use software to explore mathematical ideas and mathematical ideas to inform software design.
                        I'm self-taught, but somehow still competent; trust me. Or don't.
                        </p>
                    </div>
                    <div class="section-content projects">
                        <div class="ss-item">
                            <div class="ss-header">
                                Employee Scheduling Software
                                <span class="right-align smaller">
                                    Nov. '17 - Jul. '18
                                </span>
                            </div>
                            <ul>
                                <li>
                                    Linearly optimized the employee scheduling process in a full stack web application.
                                </li>
                                <li>
                                    Implemented server side request handling with Python Flask and MongoDB,
                                    algorithmic optimization with PuLP, and client side interfacing in HTML,
                                    CSS, Javascript and JQuery.
                                </li>
                            </ul>
                        </div>
                        <div class="ss-item">
                            <div class="ss-header">
                                Photo Keyword Search Engine
                                <span class="right-align smaller">
                                    Jul. '18 - Aug. '18
                                </span>
                            </div>
                            <ul>
                                <li>
                                    Built a Python desktop application in PyQT to query photos by keyworded metadata.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="section-content work">
                        <div class="ss-item">
                            <div class="ss-header">
                                Tutor and Grader
                                <span class="right-align smaller">
                                    Jan. '18 - now
                                </span>
                            </div>
                            <ul>
                                <li>
                                    Reviewed and corrected student submissions for mathematical accuracy,
                                    precision, style and clarity.
                                </li>
                            </ul>
                        </div>
                        <div class="ss-item">
                            <div class="ss-header">
                                Peer Tutor
                                <span class="right-align smaller">
                                    Sep. '13 - May '16
                                </span>
                            </div>
                            <ul>
                                <li>
                                    Mentored students in calculus, differential equations, spherical trigonometry and rhetoric.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

/*
<div class="heading-box intro">
                    <div class="heading-content">The Basics</div>
                </div>
                <div class="section-content">
                    <p>Welcome to my website! I built it all by myself. I'm a full-stack developer with an
                        interest in the problem solving capacities of programming. I'm educated in mathematics and I
                        use software to explore mathematical ideas and mathematical ideas to inform software design.
                        I'm self-taught, but somehow still competent; trust me. Or don't.
                    </p>
                </div>
                <div class="heading-box projects">
                    <div class="heading-content">Projects</div>
                </div>
                <div class="section-content">
                    <ul>
                        <li>
                            Employee Scheduling Software Vancouver, BC Collaborative business venture Nov. 2017 - Jul. 2018
                            Linearly optimized the employee scheduling process in a full stack web application.
                            Implemented server side request handling with Python Flask and MongoDB, algorithmic optimization
                            with PuLP, and client side interfacing in HTML, CSS, Javascript and JQuery.
                        </li>
                        <li>
                            Photo Keyword Search Engine Family project
                            Built a Python desktop application in PyQT to query photos by keyworded metadata.
                        </li>
                    </ul>
                </div>
                <div class="heading-box work">
                    <div class="heading-content">Work Experience</div>
                </div>
                <div class="section-content">
                    <ul>
                        <li>
                            The Art of Problem Solving Online Grader Jan. 2018 - now
                            Reviewed and corrected student submissions for mathematical accuracy, precision, style and clarity.
                        </li>
                        <li>
                            Quest University Canada Squamish, BC Peer Tutor Sep. 2013 - May 2016
                            Mentored students in calculus, differential equations, spherical trigonometry and rhetoric.
                        </li>
                    </ul>
                </div>
*/
export default Info;