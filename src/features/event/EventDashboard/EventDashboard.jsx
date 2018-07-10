import React, {Component} from 'react';
import {Grid} from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import EvenForm from '../EventForm/EventForm'

class EventDashboard extends Component {
    render() {
        return (
            <Grid>
                <Grid.Column width={10}>
                    <EventList/>
                </Grid.Column>
                <Grid.Column width={6}>
                    <h2>Right Column</h2>
                    <EvenForm/>
                </Grid.Column>
            </Grid>
        )
    }
}

export default EventDashboard;