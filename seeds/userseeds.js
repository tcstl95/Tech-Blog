const {User}= require('../models');

const userSeed=[
    {
        User: '123ABC',
        password: 'password'
    },
    {
        User: 'Wings',
        password: 'boneless'
    },
    {
        User: 'Pizza',
        password: 'pepperoni'
    }
]

const seedsUser= ()=> User.bulkCreate(userSeed);
module.exports= seedsUser;