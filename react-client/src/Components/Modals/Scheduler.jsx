import React, { Component } from 'react';

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
    }

    render() {
        let empName = (this.props.highlightData ? this.props.highlightData.name : null);
        let availability = (this.state.availability == "unavailable" ? false : true);

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

class DayHeader extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                showPrefs: false,
                status: {
                    "Ann": "unselected",
                    "Lily": "unselected",
                    "Tim": "unselected",
                    "Jess": "unselected",
                    "Sara": "unselected",
                    "Jill": "unselected",
                    "Dan": "unselected",
                    "Kev": "unselected"
                },
                name: this.props.name
            };
    }

    componentWillReceiveProps(nextProps) {
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

    changeDayPref = () => {
        let currentName = this.props.highlightData.name;
        let statusDict = this.state.status;
        statusDict[currentName] = (this.state.status[currentName] === "available" ? "unavailable" : "available")
        this.setState((state) => {
            return (
                {
                    status: statusDict
                }
            )
        });

        // pass state data back to parent component
        this.props.getData(this.state)
    }

    render() {
        let showPrefs = this.state.showPrefs;
        let status = (this.props.highlightData ? this.state.status[this.props.highlightData.name] : "unselected");

        return (
            <div className={"day-name " + (showPrefs ? status : "")} onClick={this.changeDayPref}>
                {this.props.name}
            </div>
        )
    }
}

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
                           getData={this.getStateFromChild} />
                <Shifts name={this.props.name}
                        availabilityData={this.state.availabilityData}
                        highlightData={this.props.highlightData} />
            </div>
        )
    }
}

class Shifts extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.name === "Sunday" || this.props.name === "Saturday") {
            return ( <Weekend availabilityData={this.props.availabilityData}
                              highlightData={this.props.highlightData} /> )
        } else {
            return ( <Weekday availabilityData={this.props.availabilityData}
                              highlightData={this.props.highlightData} /> )
        }
    }
}

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

class Employee extends Component {
    constructor(props) {
        super(props);
    }

    highlightCalendar = () => {
        let data = {"name": this.props.name, highlightPrefs: true};
        this.props.getData(data)
    };

    render() {
         return (
            <div className={"emp"}>
                <div className={"emp-name"}>
                    {this.props.name}
                </div>
                <select>
                    <option value={"barista"}>Barista</option>
                    <option value={"manager"}>Manager</option>
                </select>
                <div onClick={this.highlightCalendar}>
                    ?
                </div>
            </div>
        )
    }
}

class Prefs extends Component {
    constructor(props) {
        super(props);
        this.state = {highlightPrefs: false, currentName: null};
    }

    // Ensures the prefs are only highlighted if they were previously unselected,
    // or if a new employee is selected.
    getData = (data) => {
        if (data["name"] == this.state.currentName) {
            data["highlightPrefs"] = !(this.state.highlightPrefs);
            this.setState((state) => {
                return (
                    {
                    highlightPrefs: !(this.state.highlightPrefs),
                    currentName: data["name"]
                    }
                )
            });
        } else {
            data["highlightPrefs"] = true;
            this.setState((state) => {
                return (
                    {
                    highlightPrefs: true,
                    currentName: data["name"]
                    }
                )
            });
        }
        this.props.getData(data);
    };

    render() {
        return (
            <div className={"schedule-prefs"}>
                <div className={"emp-header"}>Name</div>
                <div className={"emp-header"}>Roles</div>
                <div className={"emp-header"}>Prefs</div>
                <Employee name="Ann" getData={this.getData} />
                <Employee name="Lily" getData={this.getData} />
                <Employee name="Tim" getData={this.getData} />
                <Employee name="Jess" getData={this.getData} />
                <Employee name="Sara" getData={this.getData} />
                <Employee name="Jill" getData={this.getData} />
                <Employee name="Dan" getData={this.getData} />
                <Employee name="Kev" getData={this.getData} />
            </div>
        )
    }
}

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

class Scheduler extends Component {

    constructor(props) {
        super(props);
        this.state = {dataFromPrefs: null};
    }

    getPrefsData = (data) => {
        this.setState({dataFromPrefs: data});
    }

    render() {
        return (
            <div className={"modal-content"}>
                <Calendar dataFromPrefs={this.state.dataFromPrefs} />
                <Prefs getData={this.getPrefsData} />
                <Output />
            </div>
        )
    }
}

export default Scheduler;