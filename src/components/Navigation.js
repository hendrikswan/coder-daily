import React from 'react';

const Navigation = ({ topics, onTopicSelected }) => {
    const topicNodes = topics.map(topic => (
        <li
            key={topic.id}
            onClick={() => onTopicSelected({ topic })}
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
    onTopicSelected: React.PropTypes.func.isRequired,
};

export default Navigation;
