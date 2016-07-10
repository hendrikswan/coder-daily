import { combineReducers } from 'redux';
import {
    RECEIVE_TOPICS,
    RECEIVE_LINKS,
    SELECT_TOPIC,
    LOGIN,
    START_ADD,
    CANCEL_ADD,
    VOTE_LINK,
    START_LOGIN,
    CANCEL_LOGIN,
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
    authenticating: false,
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

function startLogin({ state }) {
    return Object.assign({}, state, {
        authenticating: true,
    });
}

function cancelLogin({ state }) {
    return Object.assign({}, state, {
        authenticating: false,
    });
}

function cancelAdd({ state }) {
    return Object.assign({}, state, {
        adding: false,
    });
}

function voteLink({ state, action: { link, increment } }) {
    const linkById = state.links.find(l => l.id === link.id);
    const linkIndex = state.links.indexOf(linkById);

    return Object.assign({}, state, {
        links: [
            ...state.links.slice(0, linkIndex),
            Object.assign({}, link, {
                voteCount: link.voteCount + increment,
            }),
            ...state.links.slice(linkIndex + 1),
        ],
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
    case START_LOGIN:
        return startLogin({ state, action });
    case CANCEL_ADD:
        return cancelAdd({ state, action });
    case CANCEL_LOGIN:
        return cancelLogin({ state, action });
    case VOTE_LINK:
        return voteLink({ state, action });
    default:
        return state;
    }
}

const rootReducer = combineReducers({
    main: mainReducer,
});

export default rootReducer;
