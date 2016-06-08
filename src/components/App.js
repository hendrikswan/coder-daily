import React from 'react';
import Navigation from './Navigation';
import LinkList from './LinkList';
import store from '../store';
import { fetchTopics } from '../actions';

class App extends React.Component {
    componentWillMount() {
        this.state = store.getState();

        store.subscribe(() => {
            this.setState(store.getState()); // eslint-disable-line react/no-set-state
        });

        if (!this.state.main.initialized) {
            store.dispatch(fetchTopics());
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
                    topics={this.state.main.topics}
                    onTopicSelected={this.handleTopicSelected}
                />
                <LinkList
                    links={this.state.main.links}
                    selectedTopic={this.state.main.selectedTopic}
                    onVoteUp={this.onVoteUp}
                    onVoteDown={this.onVoteDown}
                />
            </div>
        );
    }
}

export default App;
