import { connect } from 'react-redux';
import App from '../components/App';
import { init, selectTopic, loadTopic } from '../actions';

const mapStateToProps = (state, ownProps) => {
    return {
        topics: state.main.topics,
        adding: state.main.adding,
        selectedTopic: ownProps.params.selectedTopic,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTopicSelected: (topic) => {
            dispatch(selectTopic(topic));
        },
        onLoad: () => {
            dispatch(init());
        },
        loadTopic: (topicName) => dispatch(loadTopic({ topicName })),
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
