import { combineReducers } from 'redux';
import {
    RECEIVE_LINKS,
    REQUEST_LINKS,
    RECEIVE_TOPICS,
    LOAD_TOPIC,
    VOTE_LINK,
    STORE_AUTH_INFO,
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
    initialized: false,
};

function setSelectedTopic({ state }) {
    const selectedTopic = state.selectedTopicName ?
        state.topics.filter(t => t.name === state.selectedTopicName)[0] :
        state.topics[0];

    return Object.assign({}, state, {
        selectedTopic,
    });
}

function receiveTopics({ state, action: { topics } }) {
    const stateWithTopics = Object.assign({}, state, {
        topics,
        initialized: true,
    });

    return setSelectedTopic({ state: stateWithTopics });
}

function mapLinks({ state, links }) {
    if (!state.profile) {
        return links;
    }

    return links.map(l => {
        console.log(state.profile);
        if (l.voters.indexOf(state.profile.user_id) > -1) {
            return {
                ...l,
                votingDisabled: true,
            };
        }
        return l;
    });
}

function receiveLinks({ state, action: { links } }) {
    const mappedLinks = mapLinks({ state, links });

    const stateWithLinks = Object.assign({}, state, {
        links: mappedLinks,
        loadingLinks: false,
    });

    return stateWithLinks;
}

function loadTopic({ state, action: { selectedTopicName } }) {
    const stateWithTopicName = Object.assign({}, state, {
        selectedTopicName,
    });

    return setSelectedTopic({ state: stateWithTopicName });
}

function voteLink({ state, action: { link, increment } }) {
    const linkIndex = state.links.indexOf(link);
    return Object.assign({}, state, {
        links: [
            ...state.links.slice(0, linkIndex),
            Object.assign({}, link, {
                voteCount: link.voteCount + increment,
                votingDisabled: true,
            }),
            ...state.links.slice(linkIndex + 1)
        ],
    });
}

function mainReducer(state = defaultState, action) {
    switch (action.type) {
    case RECEIVE_LINKS:
        return receiveLinks({ state, action });
    case REQUEST_LINKS:
        return Object.assign({}, state, {
            loadingLinks: true,
        });
    case RECEIVE_TOPICS:
        return receiveTopics({ state, action });
    case LOAD_TOPIC:
        return loadTopic({ state, action });
    // do similar to load topic
    case VOTE_LINK:
        return voteLink({ state, action });
    case STORE_AUTH_INFO:
        return Object.assign({}, state, {
            idToken: action.idToken,
            profile: action.profile,
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
