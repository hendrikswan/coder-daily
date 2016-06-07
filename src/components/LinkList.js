import React from 'react';
import Link from './Link';

const LinkList = ({ links }) => {
    const linkNodes = links.map(link => (
        <Link
            key={link.id}
            link={link}
        />
    ));

    return (
        <div>
            <h4>this is the link list:</h4>

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
};

export default LinkList;
