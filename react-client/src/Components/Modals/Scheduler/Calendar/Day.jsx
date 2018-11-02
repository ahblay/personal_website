import React, { Component } from 'react';
import DayHeader from './Day/DayHeader';
import Shifts from './Day/Shifts';

class Day extends Component {
    constructor(props) {
        super(props);
        this.state = {availabilityData: null};
    }

    // update state to reflect changes to preferences
    getStateFromChild = (data) => {
        this.setState({availabilityData: data});
    }

    render() {
        return (
            <div class="day">
                <DayHeader name={this.props.name}
                           highlightData={this.props.highlightData}
                           updateEmp={this.props.updateEmp}
                           getData={this.getStateFromChild} />
                <Shifts name={this.props.name}
                        availabilityData={this.state.availabilityData}
                        highlightData={this.props.highlightData}
                        updateEmp={this.props.updateEmp} />
            </div>
        )
    }
}

export default Day;