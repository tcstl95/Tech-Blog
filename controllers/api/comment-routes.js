const router = require('express').Router();
const { Post, User, Comment} = require('../../models');
const withAuth= require('../../utils/auth')

router.get('/', async (req, res) => {
  try {
    Comment.findAll({});

    then(commentData=>res.json(commentData))
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/:id', async (req, res) => {
    try {
      Comment.findAll({
        where:{
            id: req.params.id
        }
      });
  
      then(commentData=>res.json(commentData))
    } catch (err) {
      res.status(500).json(err);
    }
  });
router.post('/', withAuth, async (req, res) => {
  try {
    if(req.session){
     Comment.create({ 
        text: req.body.text,
       id_post: req.body.id_post,
        id_user: req.session.id_user,})
    }
    then(commentData)

  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/id', (req, res) => {
    Comment.update({
    text: req.body.text
  },
 {
    where:{
        id: req.params.id
    }
 }).then(commentData=>{
    if(!commentData){
        res.status(404).json({message:'Unable to find comment with id'});
    }
    res.json(commentData);
 }).catch(err =>{
    res.status(500),json(err);
 });
});




module.exports = router;