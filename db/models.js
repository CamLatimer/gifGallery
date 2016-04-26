var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// connects app to database, tells heroku to use mongolab add-on
if(process.env.NODE_ENV == "production"){
  mongoose.connect(process.env.MONGODB_URI);
}else{
  mongoose.connect('mongodb://localhost/hypeRefsDatabase');
}

var CommentSchema = new mongoose.Schema({
  author: String,
  body: String
});
var HypeRefSchema = new mongoose.Schema({
  title: String,
  og_url: String,
  giphy_id: String,
  img_url: String,
  // comments: [CommentSchema]
  critique: String,
});

module.exports = {
  HypeRef: mongoose.model('HypeRef', HypeRefSchema),
  Comment: mongoose.model('Comment', CommentSchema)
}
