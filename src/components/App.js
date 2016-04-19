import React from 'react';
import Navigation from './Navigation';
import LinkList from './LinkList';


class App extends React.Component {
    constructor() {
        super();

        this.state = {
            topics: [],
            links: [],
            selectedTopic: {},
        };

        fetch('http://localhost:3000/topics')
        .then(response => response.json())
        .then(topics => {
            const selectedTopic = topics[0];
            this.setState({
                topics,
                selectedTopic,
            });

            fetch(`http://localhost:3000/topics/${selectedTopic.id}/links`)
            .then(linkResponse => linkResponse.json())
            .then(links => this.setState({ links }));
        });
    }

    render() {
        return (
            <div>
                <Navigation
                    topics={this.state.topics}
                />

                <LinkList
                    topic={this.state.selectedTopic}
                    links={this.state.links}
                />
            </div>
        );
    }
}

export default App;
