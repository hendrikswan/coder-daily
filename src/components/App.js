import React from 'react';
import Navigation from './Navigation';
import LinkList from './LinkList';
import Form from './Form';
import store from '../store';
import { init, startAdd, add, selectTopic } from '../actions';


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

    onTopicSelected = ({ topic }) => {
        console.log('topic selected: ', topic);
        store.dispatch(selectTopic({ topic }));
    }

    onAddConfirm = ({ url, description }) => {
        console.log(url, description);
        store.dispatch(add({
            url,
            description,
        }));
    }

    onAddCancel = ({ url, description }) => {
        console.log('cancel');
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
            view = (<Form
                onAdd={this.onAddConfirm}
                onCancel={this.onAddCancel}
            />);
        }

        return (
            <div>
                <Navigation
                    topics={this.state.topics}
                    onTopicSelected={this.onTopicSelected}
                />

                {view}
            </div>
        );
    }
}

export default App;
