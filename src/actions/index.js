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

export const LOGIN = 'LOGIN';
export function login({ email }) {
    return {
        type: LOGIN,
        email,
    };
}

export const START_ADD = 'START_ADD';
export function startAdd() {
    return {
        type: START_ADD,
    };
}

export const CANCEL_ADD = 'CANCEL_ADD';
export function cancelAdd() {
    return {
        type: CANCEL_ADD,
    };
}


export function add({ url, description }) {
    return (dispatch, getState) => {
        const selectedTopic = getState().main.selectedTopic;
        fetch(`http://localhost:3000/topics/${selectedTopic.id}/links`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                url,
                description,
                topicId: selectedTopic.id,
                email: getState().main.email,
            }),
        })
        .then(postResponse => {
            if (postResponse.status === 200) {
                dispatch(cancelAdd());
                dispatch(fetchLinks());
            }
        });
    };
}
