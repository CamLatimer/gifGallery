var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
// connects app to database, tells heroku to use mongolab add-on
if(process.env.NODE_ENV == "production"){
  mongoose.connect(process.env.MONGODB_URI);
}else{
  mongoose.connect('mongodb://localhost/GifGalleryDB');
}

var CritiqueSchema = new mongoose.Schema({
  body: String
});
var GifSchema = new mongoose.Schema({
  created: {
    type: Date,
    default: Date.now
  },
  title: String,
  og_url: String,
  giphy_id: String,
  img_url: String,
  og_still_url: String,
  likes: {type: Number, default: 0},
  critiques: [CritiqueSchema]
});
GifSchema.methods.likeIt = function(){
  this.likes += 1;
  this.save();
};

module.exports = {
  Gif: mongoose.model('Gif', GifSchema),
  Critique: mongoose.model('Comment', CritiqueSchema)
}
