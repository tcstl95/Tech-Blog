const User = require('./User');
const Project = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
  foreignKey: 'id_user',
  
});

Comment.belongsTo(User, {
  foreignKey: 'id_user',
  onDelete: "cascade"
});

Comment.belongsTo(Post, {
    foreignKey: 'id_user',
    onDelete: "cascade"
  });
User.hasMany(Comment,{
    foreignKey:'id_user',
    onDelete: "cascade"
});
Post.hasMany(Comment,{
    foreignKey:'id_post',
    onDelete: "cascade"

})
module.exports = { User, Post, Comment};