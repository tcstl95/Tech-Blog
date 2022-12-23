const sequelize= require('../config/connection');
const {Post,User,Comment}= require('../models');
const withAuth = require('../utils/auth');
const router= require('express').Router();

router.get('/', async (req,res)=>{
    res.end('Main Home Page');
});

router.get('/post/:id', async (req,res)=>{
    res.end('Post ID');
});

router.get('/post', withAuth, async(req,res)=>{
    res.end('Users Post');
});

router.get('/login', (req,res)=>{
    res.end('Login Page');
});

module.exports= router;