import { connect } from 'react-redux';
import App from '../components/App';
import { fetchTopics, selectTopic } from '../actions';

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
        selectTopic: ({ topic }) =>
            dispatch(selectTopic({ topic })),
    };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


export default AppContainer;
