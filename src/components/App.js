import React from 'react';
import Navigation from './Navigation';
import LinkList from './LinkList';

class App extends React.Component {
    componentWillMount() {
        if (!this.props.initialized) {
            this.props.fetchTopics();
        }
    }

    handleTopicSelected = ({ topic }) => {
        //onTopicSelected({ topic });
        // this.setState({
        //     selectedTopic,
        //     links: selectedTopicLinks,
        // });
    }

    onVoteUp = ({ link }) => {
        // link.voteCount += 1; // eslint-disable-line
        // this.setState({
        //     selectedTopicLinks,
        // });
    }

    onVoteDown = ({ link }) => {
        // link.voteCount -= 1; // eslint-disable-line
        // this.setState({
        //     selectedTopicLinks,
        // });
    }

    render() {
        return (
            <div>
                <Navigation
                    topics={this.props.topics}
                    onTopicSelected={this.handleTopicSelected}
                />
                <LinkList
                    links={this.props.links}
                    selectedTopic={this.props.selectedTopic}
                    onVoteUp={this.onVoteUp}
                    onVoteDown={this.onVoteDown}
                />
            </div>
        );
    }
}

App.propTypes = {
    topics: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            name: React.PropTypes.string.isRequired,
            description: React.PropTypes.string.isRequired,
            id: React.PropTypes.number.isRequired,
        })
    ).isRequired,
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
    initialized: React.PropTypes.bool.isRequired,
    fetchTopics: React.PropTypes.func.isRequired,
};

export default App;
