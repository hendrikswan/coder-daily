import React, { PropTypes } from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import capitalize from 'capitalize';
import Divider from 'material-ui/lib/divider';
import UpArrow from 'material-ui/lib/svg-icons/hardware/keyboard-arrow-up';
import DownArrow from 'material-ui/lib/svg-icons/hardware/keyboard-arrow-down';

class LinkList extends React.Component {

    // toggle = () => this.setState({ open: !this.state.open });

    render() {
        const linkNodes = this.props.links.map(link => {
            return (
                <div
                    key={link.url}
                    style={{
                        display: 'flex',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <UpArrow
                            style={{
                                width: 50,
                                height: 50,
                            }}
                        />

                        <div
                            style={{
                                fontSize: 20,
                                textAlign: 'center',
                            }}
                        >
                        50
                        </div>

                        <DownArrow
                            style={{
                                width: 50,
                                height: 50,
                            }}
                        />
                    </div>
                    <ListItem
                        primaryText={link.url}
                        secondaryText={link.description}
                    />
                </div>
            );
        });

        return (
            <div>
                <Card style={{
                    marginTop: 15,
                }}>
                    <div
                        style={{
                            padingTop: 10,
                            paddingBottom: 10,
                            paddingLeft: 15,
                        }}
                    >
                        <h1
                            style={{
                                color: '#222',
                            }}
                        >{this.props.topic.name}</h1>

                        <h3>
                            {this.props.topic.description}
                        </h3>
                    </div>
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
