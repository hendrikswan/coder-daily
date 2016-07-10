import { combineReducers } from 'redux';
import {
    RECEIVE_TOPICS,
    RECEIVE_LINKS,
    SELECT_TOPIC,
    LOGIN,
} from '../actions';

const defaultState = {
    topics: [],
    links: [],
    selectedTopic: {
        name: '',
        description: '',
    },
    initialized: false,
    loadingLinks: true,
};

function receiveTopics({ state, action: { topics } }) {
    return Object.assign({}, state, {
        topics,
        initialized: true,
    });
}

function receiveLinks({ state, action: { links } }) {
    return Object.assign({}, state, {
        links,
        loadingLinks: false,
    });
}

function selectTopic({ state, action: { topic } }) {
    return Object.assign({}, state, {
        selectedTopic: topic,
    });
}

function login({ state, action: { email } }) {
    return Object.assign({}, state, {
        email,
    });
}


function mainReducer(state = defaultState, action) {
    switch (action.type) {
    case RECEIVE_TOPICS:
        return receiveTopics({ state, action });
    case RECEIVE_LINKS:
        return receiveLinks({ state, action });
    case SELECT_TOPIC:
        return selectTopic({ state, action });
    case LOGIN:
        return login({ state, action });
    default:
        return state;
    }
}

const rootReducer = combineReducers({
    main: mainReducer,
});

export default rootReducer;
