import React from 'react';
import Navigation from './Navigation';
import LinkList from './LinkList';

const links = [{
    id: 1,
    url: 'http://google.co.za',
    description: 'the good \'ol search engine',
    voteCount: 10,
    topicId: 1,
}, {
    id: 2,
    url: 'http://tagtree.io',
    description: 'my old site',
    voteCount: 3,
    topicId: 2,
}];

const topics = [{
    name: 'Apps',
    description: 'Links to interesting apps',
    id: 1,
}, {
    name: 'Libraries',
    description: 'Links to interesting libraries',
    id: 2,
}];

let selectedTopic;
let selectedTopicLinks;

function onTopicSelected({ topic }) {
    selectedTopic = topic;
    selectedTopicLinks = links.filter(l => l.topicId === topic.id);
}

onTopicSelected({ topic: topics[0] });

class App extends React.Component {
    state = {
        topics,
        selectedTopic,
        links: selectedTopicLinks,
    };

    handleTopicSelected = ({ topic }) => {
        onTopicSelected({ topic });
        this.setState({
            selectedTopic,
            links: selectedTopicLinks,
        });
    }

    onVoteUp = ({ link }) => {
        link.voteCount += 1; // eslint-disable-line
        this.setState({
            selectedTopicLinks,
        });
    }

    onVoteDown = ({ link }) => {
        link.voteCount -= 1; // eslint-disable-line
        this.setState({
            selectedTopicLinks,
        });
    }

    render() {
        return (
            <div>
                <Navigation
                    topics={this.state.topics}
                    onTopicSelected={this.handleTopicSelected}
                />
                <LinkList
                    links={this.state.links}
                    selectedTopic={this.state.selectedTopic}
                    onVoteUp={this.onVoteUp}
                    onVoteDown={this.onVoteDown}
                />
            </div>
        );
    }
}

export default App;
