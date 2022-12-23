const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async(req,res)=> {
    try{
        const postData = await Post.findAll({
        where:{
            id_user: req.session.id_user
        },
          attributes:[
            'id',
            'title',
            'content',
            'id_user'
          ]
    });
    const posts= postData.map((post)=>post.get({plain: true}));
    res.render('dashboard', {
        posts, 
        loggedIn: true});
} catch(err){
res.status(500).json(err);
}
});

router.get('/id', withAuth, async (req,res)=>{
    try{
    const postData = await Post.findOne(req.params.id,{
        where:{
            id_user: req.session.id_user
        },
        attributes:['id','title','content','id_user'],
        include:[{
            model: User,
            attributes:['User']
        },
        {
            model:Comment,
            attributes:['id','text','id_user','id_post' ]
        }
    ]
    });
    const post = postData.get({plain: true});
    res.render('id',{
        post,
        loggedIn: true});

    }catch(err){
        res.status(500).json(err);
    }
});


module.exports= router;