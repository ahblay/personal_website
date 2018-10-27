import React, { Component } from 'react';

class Weekend extends Component {
    render() {
        return (
            <div className={"day"}>
                <div className={"shift weekend"}>
                    <p>Barista (4)</p>
                    <p>Manager (1)</p>
                </div>
                <div className={"shift weekend"}>
                    <p>Barista (3)</p>
                    <p>Manager (1)</p>
                </div>
                <div className={"shift weekend"}>
                    <p>Barista (2)</p>
                    <p>Manager (1)</p>
                </div>
            </div>
        )
    }
}

class Weekday extends Component {
    render() {
        return (
            <div className={"day"}>
                <div className={"shift weekday"}>
                    <p>Barista (3)</p>
                    <p>Manager (1)</p>
                </div>
                <div className={"shift weekday"}>
                    <p>Barista (2)</p>
                    <p>Manager (1)</p>
                </div>
            </div>
        );
    };
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
    }

    render() {
        let showPrefs = this.state.showPrefs;
        let status = (this.props.highlightData ? this.state.status[this.props.highlightData.name] : "unselected");

        return (
            <div className={"day-name " + (showPrefs ? status : "") } onClick={this.changeDayPref}>{this.props.name}
                {this.props.name}
            </div>
        )
    }
}

class Calendar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("Calendar:")
        console.log(this.props.dataFromPrefs)

        return (
            <div className={"schedule-calendar"}>
                <DayHeader name="Sunday" highlightData={this.props.dataFromPrefs} />
                <DayHeader name="Monday" highlightData={this.props.dataFromPrefs} />
                <DayHeader name="Tuesday" highlightData={this.props.dataFromPrefs} />
                <DayHeader name="Wednesday" highlightData={this.props.dataFromPrefs} />
                <DayHeader name="Thursday" highlightData={this.props.dataFromPrefs} />
                <DayHeader name="Friday" highlightData={this.props.dataFromPrefs} />
                <DayHeader name="Saturday" highlightData={this.props.dataFromPrefs} />
                <Weekend />
                <Weekday />
                <Weekday />
                <Weekday />
                <Weekday />
                <Weekday />
                <Weekend />
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