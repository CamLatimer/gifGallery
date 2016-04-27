var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
// connects app to database, tells heroku to use mongolab add-on
if(process.env.NODE_ENV == "production"){
  mongoose.connect(process.env.MONGODB_URI);
}else{
  mongoose.connect('mongodb://localhost/hypeRefsDatabase');
}

var CritiqueSchema = new mongoose.Schema({
  body: String
});
var HypeRefSchema = new mongoose.Schema({
  title: String,
  og_url: String,
  giphy_id: String,
  img_url: String,
  critiques: [CritiqueSchema]
});

module.exports = {
  HypeRef: mongoose.model('HypeRef', HypeRefSchema),
  Critique: mongoose.model('Comment', CritiqueSchema)
}
