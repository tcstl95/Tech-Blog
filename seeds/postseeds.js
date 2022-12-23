const {Post}= require('../models');

const userPost=[
    {
        title: 'What is MVC?',
        content: 'MVC helps seperate certain aspects of an application',
        id_user: 1
    },
    {
        title: 'What are some file examples in MVC?',
        content: 'Some example are models,utils, and api',
        id_user: 2
    },
    {
        title: 'What does MVC stand for?',
        content: 'MVC stands for Model View Controller',
        id_user: 3
    }
];

const seedPosts =()=> Post.bulkCreate(userPost);

module.exports= seedPosts;