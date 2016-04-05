var mongoose = require("mongoose");

// USER - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Post"
            }
        ]
});

var User = mongoose.model("User", userSchema);

module.exports = User;
// this tells it to go out. It exports it
// could also have been done
// module.exports = mongoose.model("User", userSchema);