import React, { PropTypes } from 'react';

function Navigation({ topics }) {
    const topicNodes = topics.map(t => {
        return (
            <div
                key={t.id}
            >
                {t.name}
            </div>
        );
    });

    return (
        <div class="topic-list">
            {topicNodes}
        </div>
    );
}

Navigation.propTypes = {
    topics: PropTypes.arrayOf(
        React.PropTypes.shape({
            name: React.PropTypes.string.isRequired,
            description: React.PropTypes.string.isRequired,
            id: React.PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default Navigation;
