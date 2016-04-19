import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import {
    RECEIVE_LINKS,
    REQUEST_LINKS,
    RECEIVE_TOPICS,
} from './actions';

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
            loadingLinks: false,
        });
    case REQUEST_LINKS:
        return Object.assign({}, state, {
            loadingLinks: true,
        });
    case RECEIVE_TOPICS:
        return Object.assign({}, state, {
            selectedTopic: action.topics[0],
            topics: action.topics,
        });
    default:
        return state;
    }
}

export default createStore(store, defaultState, applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
));
