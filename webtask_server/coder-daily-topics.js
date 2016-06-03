var Express = require('express');
var Webtask = require('webtask-tools');
var app = Express();
var MongoClient = require('mongodb').MongoClient;

app.use(require('body-parser').json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    next();
});

function handleError(res, err) {
  console.log(err);
  return res.json({
    error: true,
  });
}

app.get('/', (req, res, next) => {
  MongoClient.connect(req.webtaskContext.data.MONGO_URL, function (connectErr, db) {
    if(connectErr){
        return handleError(res, connectErr);
    }

    db.collection('topics').find({}, (queryErr, result) => {
      if (queryErr){
        return handleError(res, queryErr);
      }

      result.toArray((toArrayErr, topics) => {
        if (toArrayErr) {
          return handleError(res, toArrayErr);
        }

        return res.json(topics);
      });
    });
  });
});

module.exports = Webtask.fromExpress(app);
