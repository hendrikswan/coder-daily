import React from 'react';

const Navigation = ({ topics }) => {
    const topicNodes = topics.map(topic => (
        <li
            key={topic.id}
        >
            {topic.name}
        </li>
    ));

    return (
        <ul>
            {topicNodes}
        </ul>
    );
};

Navigation.propTypes = {
    topics: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            name: React.PropTypes.string.isRequired,
        }),
    ),
};

export default Navigation;
