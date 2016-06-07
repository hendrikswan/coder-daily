import React from 'react';
import Navigation from './Navigation';
import LinkList from './LinkList';

const links = [{
    id: 1,
    url: 'http://google.co.za',
    description: 'the good \'ol search engine',
    voteCount: 10,
    topicId: 1,
}, {
    id: 2,
    url: 'http://tagtree.io',
    description: 'my old site',
    voteCount: 3,
    topicId: 2,
}];

const topics = [{
    name: 'Apps',
    description: 'Links to interesting apps',
    id: 1,
}, {
    name: 'Libraries',
    description: 'Links to interesting libraries',
    id: 2,
}];

let selectedTopic;
let selectedTopicLinks;

function onTopicSelected({ topic }) {
    selectedTopic = topic;
    selectedTopicLinks = links.filter(l => l.topicId === topic.id);
}

onTopicSelected({ topic: topics[0] });

const App = () => {
    return (
        <div>
            <Navigation
                topics={topics}
                onTopicSelected={onTopicSelected}
            />
            <LinkList
                links={selectedTopicLinks}
                selectedTopic={selectedTopic}
            />
        </div>
    );
};

export default App;
