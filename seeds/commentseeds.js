const {Comment}= require('../models');

const userComments=[{
text: "What an awesome post!",
id_user: 1,
id_post:1
},
{
    text: "I don't agree with this",
    id_user: 2,
    id_post:2
},
{
    text:"Good job!",
    id_user: 3,
    id_post:3
}];

const commentSeed= () => Comment.bulkCreate(userComments);

module.exports = commentSeed;