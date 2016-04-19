import React, { PropTypes } from 'react';
import AppBar from 'material-ui/lib/app-bar';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import List from 'material-ui/lib/lists/list';


class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };
    }

    toggle = () => this.setState({ open: !this.state.open });

    render() {
        const topicNodes = this.props.topics.map(t => {
            return (
                <MenuItem
                    linkButton={true}
                    key={t.id}
                >
                    {t.name}
                </MenuItem>
            );
        });

        return (
            <div>
                <AppBar
                    title="Coder daily"
                    onTitleTouchTap={this.toggle}
                    onLeftIconButtonTouchTap={this.toggle}
                >
                </AppBar>

                <LeftNav open={this.state.open}
                    docked={false}
                    onRequestChange={open => this.setState({ open })}
                    onItemTouchTap={item => console.log(item)}
                >
                    <List>
                        {topicNodes}
                    </List>
                </LeftNav>
            </div>
        );
    }
}

Navigation.propTypes = {
    topics: PropTypes.arrayOf(
        React.PropTypes.shape({
            name: React.PropTypes.string.isRequired,
            description: React.PropTypes.string.isRequired,
            id: React.PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default Navigation;
