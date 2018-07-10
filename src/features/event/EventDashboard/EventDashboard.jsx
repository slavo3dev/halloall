import React, {Component} from 'react';
import {Grid, Button} from 'semantic-ui-react';
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
                    <Button positive content='Creat Event'/>
                    <EvenForm/>
                </Grid.Column>
            </Grid>
        )
    }
}

export default EventDashboard;