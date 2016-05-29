import { combineReducers } from 'redux';
import {
    RECEIVE_LINKS,
    REQUEST_LINKS,
    RECEIVE_TOPICS,
    LOAD_TOPIC,
    VOTE_LINK,
} from '../actions';
import { routerReducer as routing } from 'react-router-redux';

const defaultState = {
    topics: [],
    links: [],
    selectedTopic: {
        name: '',
        description: '',
    },
    loadingLinks: false,
    adding: false,
};

function receiveTopics({ state, action: { topics } }) {
    const selectedTopic = state.selectedTopicName ?
        topics.filter(t => t.name === state.selectedTopicName)[0] :
        topics[0];

    return Object.assign({}, state, {
        selectedTopic,
        topics,
    });
}


function mainReducer(state = defaultState, action) {
    switch (action.type) {
    case RECEIVE_LINKS:
        return Object.assign({}, state, {
            links: action.links,
            loadingLinks: false,
            adding: false,
        });
    case REQUEST_LINKS:
        return Object.assign({}, state, {
            loadingLinks: true,
        });
    case RECEIVE_TOPICS:
        return receiveTopics({ state, action })
    case LOAD_TOPIC:
        return Object.assign({}, state, {
            selectedTopicName: action.selectedTopicName,
            topics: action.topics,
        });

    // do similar to load topic
    case VOTE_LINK:
        const linkIndex = state.links.indexOf(action.link);
        return Object.assign({}, state, {
            links: [
                ...state.links.slice(0, linkIndex),
                Object.assign({}, state.links[linkIndex], {
                    voteCount: state.links[linkIndex].voteCount + action.increment,
                }),
                ...state.links.slice(linkIndex + 1)
            ],
        });
    default:
        return state;
    }
}

const rootReducer = combineReducers({
    main: mainReducer,
    routing,
});

export default rootReducer;
