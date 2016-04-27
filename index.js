var express = require('express');
var Schema = require('./db/models');
var mongoose = require('mongoose');
var parser = require('body-parser');

app = express();

var HypeRef = Schema.HypeRef;
var Critique = Schema.Critique;

app.set('port', process.env.PORT || 8080);

app.use(express.static(__dirname + '/public'));
app.use(parser.urlencoded({extended: true}));
app.use(parser.json({extended: true}));


// get all refs
app.get('/api/refs', function(req, res){
  HypeRef.find({})
  .then(function(refs){
    res.json(refs);
  })
});
// get a single ref
app.get('/api/refs/:_id', function(req, res){
  HypeRef.findOne({_id: req.params._id})
  .then(function(ref){
    res.json(ref);
  });
});
// create a ref
app.post('/api/refs', function(req, res){
  console.log(req.body);
  HypeRef.create(req.body)
  .then(function(err, ref){
    if (err) {
      console.log(err);
    }
    res.json(ref);
  });
});

app.listen(app.get('port'), function(){
  console.log('server up');
});
