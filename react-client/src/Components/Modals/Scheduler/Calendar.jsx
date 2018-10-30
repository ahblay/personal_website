import React, { Component } from 'react';
import Day from './Calendar/Day';

class Calendar extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className={"schedule-calendar"}>
                <Day name="Sunday" highlightData={this.props.dataFromPrefs} />
                <Day name="Monday" highlightData={this.props.dataFromPrefs} />
                <Day name="Tuesday" highlightData={this.props.dataFromPrefs} />
                <Day name="Wednesday" highlightData={this.props.dataFromPrefs} />
                <Day name="Thursday" highlightData={this.props.dataFromPrefs} />
                <Day name="Friday" highlightData={this.props.dataFromPrefs} />
                <Day name="Saturday" highlightData={this.props.dataFromPrefs} />
            </div>
        );
    };
};

export default Calendar;