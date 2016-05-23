import React, { PropTypes } from 'react';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Card from 'material-ui/lib/card/card';
import capitalize from 'capitalize';
import UpArrow from 'material-ui/lib/svg-icons/hardware/keyboard-arrow-up';
import DownArrow from 'material-ui/lib/svg-icons/hardware/keyboard-arrow-down';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import store from '../store';
import {
    init,
    startAdd,
    cancelAdd,
    add,
    selectTopic,
    voteLink,
} from '../actions';

class LinkList extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = store.getState();

        store.subscribe(() => {
            this.setState(store.getState()); // eslint-disable-line react/no-set-state
        });
    }

    onAdd = () => {
        store.dispatch(startAdd());
        this.context.router.push('/add');
    }

    onVoteUp = ({ link }) => {
        store.dispatch(voteLink({ link, increment: 1 }));
    }

    onVoteDown = ({ link }) => {
        store.dispatch(voteLink({ link, increment: -1 }));
    }

    render() {
        const linkNodes = this.state.links.map(link => {
            return (
                <Card
                    key={link.id}
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
                            <a
                                href="#"
                                onClick={
                                    (e) => {
                                        e.preventDefault();
                                        this.onVoteUp({ link });
                                    }
                            }>
                                <UpArrow
                                    style={{
                                        width: 50,
                                        height: 50,
                                    }}
                                />
                            </a>

                            <div
                                style={{
                                    fontSize: 20,
                                    textAlign: 'center',
                                }}
                            >
                            {link.voteCount}
                            </div>

                            <a
                                href="#"
                                onClick={
                                    (e) => {
                                        e.preventDefault();
                                        this.onVoteDown({ link });
                                    }
                            }>
                                <DownArrow
                                    style={{
                                        width: 50,
                                        height: 50,
                                    }}
                                />
                            </a>
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
                    >{capitalize(this.state.selectedTopic.name || '')}</h1>

                    <h3
                        style={{
                            color: '#666',
                            marginTop: -20,
                            fontWeight: '100',
                        }}
                    >
                        {this.state.selectedTopic.description}
                    </h3>

                    <FloatingActionButton
                        style={{ position: 'fixed', right: 30, top: 110 }}
                        onMouseUp={this.onAdd}
                    >
                        <ContentAdd />
                    </FloatingActionButton>
                </div>



                <List
                    style={{
                        marginTop: 5,
                        backgroundColor: 'transparent',
                    }}
                >
                    {linkNodes}
                </List>
            </div>
        );
    }
}

LinkList.contextTypes = {
  router: React.PropTypes.object,
};


export default LinkList;
