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
  // look thru database and see if any of the docs contain a url
  // that was already entered
  Gif.findOne({img_url: req.body.img_url}, function(err, gif){
    // if something is found, do nothing, maybe show a message
    //else do Gif.create with req.body
    if(err){
      console.log(err);
    } else if (!gif){
      console.log('no item found, gonna make one...')
      Gif.create(req.body)
      .then(function(err, gif){
        if (err) {
          console.log(err);
        }
      // res.json(gif);
      res.send('whoa');
    });
    } else {
      console.log('item already exists... someone tried to add a .gif with img_url of ' + req.body.img_url);
    }
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
