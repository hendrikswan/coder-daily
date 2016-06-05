import React from 'react';
import Navigation from '../containers/NavigationContainer';
import Loader from './Loader';

class App extends React.Component {
    render() {
        if (!this.props.initialized) {
            return (
                <Loader />
            );
        }

        return (
            <div>
                <Navigation
                    selectedTopicName={this.props.selectedTopicName}
                />

                {this.props.children}
            </div>
        );
    }

    componentWillMount() {
        this.props.checkAuth();
        if (!this.props.initialized) {
            this.props.init();
        }
    }
}


App.propTypes = {
    checkAuth: React.PropTypes.func.isRequired,
    children: React.PropTypes.element,
    initialized: React.PropTypes.bool.isRequired,
    init: React.PropTypes.func.isRequired,
    selectedTopicName: React.PropTypes.string,
};

export default App;
