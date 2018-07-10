import React, {Component} from 'react';
import {List, Image} from 'semantic-ui-react'

class EventListAttendee extends Component {
    render() {
        return (
            <List.Item>
                <Image as='a' size='mini' circular src='http://placekitten.com/200/300'/>
            </List.Item>
        )
    }
};

export default EventListAttendee;