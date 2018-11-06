import React, { Component } from 'react';
import axios from 'axios';

class SubmitPrefs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prefs: {
                "Ann": {
                    "Sunday": ["unselected", "unselected", "unselected"],
                    "Monday": ["unselected", "unselected"],
                    "Tuesday": ["unselected", "unselected"],
                    "Wednesday": ["unselected", "unselected"],
                    "Thursday": ["unselected", "unselected"],
                    "Friday": ["unselected", "unselected"],
                    "Saturday": ["unselected", "unselected", "unselected"]
                },
                "Lily": {
                    "Sunday": ["unselected", "unselected", "unselected"],
                    "Monday": ["unselected", "unselected"],
                    "Tuesday": ["unselected", "unselected"],
                    "Wednesday": ["unselected", "unselected"],
                    "Thursday": ["unselected", "unselected"],
                    "Friday": ["unselected", "unselected"],
                    "Saturday": ["unselected", "unselected", "unselected"]
                },
                "Tim": {
                    "Sunday": ["unselected", "unselected", "unselected"],
                    "Monday": ["unselected", "unselected"],
                    "Tuesday": ["unselected", "unselected"],
                    "Wednesday": ["unselected", "unselected"],
                    "Thursday": ["unselected", "unselected"],
                    "Friday": ["unselected", "unselected"],
                    "Saturday": ["unselected", "unselected", "unselected"]
                },
                "Jess": {
                    "Sunday": ["unselected", "unselected", "unselected"],
                    "Monday": ["unselected", "unselected"],
                    "Tuesday": ["unselected", "unselected"],
                    "Wednesday": ["unselected", "unselected"],
                    "Thursday": ["unselected", "unselected"],
                    "Friday": ["unselected", "unselected"],
                    "Saturday": ["unselected", "unselected", "unselected"]
                },
                "Sara": {
                    "Sunday": ["unselected", "unselected", "unselected"],
                    "Monday": ["unselected", "unselected"],
                    "Tuesday": ["unselected", "unselected"],
                    "Wednesday": ["unselected", "unselected"],
                    "Thursday": ["unselected", "unselected"],
                    "Friday": ["unselected", "unselected"],
                    "Saturday": ["unselected", "unselected", "unselected"]
                },
                "Jill": {
                    "Sunday": ["unselected", "unselected", "unselected"],
                    "Monday": ["unselected", "unselected"],
                    "Tuesday": ["unselected", "unselected"],
                    "Wednesday": ["unselected", "unselected"],
                    "Thursday": ["unselected", "unselected"],
                    "Friday": ["unselected", "unselected"],
                    "Saturday": ["unselected", "unselected", "unselected"]
                },
                "Dan": {
                    "Sunday": ["unselected", "unselected", "unselected"],
                    "Monday": ["unselected", "unselected"],
                    "Tuesday": ["unselected", "unselected"],
                    "Wednesday": ["unselected", "unselected"],
                    "Thursday": ["unselected", "unselected"],
                    "Friday": ["unselected", "unselected"],
                    "Saturday": ["unselected", "unselected", "unselected"]
                },
                "Kev": {
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
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.prefData == null) {
            return null;
        }
        else {
            let value = nextProps.prefData["value"];
            let day = nextProps.prefData["day"];
            let name = nextProps.prefData["name"];

            let prefsDict = this.state.prefs;
            prefsDict[name][day] = value;

            this.setState((state) => {
                return (
                    {
                        prefs: prefsDict
                    }
                )
            });
        }
    }

    submitPrefs = () => {
        console.log(this.state.prefs);
        axios.post("/receivePrefs", {
            prefs: this.state.prefs
        })
    }

    render () {
        return (
            <div>
                <button type="button" onClick={this.submitPrefs}>Create Schedule</button>
            </div>
        )
    }
}

export default SubmitPrefs;