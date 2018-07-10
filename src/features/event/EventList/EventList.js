import React, {Component} from 'react';
import EventListItems from './EventLIstItems'

class EventList extends Component {
    render() {
        return (
            <div>
                <h1>Event List</h1>
                <EventListItems/>
                <EventListItems/>
                <EventListItems/>
            </div>
        )
    }
};

export default EventList;