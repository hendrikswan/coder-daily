import { connect } from 'react-redux';
import App from '../components/App';
import { init, selectTopic } from '../actions';

const mapStateToProps = (state) => {
    return {
        topics: state.topics,
        adding: state.adding,
        links: state.links,
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
