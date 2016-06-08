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

export function fetchTopics() {
    return (dispatch) => {
        dispatch(requestTopics());

        fetch('http://localhost:3000/topics')
        .then(response => response.json())
        .then(topics => {
            dispatch(receiveTopics({ topics }));
        });
    };
}
