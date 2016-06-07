import React from 'react';
import Link from './Link';

const LinkList = () => {
    return (
        <div>
            <h4>this is the link list:</h4>

            <Link
                link={{
                    url: 'http://google.co.za',
                    description: 'the good \'ol search engine',
                    voteCount: 10,
                }}
            />
            <Link
                link={{
                    url: 'http://tagtree.io',
                    description: 'my old site',
                    voteCount: 3,
                }}
            />
        </div>
    );
};

export default LinkList;
