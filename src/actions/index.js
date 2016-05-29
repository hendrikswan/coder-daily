import { push, goBack } from 'react-router-redux'

export function cancelAdd() {
    return (dispatch) => dispatch(goBack());
}

export const REQUEST_LINKS = 'REQUEST_LINKS';
function requestLinks() {
    return {
        type: REQUEST_LINKS,
    };
}

export const RECEIVE_LINKS = 'RECEIVE_LINKS';
function receiveLinks(links) {
    return {
        type: RECEIVE_LINKS,
        links,
    };
}

export const REQUEST_TOPICS = 'REQUEST_TOPICS';
function requestTopics() {
    return {
        type: REQUEST_TOPICS,
    };
}

export const RECEIVE_TOPICS = 'RECEIVE_TOPICS';
function receiveTopics(topics) {
    return {
        type: RECEIVE_TOPICS,
        topics,
    };
}

export function startAdd() {
    return (dispatch) => {
        dispatch(push('/add'));
    };
}

export const REQUEST_ADD = 'REQUEST_ADD';
export function requestAdd() {
    return {
        type: REQUEST_ADD,
    };
}

export const RECEIVE_ADD = 'RECEIVE_ADD';
export function receiveAdd() {
    return {
        type: RECEIVE_ADD,
    };
}


export function fetchLinks() {
    return (dispatch, getState) => {
        dispatch(requestLinks());
        const selectedTopic = getState().main.selectedTopic;
        fetch(`http://localhost:3000/topics/${selectedTopic.id}/links`)
        .then(linkResponse => linkResponse.json())
        .then(links => {
            dispatch(receiveLinks(links));
        });
    };
}

export function selectTopic({ topic }) {
    return (dispatch) => {
        dispatch({
            type: SELECT_TOPIC,
            topic,
        });
        dispatch(fetchLinks());
    };
}

export const VOTE_LINK = 'VOTE_LINK';
export function voteLink({ link, increment }) {
    return (dispatch) => {
        dispatch({
            type: VOTE_LINK,
            link,
            increment,
        });
        fetch(`http://localhost:3000/links/${link.id}/vote`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                increment,
            }),
        });
    };
}


// use rxjs, or most, or something like that to
// handle wonkyness with long duration on server
export function add({ url, description }) {
    return (dispatch, getState) => {
        const selectedTopic = getState().selectedTopic;
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
            }),
        })
        .then(postResponse => {
            if (postResponse.status === 200) {
                dispatch(fetchLinks());
                dispatch(receiveAdd());
            }
        });
    };
}

export function fetchTopics() {
    return (dispatch) => {
        dispatch(requestTopics());

        fetch('http://localhost:3000/topics')
        .then(response => response.json())
        .then(topics => {
            dispatch(receiveTopics(topics));
            dispatch(fetchLinks());
        });
    };
}


export function init() {
    return (dispatch) => {
        dispatch(fetchTopics());
    };
}
