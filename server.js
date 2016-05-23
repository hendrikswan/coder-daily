const webpack = require('webpack');
const WebPackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const express = require('express');
const low = require('lowdb');
const db = low();
const bodyParser = require('body-parser');
const uuid = require('uuid');

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
    const topic1 = {
        name: 'libraries',
        description: 'links to useful open source libraries',
        id: uuid(),
    };

    const topic2 = {
        name: 'apps',
        description: 'links to new and exciting apps',
        id: uuid(),
    };

    const topic3 = {
        name: 'news',
        description: 'links to programming related news articles',
        id: uuid(),
    };


    db('topics').push(topic1);
    db('topics').push(topic2);
    db('topics').push(topic3);

    db('links').push({
        description: 'The very library we are working with now',
        url: 'https://github.com/facebook/react',
        topicId: topic1.id,
        id: uuid(),
        voteCount: 0,
    });
    db('links').push({
        description: 'An app to manage your finances',
        url: 'https://22seven.com',
        topicId: topic2.id,
        id: uuid(),
        voteCount: 0,
    });
    db('links').push({
        description: 'Go find some news yourself!',
        url: 'https://google.com',
        topicId: topic3.id,
        id: uuid(),
        voteCount: 0,
    });
}

setupDb();


function setupServer() {
    // set up server
    const app = express();

    app.use((req, res, next) => {
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*');
        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        // Pass to next layer of middleware
        next();
    });

    app.use(bodyParser.json());

    app.get('/topics', (req, res) => {
        res.send(db('topics'));
    });

    app.get('/topics/:id/links', (req, res) => {
        res.send(db('links').filter((l) => {
            return l.topicId === req.params.id;
        }));
    });

    app.post('/topics/:id/links', (req, res) => {
        const link = Object.assign({}, req.body, {
            id: uuid(),
            voteCount: 0,
        });
        db('links')
            .push(link);

        res.send(link);
    });

    app.post('/links/:id/vote', (req, res) => {
        // setTimeout(() => {
            const link = db('links').find({ id: req.params.id });
            link.voteCount += req.body.increment;
            res.send(link);
        // }, 1500);
    });

    app.listen(3000, () => {
        console.log('rest server booted up');
    });
}

setupServer();
