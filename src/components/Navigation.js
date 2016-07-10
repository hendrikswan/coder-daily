import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import List from 'material-ui/List/List';
import Auth from '../components/Auth';

class Navigation extends React.Component {
    state = {
        open: false,
    };

    toggle = () => this.setState({ open: !this.state.open });

    render() {
        const topicNodes = this.props.topics.map(topic => {
            return (
                <MenuItem
                    linkButton={true}
                    key={topic.id}
                    onTouchTap={() => {
                        this.props.onTopicSelected({ topic });
                        this.setState({ open: false });
                    }}
                >
                    {topic.name}
                </MenuItem>
            );
        });

        return (
            <div>
                <AppBar
                    title="Coder daily"
                    onTitleTouchTap={this.toggle}
                    onLeftIconButtonTouchTap={this.toggle}
                    iconElementRight={(
                        <div
                            style={{
                                marginTop: 5,
                            }}
                        >
                            <Auth />
                        </div>
                    )}
                >
                </AppBar>

                <Drawer open={this.state.open}
                    docked={false}
                    onRequestChange={open => this.setState({ open })}
                >
                    <List>
                        {topicNodes}
                    </List>
                </Drawer>
            </div>
        );
    }
}

Navigation.propTypes = {
    topics: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
    onTopicSelected: PropTypes.func.isRequired,
};

export default Navigation;
