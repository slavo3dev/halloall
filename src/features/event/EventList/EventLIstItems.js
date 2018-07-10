import React, {Component} from 'react';
import {Segment, Item, Icon, List, Button} from 'semantic-ui-react';
import EventListAttendee from './EventLIstAttendee'

class EventListItems extends Component {
    render() {
        return (
            <div>
                <Segment.Group>
                    <Segment>
                        <Item.Group>
                            <Item>
                                <Item.Image size="tiny" circular src="http://placekitten.com/200/300"/>
                                <Item.Content>
                                    <Item.Header as="a">Event Title</Item.Header>
                                    <Item.Description>
                                        Hosted by
                                        <a>hosted by</a>
                                    </Item.Description>
                                </Item.Content>
                            </Item>
                        </Item.Group>
                    </Segment>
                    <Segment>
                        <span>
                            <Icon name="clock"/>
                            date |
                            <Icon name="marker"/>
                            time
                        </span>
                    </Segment>
                    <Segment secondary>
                        <List horizontal>
                            <EventListAttendee/>
                        </List>
                    </Segment>
                    <Segment clearing>
                        <Button as="a" color="teal" floated="right" content="View"/>
                    </Segment>
                </Segment.Group>
            </div>
        )
    }
};
export default EventListItems;
