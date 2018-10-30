import React, { Component } from 'react';

class Output extends Component {
    render() {
        return (
            <div className="schedule-output">
                <div className={"day-name"}>Sunday</div>
                <div className={"day-name"}>Monday</div>
                <div className={"day-name"}>Tuesday</div>
                <div className={"day-name"}>Wednesday</div>
                <div className={"day-name"}>Thursday</div>
                <div className={"day-name"}>Friday</div>
                <div className={"day-name"}>Saturday</div>
                <div className={"day"}>
                    <div className={"shift weekend"}></div>
                    <div className={"shift weekend"}></div>
                    <div className={"shift weekend"}></div>
                </div>
                <div className={"day"}>
                    <div className={"shift weekday"}></div>
                    <div className={"shift weekday"}></div>
                </div>
                <div className={"day"}>
                    <div className={"shift weekday"}></div>
                    <div className={"shift weekday"}></div>
                </div>
                <div className={"day"}>
                    <div className={"shift weekday"}></div>
                    <div className={"shift weekday"}></div>
                </div>
                <div className={"day"}>
                    <div className={"shift weekday"}></div>
                    <div className={"shift weekday"}></div>
                </div>
                <div className={"day"}>
                    <div className={"shift weekday"}></div>
                    <div className={"shift weekday"}></div>
                </div>
                <div className={"day"}>
                    <div className={"shift weekend"}></div>
                    <div className={"shift weekend"}></div>
                    <div className={"shift weekend"}></div>
                </div>
            </div>
        )
    }
}

export default Output;