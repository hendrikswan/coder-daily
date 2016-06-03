var Express = require('express');
var Webtask = require('webtask-tools');
var app = Express();
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

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


app.post('*', (req, res, next) => {
  var vote = req.body;

  if (!ObjectID.isValid(vote.linkId)) {
    return handleError(res, 'non valid object id on vote id field: ', vote.linkId);
  };

  MongoClient.connect(req.webtaskContext.data.MONGO_URL, function (connectErr, db) {
    if(connectErr){
        return handleError(res, connectErr);
    }

    db.collection('links').update({
      _id: new ObjectID(vote.linkId),
    }, {
      $inc: {voteCount: vote.increment},
    }, (saveErr, result) => {
      if (saveErr){
        return handleError(res, saveErr);
      }

      return res.json(result);
    });
  });
});

module.exports = Webtask.fromExpress(app);
