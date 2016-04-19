import React from 'react';
import Navigation from './Navigation';
import LinkList from './LinkList';
import Form from './Form';
import store from '../store';
import { init, startAdd } from '../actions';


class App extends React.Component {
    constructor() {
        super();

        this.state = store.getState();

        store.subscribe(() => {
            this.setState(store.getState()); // eslint-disable-line react/no-set-state
        });
    }

    componentDidMount() {
        store.dispatch(init());
    }

    onAdd = () => {
        store.dispatch(startAdd());
    }

    render() {
        let view = (
            <LinkList
                topic={this.state.selectedTopic}
                links={this.state.links}
                onAdd={this.onAdd}
            />
        );

        if (this.state.adding) {
            view = <Form />;
        }

        return (
            <div>
                <Navigation
                    topics={this.state.topics}
                />

                {view}
            </div>
        );
    }
}

export default App;
