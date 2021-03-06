import React, { Component } from 'react';
import Employee from './Prefs/Employee';
import SubmitPrefs from './Prefs/SubmitPrefs';

class Prefs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            highlightPrefs: false,
            currentName: null
        };
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
                <Employee name="Ann" getData={this.getData} updatedEmp={this.props.updatedEmp} />
                <Employee name="Lily" getData={this.getData} updatedEmp={this.props.updatedEmp} />
                <Employee name="Tim" getData={this.getData} updatedEmp={this.props.updatedEmp} />
                <Employee name="Jess" getData={this.getData} updatedEmp={this.props.updatedEmp} />
                <Employee name="Sara" getData={this.getData} updatedEmp={this.props.updatedEmp} />
                <Employee name="Jill" getData={this.getData} updatedEmp={this.props.updatedEmp} />
                <Employee name="Dan" getData={this.getData} updatedEmp={this.props.updatedEmp} />
                <Employee name="Kev" getData={this.getData} updatedEmp={this.props.updatedEmp} />
                <SubmitPrefs prefData={this.props.updatedEmp} />
            </div>
        )
    }
}

export default Prefs;
