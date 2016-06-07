import React from 'react';
import Link from './Link';

const LinkList = ({ links, selectedTopic }) => {
    const linkNodes = links.map(link => (
        <Link
            key={link.id}
            link={link}
        />
    ));

    return (
        <div>
            <h4>{selectedTopic.name}</h4>
            <p>{selectedTopic.description}</p>
            {linkNodes}
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
};

export default LinkList;
