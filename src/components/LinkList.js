import React, { PropTypes } from 'react';
import MenuItem from 'material-ui/lib/menus/menu-item';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Card from 'material-ui/lib/card/card';

class LinkList extends React.Component {

    // toggle = () => this.setState({ open: !this.state.open });

    render() {
        const linkNodes = this.props.links.map(link => {
            return (
                <ListItem
                    key={link.url}
                    primaryText={link.url}
                />
            );
        });

        return (
            <Card style={{
                marginTop: 15,
            }}>
                <List>
                    {linkNodes}
                </List>
            </Card>
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
};

export default LinkList;
