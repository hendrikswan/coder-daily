import { combineReducers } from 'redux';
import {
    RECEIVE_TOPICS,
} from '../actions';

const defaultState = {
    topics: [],
    links: [],
    selectedTopic: {
        name: '',
        description: '',
    },
    initialized: false,
};

function receiveTopics({ state, action: { topics } }) {
    return Object.assign({}, state, {
        topics,
        initialized: true,
    });
}


function mainReducer(state = defaultState, action) {
    switch (action.type) {
    case RECEIVE_TOPICS:
        return receiveTopics({ state, action });
    default:
        return state;
    }
}

const rootReducer = combineReducers({
    main: mainReducer,
});

export default rootReducer;
