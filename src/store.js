import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { RECEIVE_LINKS, REQUEST_LINKS } from './actions';

const loggerMiddleware = createLogger();

const defaultState = {
    topics: [],
    links: [],
    selectedTopic: {
        name: '',
        description: '',
    },
    loadingLinks: false,
};


function store(state, action) {
    switch (action.type) {
    case RECEIVE_LINKS:
        return Object.assign({}, state, {
            links: action.links,
            selectedTopic: action.selectedTopic,
            loadingLinks: false,
        });
    case REQUEST_LINKS:
        return Object.assign({}, state, {
            loadingLinks: true,
        });
    // case 'ADD_TODO':
    //     const allTodos = state.allTodos.concat([{
    //         task: action.task,
    //         state: 'pending',
    //     }]);
    //     return Object.assign({}, state, {
    //         allTodos,
    //         todos: allTodos.filter(todo => todo.state === state.filter),
    //     });
    // case 'DONE_TODO':
    //     const doneTodo = Object.assign({}, action.todo, {
    //         state: 'done',
    //     });
    //
    //     const updatedAllTodos = state.allTodos.map((todo) => {
    //         return todo === action.todo ? doneTodo : todo;
    //     });
    //
    //     return Object.assign({}, state, {
    //         allTodos: updatedAllTodos,
    //         todos: updatedAllTodos.filter(todo => todo.state === state.filter),
    //     });
    // case 'TOGGLE_STATE':
    //     const filter = state.filter === 'pending' ? 'done' : 'pending';
    //     console.log(filter);
    //     return Object.assign({}, state, {
    //         filter,
    //         todos: state.allTodos.filter(todo => todo.state === filter),
    //     });
    default:
        return state;
    }
}

export default createStore(store, defaultState, applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
));
