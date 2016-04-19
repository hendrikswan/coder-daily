import React, { PropTypes } from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import capitalize from 'capitalize';
import Divider from 'material-ui/lib/divider';

class LinkList extends React.Component {

    // toggle = () => this.setState({ open: !this.state.open });

    render() {
        const linkNodes = this.props.links.map(link => {
            return (
                <ListItem
                    key={link.url}
                    primaryText={link.url}
                    secondaryText={link.description}
                />
            );
        });

        return (
            <div>
                <Card style={{
                    marginTop: 15,
                }}>
                    <CardHeader
                      title={capitalize(this.props.topic.name || '')}
                      subtitle={this.props.topic.description}
                    />
                    <Divider />
                    <List>
                        {linkNodes}
                    </List>
                </Card>
            </div>
        );
    }
}

LinkList.propTypes = {
    links: PropTypes.arrayOf(
        React.PropTypes.shape({
            url: React.PropTypes.string.isRequired,
            description: React.PropTypes.string.isRequired,
            // id: React.PropTypes.number.isRequired,
        })
    ).isRequired,
    topic: PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        description: React.PropTypes.string.isRequired,
    }),
};

export default LinkList;
