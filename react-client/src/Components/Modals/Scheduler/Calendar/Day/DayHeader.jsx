import React, { Component } from 'react';

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

export default DayHeader;
