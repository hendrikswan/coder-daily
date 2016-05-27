import React from 'react';
import Navigation from './Navigation';
import LinkList from './LinkList';
import Form from './Form';


class App extends React.Component {
    render() {
        let component;

        if (this.props.adding) {
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
                    topics={this.props.topics}
                    onTopicSelected={this.props.onTopicSelected}
                />

                {component}
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
