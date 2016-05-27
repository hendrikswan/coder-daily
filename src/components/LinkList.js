import React, { PropTypes } from 'react';
import List from 'material-ui/lib/lists/list';
import capitalize from 'capitalize';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import Link from './Link';
// import {
//     init,
//     startAdd,
//     cancelAdd,
//     add,
//     selectTopic,
//     voteLink,
// } from '../actions';

class LinkList extends React.Component {
    // constructor(props, context) {
    //     super(props, context);
    //     //
    //     // this.state = store.getState();
    //     //
    //     // store.subscribe(() => {
    //     //     this.setState(store.getState()); // eslint-disable-line react/no-set-state
    //     // });
    // }

    // onAdd = () => {
    //     store.dispatch(startAdd());
    //     this.context.router.push('/add');
    // }

    // onVoteUp = ({ link }) => {
    //     store.dispatch(voteLink({ link, increment: 1 }));
    // }
    //
    // onVoteDown = ({ link }) => {
    //     store.dispatch(voteLink({ link, increment: -1 }));
    // }

    render() {
        const linkNodes = this.props.links.map(link => (
            <Link
                key={link.id}
                link={link}
                onVoteDown={this.props.onVoteDown}
                onVoteUp={this.props.onVoteUp}
            />
        ));

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
                    >{capitalize(this.props.selectedTopic.name || '')}</h1>

                    <h3
                        style={{
                            color: '#666',
                            marginTop: -20,
                            fontWeight: '100',
                        }}
                    >
                        {this.props.selectedTopic.description}
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

LinkList.propTypes = {
    links: React.PropTypes.array.isRequired,
    onVoteUp: React.PropTypes.func.isRequired,
    onVoteDown: React.PropTypes.func.isRequired,
    selectedTopic: React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        description: React.PropTypes.string.isRequired,
        id: React.PropTypes.string.isRequired,
    }),
};


export default LinkList;
