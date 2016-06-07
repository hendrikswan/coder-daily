import React from 'react';
import Link from './Link';

const LinkList = () => {
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

    const linkNodes = links.map(link => (
        <Link
            key={link.id}
            link={link}
        />
    ));

    return (
        <div>
            <h4>this is the link list:</h4>

            {linkNodes}
        </div>
    );
};

export default LinkList;
