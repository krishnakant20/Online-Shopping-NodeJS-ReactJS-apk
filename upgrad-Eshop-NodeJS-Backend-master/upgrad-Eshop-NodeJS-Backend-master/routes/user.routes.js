const express = require('express');
const { getAllUsers, createUser, login,logout } = require('../controllers/user.controller');
const { body, validationResult } = require('express-validator');
const { route } = require('express/lib/router');

const router = express();

// route1- get list of all users
router.get('/getAllUsers', (req, res, next) => {
    next()
}, getAllUsers)

// router2- create 1 user 'signup'
router.post('/signup', [
    body('email', 'Invalid email-id format!').isEmail(),
    body("password", 'Invalid email-id format!').isLength({ min: 3 }),
    body('contactNumber', 'Invalid contact number!').isLength({ min: 10 })
], async (req, res, next) => {
    // validate user
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    else {
        next();
    }
}, createUser)

// route3- login user
router.post('/login',[
    body('email','enter correct emails').isEmail(),
    body('password','enter correct password').exists()
], async (req,res,next)=>{
    // check for validation 
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }

    next();
},login)

router.post('/logout', logout);

module.exports = router;