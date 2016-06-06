import React, { PropTypes } from 'react';
import List from 'material-ui/List/List';
import capitalize from 'capitalize';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Link from './Link';
import Loader from './Loader';

const LinkList = ({ links, selectedTopic, onVoteUp, onVoteDown, onAdd, loadingLinks }) => {
    if (loadingLinks) {
        return (
            <Loader />
        );
    }

    const linkNodes = links.map(link => (
        <Link
            key={link.id}
            link={link}
            onVoteDown={onVoteDown}
            onVoteUp={onVoteUp}
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
                >{capitalize(selectedTopic.name || '')}</h1>

                <h3
                    style={{
                        color: '#666',
                        marginTop: -20,
                        fontWeight: '100',
                    }}
                >
                    {selectedTopic.description}
                </h3>

                <FloatingActionButton
                    style={{ position: 'fixed', right: 30, top: 110 }}
                    onMouseUp={onAdd}
                    secondary={true}
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
};

LinkList.propTypes = {
    links: PropTypes.array.isRequired,
    onVoteUp: PropTypes.func.isRequired,
    onVoteDown: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired,
    selectedTopic: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }),
    loadingLinks: PropTypes.bool.isRequired,
};


export default LinkList;
