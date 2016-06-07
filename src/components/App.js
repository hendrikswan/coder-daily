import React from 'react';
import Navigation from './Navigation';
import LinkList from './LinkList';

const App = () => {
    const links = [{
        id: 1,
        url: 'http://google.co.za',
        description: 'the good \'ol search engine',
        voteCount: 10,
    }, {
        id: 2,
        url: 'http://tagtree.io',
        description: 'my old site',
        voteCount: 3,
    }];

    return (
        <div>
            <Navigation />
            <LinkList
                links={links}
            />
        </div>
    );
};

export default App;
