var mongoose = require("mongoose");

// POST - title, comment
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
module.exports =  mongoose.model("Post", postSchema);
// can also be written as
// var Posts = mongoose.model("Post", postSchema);