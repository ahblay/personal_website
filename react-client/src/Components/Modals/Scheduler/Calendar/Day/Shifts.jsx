import React, { Component } from 'react';

class Shifts extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.name === "Sunday" || this.props.name === "Saturday") {
            return ( <Weekend availabilityData={this.props.availabilityData}
                              highlightData={this.props.highlightData}
                              updateEmp={this.props.updateEmp}
                              name={this.props.name} /> )
        } else {
            return ( <Weekday availabilityData={this.props.availabilityData}
                              highlightData={this.props.highlightData}
                              updateEmp={this.props.updateEmp}
                              name={this.props.name} /> )
        }
    }
}

class Weekend extends Component {
    constructor(props) {
        super(props);
        let currentEmp = null;
        this.state = {
            prefs: {
                "Ann": ["unselected", "unselected", "unselected"],
                "Lily": ["unselected", "unselected", "unselected"],
                "Tim": ["unselected", "unselected", "unselected"],
                "Jess": ["unselected", "unselected", "unselected"],
                "Sara": ["unselected", "unselected", "unselected"],
                "Jill": ["unselected", "unselected", "unselected"],
                "Dan": ["unselected", "unselected", "unselected"],
                "Kev": ["unselected", "unselected", "unselected"]
            },
            showPrefs: false,
            availability: "unselected"
        }
    }

    componentWillReceiveProps(nextProps) {
        // Check if selected employee has changed. If so, update class variable to reflect change.
        this.updateCurrentEmployee(nextProps);

        // Check if the show preferences button has been clicked. If so, update component state to reflect change.
        this.updateShowPrefs(nextProps);

        // Check if daily availability was changed. If so, update state to reflect change.
        this.updateDailyAvailability(nextProps);

    }

    updateCurrentEmployee = (nextProps) => {
        if (nextProps.highlightData == null) {
            return null;
        }
        else if (this.props.highlightData == null) {
            this.currentEmp = nextProps.highlightData.name;
        }
        else if (nextProps.highlightData.name !== this.props.highlightData.name) {
            this.currentEmp = nextProps.highlightData.name;
        }
    }

    updateShowPrefs = (nextProps) => {
        if (nextProps.highlightData == null) {
            return null;
        }
        else if (this.props.highlightData == null) {
            this.setState((state) => {
                return (
                    {
                        showPrefs: nextProps.highlightData.highlightPrefs
                    }
                )
            });
        }
        else if (nextProps.highlightData.highlightPrefs !== this.props.highlightData.highlightPrefs) {
            this.setState((state) => {
                return (
                    {
                        showPrefs: nextProps.highlightData.highlightPrefs
                    }
                )
            });
        }
    }

    updateDailyAvailability = (nextProps) => {

        if (nextProps.availabilityData == null) {
            return null;
        }
        else if (this.props.availabilityData == null) {
            let dailyAvailability = nextProps.availabilityData.status[this.currentEmp];

            let prefsDict = this.updatePrefsDict(dailyAvailability);

            this.setState((state) => {
                return (
                    {
                        availability: dailyAvailability,
                        prefs: prefsDict
                    }
                )
            });
        }
        else if (nextProps.availabilityData.status[this.currentEmp] !== this.props.availabilityData.status[this.currentEmp]) {
            let dailyAvailability = nextProps.availabilityData.status[this.currentEmp];

            let prefsDict = this.updatePrefsDict(dailyAvailability);

            this.setState((state) => {
                return (
                    {
                        availability: dailyAvailability,
                        prefs: prefsDict
                    }
                )
            });
        }
        else if (nextProps.availabilityData.status[this.currentEmp] == this.props.availabilityData.status[this.currentEmp]) {
            let dailyAvailability = nextProps.availabilityData.status[this.currentEmp];

            let prefsDict = this.updatePrefsDict(dailyAvailability);

            this.setState((state) => {
                return (
                    {
                        availability: dailyAvailability,
                        prefs: prefsDict
                    }
                )
            });
        }
    }

