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

    componentDidMount() {
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
    onTopicSelected: React.PropTypes.func.isRequired,
    onLoad: React.PropTypes.func.isRequired,
};

export default App;
