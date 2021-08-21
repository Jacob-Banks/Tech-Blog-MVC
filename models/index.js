// import all models
const Post = require("./Post");
const User = require("./User");
//const Vote = require('./Vote');
//const Comment = require('./Comment');

// create associations
User.hasMany(Post, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});
module.exports = { User, Post };
// Post, Vote, Comment
