import React, { Component } from 'react';

class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prefs: {
                "Sunday": ["unselected", "unselected", "unselected"],
                "Monday": ["unselected", "unselected"],
                "Tuesday": ["unselected", "unselected"],
                "Wednesday": ["unselected", "unselected"],
                "Thursday": ["unselected", "unselected"],
                "Friday": ["unselected", "unselected"],
                "Saturday": ["unselected", "unselected", "unselected"]
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.updatedEmp == null) {
            return null;
        }
        else if (nextProps.updatedEmp["name"] != nextProps.name) {
            return null;
        }
        else if (nextProps.updatedEmp["name"] == nextProps.name) {
            let value = nextProps.updatedEmp["value"];
            let day = nextProps.updatedEmp["day"];

            let prefsDict = this.state.prefs;
            prefsDict[day] = value;

            this.setState((state) => {
                return (
                    {
                        prefs: prefsDict
                    }
                )
            });
        }
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

export default Employee;