    updatePrefsDict = (dailyAvailability) => {
        let prefsDict = this.state.prefs;
        let available = ["available", "available", "available"];
        let unavailable = ["unavailable", "unavailable", "unavailable"];
        let unselected = ["unselected", "unselected", "unselected"];
        let current = prefsDict[this.currentEmp];
        let revert = (this.arraysEqual(current, unavailable) ||
                      this.arraysEqual(current, unselected)
                      ? available : current);

        if (dailyAvailability == "unavailable") {
            prefsDict[this.currentEmp] = unavailable;
        } else if (dailyAvailability == "available") {
            prefsDict[this.currentEmp] = revert;
        }

        return prefsDict;
    }

    arraysEqual = (a, b) => {
        for (let i = 0; i < a.length; i++) {
            if (a[i] != b[i]) return false;
        }
        return true;
    }

    updateEmployeeData = (empName, day, value) => {
        let updatedData = {"day": day,
                           "value": value,
                           "name": empName}
        this.props.updateEmp(updatedData);
    }

    togglePrefs = (shift) => {

        let empName = this.props.highlightData.name;
        let prefsDict = this.state.prefs;
        prefsDict[empName][shift] = (this.state.prefs[empName][shift] === "fine" ? "prefer" : "fine")
        this.setState((state) => {
            return (
                {
                    prefs: prefsDict
                }
            )
        });
        this.updateEmployeeData(empName, this.props.name, prefsDict[empName])
    }

    render() {
        let empName = (this.props.highlightData ? this.props.highlightData.name : null);
        let availability = (this.state.availability == "available" ? true : false);

        let firstShift = 0;
        let secondShift = 1;
        let thirdShift = 2;

        return (
            <div className={"shifts"}>
                <div className={"shift " + (this.state.showPrefs ? this.state.prefs[empName][firstShift] : "")}
                     onClick={(this.state.showPrefs && availability ? () => this.togglePrefs(firstShift) : null)}>
                    <p>Barista (4)</p>
                    <p>Manager (1)</p>
                </div>
                <div className={"shift " + (this.state.showPrefs ? this.state.prefs[empName][secondShift] : "")}
                     onClick={(this.state.showPrefs && availability ? () => this.togglePrefs(secondShift) : null)}>
                    <p>Barista (3)</p>
                    <p>Manager (1)</p>
                </div>
                <div className={"shift " + (this.state.showPrefs ? this.state.prefs[empName][thirdShift] : "")}
                     onClick={(this.state.showPrefs && availability ? () => this.togglePrefs(thirdShift) : null)}>
                    <p>Barista (2)</p>
                    <p>Manager (1)</p>
                </div>
            </div>
        )
    }
}

class Weekday extends Component {
    constructor(props) {
        super(props);
        let currentEmp = null;
        this.state = {
            prefs: {
                "Ann": ["unselected", "unselected"],
                "Lily": ["unselected", "unselected"],
                "Tim": ["unselected", "unselected"],
                "Jess": ["unselected", "unselected"],
                "Sara": ["unselected", "unselected"],
                "Jill": ["unselected", "unselected"],
                "Dan": ["unselected", "unselected"],
                "Kev": ["unselected", "unselected"]
            },
            showPrefs: false,
            availability: "unselected"
        }
    }

    componentWillReceiveProps(nextProps) {
        // Check if selected employee has changed. If so, update class variable to reflect change.
        this.updateCurrentEmployee(nextProps);

        // Check if the show preferences button has been clicked. If so, update component state to reflect change.
        this.updateShowPrefs(nextProps);

        // Check if daily availability was changed. If so, update state to reflect change.
        this.updateDailyAvailability(nextProps);

    }

    updateCurrentEmployee = (nextProps) => {
        if (nextProps.highlightData == null) {
            return null;
        }
        else if (this.props.highlightData == null) {
            this.currentEmp = nextProps.highlightData.name;
        }
        else if (nextProps.highlightData.name !== this.props.highlightData.name) {
            this.currentEmp = nextProps.highlightData.name;
        }
    }

