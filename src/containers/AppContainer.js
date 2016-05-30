import { connect } from 'react-redux';
import App from '../components/App';
import { selectTopic, loadTopic } from '../actions';

const mapStateToProps = (state, ownProps) => {
    return {
        topics: state.main.topics,
        adding: state.main.adding,
        selectedTopicName: ownProps.params.selectedTopicName,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTopicSelected: (topic) => {
            dispatch(selectTopic(topic));
        },
        loadTopic: (selectedTopicName) => dispatch(loadTopic({ selectedTopicName })),
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
