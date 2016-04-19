import React from 'react';
import Navigation from './Navigation';
import LinkList from './LinkList';


class App extends React.Component {
    constructor() {
        super();

        this.state = {
            topics: [],
            links: [],
        };

        fetch('http://localhost:3000/topics')
        .then(response => response.json())
        .then(topics => {
            this.setState({ topics });

            fetch(`http://localhost:3000/topics/${topics[0].id}/links`)
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
                    links={this.state.links}
                />
            </div>
        );
    }
}

export default App;
