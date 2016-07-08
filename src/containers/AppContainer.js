import { connect } from 'react-redux';
import App from '../components/App';
import { fetchTopics } from '../actions';

const mapStateToProps = (state) => {
    const {
        initialized,
        topics,
        links,
        selectedTopic,
    } = state.main;

    return {
        initialized,
        topics,
        links,
        selectedTopic,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTopics: () =>
            dispatch(fetchTopics()),
    };
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);

export default AppContainer;
