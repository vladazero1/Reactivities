import { Button, Icon, Item, ItemContent, ItemDescription, ItemGroup, ItemHeader, ItemImage, Segment } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import { Link } from 'react-router-dom';

interface Props {
    activity: Activity
}

export default function ActivityListItem({activity}: Props) {

    return (
        <Segment.Group>
            <Segment>
                <ItemGroup>
                    <Item>
                        <ItemImage size='tiny' circular src='/assets/user.png' />
                        <ItemContent>
                            <ItemHeader as={Link} to={`/activities/${activity.id}`}>{activity.title}</ItemHeader>
                            <ItemDescription>Hosted by Bob</ItemDescription>
                        </ItemContent>
                    </Item>
                </ItemGroup>
            </Segment>
            <span>
                <Icon name='clock' /> {activity.date}
                <Icon name='marker' /> {activity.venue}
            </span>
            <Segment secondary>
                Attendees go here
            </Segment>
            <Segment clearing>
                <span>{activity.description}</span>
                <Button
                    as={Link}
                    to={`/activities/${activity.id}`}
                    color='teal'
                    floated='right'
                    content='View'
                />
            </Segment>
        </Segment.Group>
    )
}