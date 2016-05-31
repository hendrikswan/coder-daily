import { connect } from 'react-redux';
import App from '../components/App';
import { selectTopic, loadTopic, checkAuth, showLock } from '../actions';

const mapStateToProps = (state, ownProps) => {
    return {
        topics: state.main.topics,
        adding: state.main.adding,
        selectedTopicName: ownProps.params.selectedTopicName,
        profile: state.main.profile,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTopicSelected: (topic) =>
            dispatch(selectTopic(topic)),
        loadTopic: (selectedTopicName) =>
            dispatch(loadTopic({ selectedTopicName })),
        checkAuth: () =>
            dispatch(checkAuth()),
        showLock: () =>
            dispatch(showLock()),
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onTodoClick: (id) => {
//             dispatch(toggleTodo(id));
//         }
//     };
// };

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


export default AppContainer;
