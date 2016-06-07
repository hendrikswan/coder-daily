import React from 'react';
import Link from './Link';
import List from 'material-ui/List/List';

const LinkList = ({ links, selectedTopic, onVoteUp, onVoteDown }) => {
    const linkNodes = links.map(link => (
        <Link
            key={link.id}
            link={link}
            onVoteUp={onVoteUp}
            onVoteDown={onVoteDown}
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
                >{selectedTopic.name}</h1>

                <h3
                    style={{
                        color: '#666',
                        marginTop: -20,
                        fontWeight: '100',
                    }}
                >
                    {selectedTopic.description}
                </h3>
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
};

LinkList.propTypes = {
    links: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            url: React.PropTypes.string.isRequired,
            description: React.PropTypes.string.isRequired,
            voteCount: React.PropTypes.number.isRequired,
        }).isRequired
    ).isRequired,
    selectedTopic: React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        description: React.PropTypes.string.isRequired,
    }),
    onVoteUp: React.PropTypes.func.isRequired,
    onVoteDown: React.PropTypes.func.isRequired,
};

export default LinkList;
