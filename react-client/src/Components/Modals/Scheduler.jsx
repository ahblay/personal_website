import React, { Component } from 'react';
import Calendar from './Scheduler/Calendar';
import Prefs from './Scheduler/Prefs';
import Output from './Scheduler/Output';

class Scheduler extends Component {

    constructor(props) {
        super(props);
        this.state = {dataFromPrefs: null, updatedEmp: null};
    }

    getPrefsData = (data) => {
        this.setState({dataFromPrefs: data});
    }

    updateEmp = (data) => {
        this.setState((state) => {
            return (
                {
                updatedEmp: data
                }
            )
        });
    }

    render() {
        return (
            <div className={"modal-content"}>
                <Calendar dataFromPrefs={this.state.dataFromPrefs} updateEmp={this.updateEmp} />
                <Prefs getData={this.getPrefsData} updatedEmp={this.state.updatedEmp} />
                <Output />
            </div>
        )
    }
}

export default Scheduler;