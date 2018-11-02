import React, { Component } from 'react';
import Day from './Calendar/Day';

class Calendar extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className={"schedule-calendar"}>
                <Day name="Sunday" highlightData={this.props.dataFromPrefs} updateEmp={this.props.updateEmp} />
                <Day name="Monday" highlightData={this.props.dataFromPrefs} updateEmp={this.props.updateEmp} />
                <Day name="Tuesday" highlightData={this.props.dataFromPrefs} updateEmp={this.props.updateEmp} />
                <Day name="Wednesday" highlightData={this.props.dataFromPrefs} updateEmp={this.props.updateEmp} />
                <Day name="Thursday" highlightData={this.props.dataFromPrefs} updateEmp={this.props.updateEmp} />
                <Day name="Friday" highlightData={this.props.dataFromPrefs} updateEmp={this.props.updateEmp} />
                <Day name="Saturday" highlightData={this.props.dataFromPrefs} updateEmp={this.props.updateEmp} />
            </div>
        );
    };
};

export default Calendar;