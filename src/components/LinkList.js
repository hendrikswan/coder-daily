import React, { PropTypes } from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import capitalize from 'capitalize';
import Divider from 'material-ui/lib/divider';
import UpArrow from 'material-ui/lib/svg-icons/hardware/keyboard-arrow-up';
import DownArrow from 'material-ui/lib/svg-icons/hardware/keyboard-arrow-down';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';

class LinkList extends React.Component {

    // toggle = () => this.setState({ open: !this.state.open });

    render() {
        const linkNodes = this.props.links.map(link => {
            return (
                <Card
                    key={link.url}
                    style={{
                        marginBottom: 10,
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            marginTop: 15,
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
                </Card>
            );
        });

        return (
            <div>
                <div
                    style={{
                        // paddingTop: 10,
                        paddingLeft: 15,
                        fontFamily: 'Roboto',
                    }}
                >
                    <h1
                        style={{
                            color: '#222',
                            fontWeight: '100',
                        }}
                    >{capitalize(this.props.topic.name || '')}</h1>

                    <h3
                        style={{
                            color: '#666',
                            marginTop: -20,
                            fontWeight: '100',
                        }}
                    >
                        {this.props.topic.description}
                    </h3>

                    <FloatingActionButton
                        style={{ position: 'fixed', right: 30, top: 110 }}
                        onMouseUp={this.props.onAdd}
                    >
                        <ContentAdd />
                    </FloatingActionButton>
                </div>



                <List
                    style={{
                        marginTop: 5,
                    }}
                >
                    {linkNodes}
                </List>
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
