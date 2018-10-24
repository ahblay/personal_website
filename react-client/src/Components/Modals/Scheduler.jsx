import React, { Component } from 'react';

const Weekend = () => {
    return (
        <div class="day">
            <div class="shift weekend">
                <p>Barista (4)</p>
                <p>Manager (1)</p>
            </div>
            <div class="shift weekend">
                <p>Barista (3)</p>
                <p>Manager (1)</p>
            </div>
            <div class="shift weekend">
                <p>Barista (2)</p>
                <p>Manager (1)</p>
            </div>
        </div>
    );
};

const Weekday = () => {
    return (
        <div class="day">
            <div class="shift weekday">
                <p>Barista (3)</p>
                <p>Manager (1)</p>
            </div>
            <div class="shift weekday">
                <p>Barista (2)</p>
                <p>Manager (1)</p>
            </div>
        </div>
    );
};

const Employee = ({ name }) => {
    return (
        <div class="emp">
            <div class="emp-name">
                { name }
            </div>
            <select>
                <option value="barista">Barista</option>
                <option value="manager">Manager</option>
            </select>
            <div onClick={ this.highlightCalendar }>
                ?
            </div>
        </div>
    )
}

class Scheduler extends Component {
    render() {
        return (
            <div class="modal-content">
                <div class="schedule-calendar">
                    <div class="day-name">Sunday</div>
                    <div class="day-name">Monday</div>
                    <div class="day-name">Tuesday</div>
                    <div class="day-name">Wednesday</div>
                    <div class="day-name">Thursday</div>
                    <div class="day-name">Friday</div>
                    <div class="day-name">Saturday</div>
                    <Weekend />
                    <Weekday />
                    <Weekday />
                    <Weekday />
                    <Weekday />
                    <Weekday />
                    <Weekend />
                </div>

                <div class="schedule-prefs">
                    <div class="emp-header">Name</div>
                    <div class="emp-header">Roles</div>
                    <div class="emp-header">Prefs</div>
                    <Employee name={ "Ann" } />
                    <Employee name={ "Lily" } />
                    <Employee name={ "Tim" } />
                    <Employee name={ "Sara" } />
                    <Employee name={ "Jess" } />
                    <Employee name={ "Jill" } />
                    <Employee name={ "Dan" } />
                    <Employee name={ "Kev" } />
                </div>

                <div class="schedule-output">
                    <div class="day-name">Sunday</div>
                    <div class="day-name">Monday</div>
                    <div class="day-name">Tuesday</div>
                    <div class="day-name">Wednesday</div>
                    <div class="day-name">Thursday</div>
                    <div class="day-name">Friday</div>
                    <div class="day-name">Saturday</div>
                    <div class="day">
                        <div class="shift weekend"></div>
                        <div class="shift weekend"></div>
                        <div class="shift weekend"></div>
                    </div>
                    <div class="day">
                        <div class="shift weekday"></div>
                        <div class="shift weekday"></div>
                    </div>
                    <div class="day">
                        <div class="shift weekday"></div>
                        <div class="shift weekday"></div>
                    </div>
                    <div class="day">
                        <div class="shift weekday"></div>
                        <div class="shift weekday"></div>
                    </div>
                    <div class="day">
                        <div class="shift weekday"></div>
                        <div class="shift weekday"></div>
                    </div>
                    <div class="day">
                        <div class="shift weekday"></div>
                        <div class="shift weekday"></div>
                    </div>
                    <div class="day">
                        <div class="shift weekend"></div>
                        <div class="shift weekend"></div>
                        <div class="shift weekend"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Scheduler;