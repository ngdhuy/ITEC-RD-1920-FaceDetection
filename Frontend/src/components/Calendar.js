import React, {Component} from 'react';
import {FullCalendar} from 'primereact/fullcalendar';
import {EventService} from '../service/EventService';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

export class Calendar extends Component {

    constructor() {
        super();
        this.state = {
            events: [],
            options: {
                plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
                defaultView: 'dayGridMonth',
                header: {
                    left: 'prev,next',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                },
                editable: true
            }
        };
        this.eventService = new EventService();
    }

    componentDidMount() {
        this.eventService.getEvents().then(data => this.setState({events: data}));
    }

    render() {

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Calendar</h1>
                    </div>
                </div>

                <div className="content-section implementation">
                    <FullCalendar  events={this.state.events} options={this.state.options} />
                </div>

            </div>
        );
    }
}