    updateShowPrefs = (nextProps) => {
        if (nextProps.highlightData == null) {
            return null;
        }
        else if (this.props.highlightData == null) {
            this.setState((state) => {
                return (
                    {
                        showPrefs: nextProps.highlightData.highlightPrefs
                    }
                )
            });
        }
        else if (nextProps.highlightData.highlightPrefs !== this.props.highlightData.highlightPrefs) {
            this.setState((state) => {
                return (
                    {
                        showPrefs: nextProps.highlightData.highlightPrefs
                    }
                )
            });
        }
    }

    updateDailyAvailability = (nextProps) => {

        if (nextProps.availabilityData == null) {
            return null;
        }
        else if (this.props.availabilityData == null) {
            let dailyAvailability = nextProps.availabilityData.status[this.currentEmp];

            let prefsDict = this.updatePrefsDict(dailyAvailability);

            this.setState((state) => {
                return (
                    {
                        availability: dailyAvailability,
                        prefs: prefsDict
                    }
                )
            });
        }
        else if (nextProps.availabilityData.status[this.currentEmp] !== this.props.availabilityData.status[this.currentEmp]) {
            let dailyAvailability = nextProps.availabilityData.status[this.currentEmp];

            let prefsDict = this.updatePrefsDict(dailyAvailability);

            this.setState((state) => {
                return (
                    {
                        availability: dailyAvailability,
                        prefs: prefsDict
                    }
                )
            });
        }
        else if (nextProps.availabilityData.status[this.currentEmp] == this.props.availabilityData.status[this.currentEmp]) {
            let dailyAvailability = nextProps.availabilityData.status[this.currentEmp];

            let prefsDict = this.updatePrefsDict(dailyAvailability);

            this.setState((state) => {
                return (
                    {
                        availability: dailyAvailability,
                        prefs: prefsDict
                    }
                )
            });
        }
    }

    updatePrefsDict = (dailyAvailability) => {
        let prefsDict = this.state.prefs;
        let available = ["available", "available"];
        let unavailable = ["unavailable", "unavailable"];
        let unselected = ["unselected", "unselected"];
        let current = prefsDict[this.currentEmp];
        let revert = (this.arraysEqual(current, unavailable) ||
                      this.arraysEqual(current, unselected)
                      ? available : current);

        if (dailyAvailability == "unavailable") {
            prefsDict[this.currentEmp] = unavailable;
        } else if (dailyAvailability == "available") {
            prefsDict[this.currentEmp] = revert;
        }

        return prefsDict;
    }

    arraysEqual = (a, b) => {
        for (let i = 0; i < a.length; i++) {
            if (a[i] != b[i]) return false;
        }
        return true;
    }

    updateEmployeeData = (empName, day, value) => {
        let updatedData = {"day": day,
                           "value": value,
                           "name": empName}
        this.props.updateEmp(updatedData);
    }

    togglePrefs = (shift) => {

        let empName = this.props.highlightData.name;
        let prefsDict = this.state.prefs;
        prefsDict[empName][shift] = (this.state.prefs[empName][shift] === "fine" ? "prefer" : "fine")
        this.setState((state) => {
            return (
                {
                    prefs: prefsDict
                }
            )
        });
        this.updateEmployeeData(empName, this.props.name, prefsDict[empName])
    }

    render() {
        let empName = (this.props.highlightData ? this.props.highlightData.name : null);
        let availability = (this.state.availability == "available" ? true : false);

        let firstShift = 0;
        let secondShift = 1;

        return (
            <div className={"shifts"}>
                <div className={"shift " + (this.state.showPrefs ? this.state.prefs[empName][firstShift] : "")}
                     onClick={(this.state.showPrefs && availability ? () => this.togglePrefs(firstShift) : null)}>
                    <p>Barista (4)</p>
                    <p>Manager (1)</p>
                </div>
                <div className={"shift " + (this.state.showPrefs ? this.state.prefs[empName][secondShift] : "")}
                     onClick={(this.state.showPrefs && availability ? () => this.togglePrefs(secondShift) : null)}>
                    <p>Barista (3)</p>
                    <p>Manager (1)</p>
                </div>
            </div>
        )
    }
}

export default Shifts;
