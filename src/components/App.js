import React from 'react';
import Navigation from './Navigation';
import LinkListContainer from '../containers/LinkListContainer';
import Form from './Form';


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
        this.props.loadTopic(props.selectedTopic);
    }

    // componentWillMount() {
    //     this.loadData(this.props);
    // }

    componentWillReceiveProps(nextProps) {
        // if (nextProps.routing. !== this.props.fullName) {
        //     this.loadData(nextProps);
        // }

        if (nextProps.selectedTopic !== this.props.selectedTopic) {
            // debugger;
            this.loadData(nextProps);
        }
    }

    componentWillMount() {
        this.props.onLoad();
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
    selectedTopic: React.PropTypes.string.isRequired,
    loadTopic: React.PropTypes.func.isRequired,
};

export default App;
