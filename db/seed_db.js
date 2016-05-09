var Schema = require('./models');
var seedData = require('./seeds');
var Gif = Schema.Gif;
var Critique = Schema.Critique;


Gif.remove().then(function(){
  Gif.create(seedData).then(function(){
    process.exit();
  });
});
