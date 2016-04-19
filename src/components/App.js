import React from 'react';
import Navigation from './Navigation';
import LinkList from './LinkList';
import store from '../store';
import { fetchLinks } from '../actions';


class App extends React.Component {
    constructor() {
        super();

        this.state = store.getState();

        store.subscribe(() => {
            this.setState(store.getState()); // eslint-disable-line react/no-set-state
        });
    }

    componentDidMount() {
        store.dispatch(fetchLinks());
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
