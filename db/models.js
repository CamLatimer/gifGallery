var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// connects app to database, tells heroku to use mongolab add-on
if(process.env.NODE_ENV == "production"){
  mongoose.connect(process.env.MONGODB_URI);
}else{
  mongoose.connect('mongodb://localhost/hypeRefsDb');
}

var CommentSchema = new mongoose.Schema({
  author: String,
  body: String
});
var HypeRefSchema = new mongoose.Schema({
  title: String,
  og_url: String,
  details: String,
  boosts: Number,
  maxed: Boolean,
  img_url: String,
  comments: [CommentSchema]
});

module.exports = {
  HypeRef: mongoose.model('HypeRef', HypeRefSchema),
  Comment: mongoose.model('Comment', CommentSchema)
}
