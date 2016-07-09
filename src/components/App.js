import React, { PropTypes } from 'react';
import Navigation from '../containers/NavigationContainer';
import LinkList from './LinkList';


class App extends React.Component {
    componentWillMount() {
        if (!this.props.initialized) {
            this.props.fetchTopics();
        }
    }

    render() {
        return (
            <div>
                <Navigation />
                <LinkList
                    links={this.props.links}
                    selectedTopic={this.props.selectedTopic}
                    // onVoteUp={this.onVoteUp}
                    // onVoteDown={this.onVoteDown}
                />
            </div>
        );
    }
}

App.propTypes = {
    selectedTopic: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    }),
    links: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            url: React.PropTypes.string.isRequired,
            description: React.PropTypes.string.isRequired,
            voteCount: React.PropTypes.number.isRequired,
        }).isRequired
    ).isRequired,
    initialized: PropTypes.bool.isRequired,
    fetchTopics: PropTypes.func.isRequired,
};

export default App;
