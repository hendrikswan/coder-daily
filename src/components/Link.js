import React from 'react';

const Link = ({ link }) => {
    return (
        <div>{link.url}: {link.description} ({link.voteCount})</div>
    );
};

Link.propTypes = {
    link: React.PropTypes.shape({
        url: React.PropTypes.string.isRequired,
        description: React.PropTypes.string.isRequired,
        voteCount: React.PropTypes.number.isRequired,
    }).isRequired,
};

export default Link;
