import React from 'react';
import Navigation from './Navigation';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            topics: [],
        };

        fetch('http://localhost:3000/topics')
        .then(response => response.json())
        .then(topics => {
            this.setState({ topics });
        });
    }

    render() {
        return (
            <div>
                <Navigation
                    topics={this.state.topics}
                />
                hello there...
            </div>
        );
    }
}

export default App;
