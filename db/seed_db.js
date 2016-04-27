var Schema = require('./models');
var seedData = require('./seeds');
var HypeRef = Schema.HypeRef;
var Critique = Schema.Critique;


HypeRef.remove().then(function(){
  HypeRef.create(seedData).then(function(){
    process.exit();
  });
});
