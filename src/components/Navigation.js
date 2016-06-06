import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import List from 'material-ui/List/List';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import Auth from '../containers/AuthContainer';


class Navigation extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false,
        };
    }

    toggle = () => this.setState({ open: !this.state.open });

    loadData(props) {
        // this.selectedTop
        if (props.selectedTopicName || props.topics.length === 0) {
            this.props.loadTopic(props.selectedTopicName);
        }
    }

    componentWillMount() {
        this.loadData(this.props);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedTopicName !== this.props.selectedTopicName) {
            // debugger;
            this.loadData(nextProps);
        }
    }

    render() {
        const topicNodes = this.props.topics.map(topic => {
            return (
                <MenuItem
                    linkButton={true}
                    key={topic.id}
                    // href={"#/topics/" + topic.id}
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
                    onItemTouchTap={item => console.log(item)}
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
            id: PropTypes.string.isRequired,
        })
    ).isRequired,
    onTopicSelected: PropTypes.func.isRequired,
    selectedTopicName: PropTypes.string,
    loadTopic: PropTypes.func.isRequired,
};

export default Navigation;
