const webpack = require('webpack');
const WebPackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const express = require('express');
const low = require('lowdb');
const db = low();

new WebPackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
}).listen(8080, 'localhost', (err) => {
    if (err) {
        return console.log(err);
    }

    return console.log('Listening on localhost:8080');
});

function setupDb() {
    db('topics').push({
        name: 'libraries',
        description: 'links to useful open source libraries',
        id: 1,
    });
    db('topics').push({
        name: 'apps',
        description: 'links to new and exciting apps',
        id: 2,
    });
    db('topics').push({
        name: 'news',
        description: 'links to programming related news articles',
        id: 3,
    });

    db('links').push({
        description: 'The very library we are working with now',
        link: 'https://github.com/facebook/react',
        topicId: 1,
    });
    db('links').push({
        description: 'An app to manage your finances',
        link: 'https://22seven.com',
        topicId: 2,
    });
    db('links').push({
        description: 'Go find some news yourself!',
        link: 'https://google.com',
        topicId: 3,
    });
}

setupDb();


function setupServer() {
    // set up server
    const app = express()

    app.get('/topics', (req, res) => {
        res.send(db('topics'));
    });

    app.get('/topics/:id/links', (req, res) => {
        res.send(db('links').filter((l) => {
            return l.topicId === req.params.id;
        }));
    });

    app.post('/topics/:id/links', (req, res) => {
        db('links')
            .push(req.body)
            .then(post => res.send(post));
    });

    app.listen(3000, () => {
        console.log('rest server booted up');
    });
}

setupServer();
