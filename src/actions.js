export const REQUEST_LINKS = 'REQUEST_LINKS';
function requestLinks() {
    return {
        type: REQUEST_LINKS,
    };
}

export const RECEIVE_LINKS = 'RECEIVE_LINKS';
function receiveLinks(links, selectedTopic) {
    return {
        type: RECEIVE_LINKS,
        links,
        selectedTopic,
    };
}

export function fetchLinks() {
    return (dispatch) => {
        dispatch(requestLinks());

        fetch('http://localhost:3000/topics')
        .then(response => response.json())
        .then(topics => {
            const selectedTopic = topics[0];
            fetch(`http://localhost:3000/topics/${selectedTopic.id}/links`)
            .then(linkResponse => linkResponse.json())
            .then(links => {
                dispatch(receiveLinks(links, selectedTopic));
            });
        });
    };
}
