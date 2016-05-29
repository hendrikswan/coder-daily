import React from 'react';
import Navigation from './Navigation';


class App extends React.Component {
    render() {
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
        this.props.loadTopic(props.selectedTopicName);
    }

    componentWillMount() {
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
    ).isRequired,
    adding: React.PropTypes.bool.isRequired,
    onTopicSelected: React.PropTypes.func.isRequired, // rename
    onLoad: React.PropTypes.func.isRequired,
    selectedTopicName: React.PropTypes.string.isRequired,
    loadTopic: React.PropTypes.func.isRequired,
};

export default App;
