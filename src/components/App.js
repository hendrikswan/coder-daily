import React from 'react';
import Navigation from './Navigation';
import Loader from './Loader';

class App extends React.Component {
    render() {
        if (!this.props.topics || this.props.topics.length === 0) {
            return (
                <Loader />
            );
        }

        return (
            <div>
                <Navigation
                    topics={this.props.topics}
                    onTopicSelected={this.props.onTopicSelected}
                />

                {this.props.children}
            </div>
        );
    }

    loadData(props) {
        // this.selectedTop
        if (props.selectedTopicName || props.topics.length === 0) {
            this.props.loadTopic(props.selectedTopicName);
        }
    }

    componentWillMount() {
        console.log('APP MOUNTING!!!');
        this.loadData(this.props);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedTopicName !== this.props.selectedTopicName) {
            // debugger;
            this.loadData(nextProps);
        }
    }
}


App.propTypes = {
    topics: React.PropTypes.arrayOf(
        React.PropTypes.shape({
            name: React.PropTypes.string.isRequired,
            description: React.PropTypes.string.isRequired,
            id: React.PropTypes.string.isRequired,
        })
    ),
    adding: React.PropTypes.bool.isRequired,
    onTopicSelected: React.PropTypes.func.isRequired, // rename
    selectedTopicName: React.PropTypes.string,
    loadTopic: React.PropTypes.func.isRequired,
    children: React.PropTypes.element,
};

export default App;
