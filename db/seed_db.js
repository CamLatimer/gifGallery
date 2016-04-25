var Schema = require('./models');
var seedData = require('./seeds');
var HypeRef = Schema.HypeRef;
var Comment = Schema.Comment;

HypeRef.remove().then(function(){
  HypeRef.create(seedData).then(function(){
    process.exit();
  });
});
