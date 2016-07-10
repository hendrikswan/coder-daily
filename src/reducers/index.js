import { combineReducers } from 'redux';
import {
    RECEIVE_TOPICS,
    RECEIVE_LINKS,
    SELECT_TOPIC,
    LOGIN,
    START_ADD,
    CANCEL_ADD,
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
    adding: false,
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

function startAdd({ state }) {
    return Object.assign({}, state, {
        adding: true,
    });
}

function cancelAdd({ state }) {
    return Object.assign({}, state, {
        adding: false,
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
    case START_ADD:
        return startAdd({ state, action });
    case CANCEL_ADD:
        return cancelAdd({ state, action });
    default:
        return state;
    }
}

const rootReducer = combineReducers({
    main: mainReducer,
});

export default rootReducer;
