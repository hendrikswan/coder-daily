import React from 'react';

const Link = ({ link }) => {
    return (
        <div>{link.url}: {link.description}</div>
    );
};

Link.propTypes = {
    link: React.PropTypes.shape({
        url: React.PropTypes.string.isRequired,
        description: React.PropTypes.string.isRequired,
    }).isRequired,
};

export default Link;
