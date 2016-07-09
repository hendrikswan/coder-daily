import React, { PropTypes } from 'react';
import Navigation from '../containers/NavigationContainer';
import LinkList from '../containers/LinkListContainer';


class App extends React.Component {
    componentWillMount() {
        this.props.init();
    }

    render() {
        return (
            <div>
                <Navigation />
                <LinkList />
            </div>
        );
    }
}

App.propTypes = {
    init: PropTypes.func.isRequired,
};

export default App;
