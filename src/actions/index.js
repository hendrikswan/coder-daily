export const RECEIVE_TOPICS = 'RECEIVE_TOPICS';
function receiveTopics({ topics }) {
    return {
        type: RECEIVE_TOPICS,
        topics,
    };
}


export const REQUEST_TOPICS = 'REQUEST_TOPICS';
function requestTopics() {
    return {
        type: REQUEST_TOPICS,
    };
}


export const RECEIVE_LINKS = 'RECEIVE_LINKS';
function receiveLinks({ links }) {
    return {
        type: RECEIVE_LINKS,
        links,
    };
}


export const REQUEST_LINKS = 'REQUEST_LINKS';
function requestLinks() {
    return {
        type: REQUEST_LINKS,
    };
}

export function fetchLinks() {
    return (dispatch, getState) => {
        dispatch(requestLinks());
        const selectedTopic = getState().main.selectedTopic;
        fetch(`http://localhost:3000/topics/${selectedTopic.id}/links`)
        .then(linkResponse => linkResponse.json())
        .then(links => {
            dispatch(receiveLinks({ links }));
        });
    };
}

export const SELECT_TOPIC = 'SELECT_TOPIC';
export function selectTopic({ topic }) {
    return (dispatch) => {
        dispatch({
            type: SELECT_TOPIC,
            topic,
        });

        dispatch(fetchLinks());
    };
}


export function fetchTopics() {
    return (dispatch) => {
        dispatch(requestTopics());

        fetch('http://localhost:3000/topics')
        .then(response => response.json())
        .then(topics => {
            dispatch(receiveTopics({ topics }));
            dispatch(selectTopic({ topic: topics[0] }));
        });
    };
}

export function init() {
    return (dispatch, getState) => {
        if (!getState().main.initialized) {
            dispatch(fetchTopics());
        }
    };
}
