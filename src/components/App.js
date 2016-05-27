import React from 'react';
import Navigation from './Navigation';
import store from '../store';
import { init, selectTopic } from '../actions';
import { browserHistory } from 'react-router';
import LinkList from './LinkList';
import Form from './Form';


class App extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = store.getState();

        store.subscribe(() => {
            this.setState(store.getState());
        });
    }

    componentDidMount() {
        store.dispatch(init());
    }

    onTopicSelected = ({ topic }) => {
        store.dispatch(selectTopic({ topic }));
    }

    render() {

        let component;

        if (this.state.adding) {
            component = (
                <Form />
            );
        } else {
            component = (
                <LinkList />
            );
        }


        return (
            <div>
                <Navigation
                    topics={this.state.topics}
                    onTopicSelected={this.onTopicSelected}
                />

                {component}
            </div>
        );
    }
}

App.contextTypes = {
  router: React.PropTypes.object,
};

export default App;
