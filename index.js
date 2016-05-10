var express = require('express');
var Schema = require('./db/models');
var mongoose = require('mongoose');
var parser = require('body-parser');
var cors = require('cors');

app = express();

var Gif = Schema.Gif;
var Critique = Schema.Critique;

app.set('port', process.env.PORT || 8080);

app.use(express.static(__dirname + '/public'));
app.use(cors());
app.use(parser.urlencoded({extended: true}));
app.use(parser.json({extended: true}));


// get all gifs
app.get('/api/gifs', function(req, res){
  Gif.find({})
  .then(function(gifs){
    res.json(gifs);
  })
});

// get a single gif
app.get('/api/gifs/:_id', function(req, res){
  Gif.findOne({_id: req.params._id})
  .then(function(gif){
    res.json(gif);
  });
});

// create a gif
app.post('/api/gifs', function(req, res){
  console.log(req.body);
  Gif.create(req.body)
  .then(function(err, gif){
    if (err) {
      console.log(err);
    }
    res.json(gif);
  });
});

// add a like to a gif
app.put('/api/gifs/:_id/likeIt', function(req, res){
  Gif.findOne({_id: req.body._id}, function(err, gif){
    if(err){
      console.log(err);
    }
    gif.likeIt();
    res.json(gif);
  });
});

app.listen(app.get('port'), function(){
  console.log('server up');
});
