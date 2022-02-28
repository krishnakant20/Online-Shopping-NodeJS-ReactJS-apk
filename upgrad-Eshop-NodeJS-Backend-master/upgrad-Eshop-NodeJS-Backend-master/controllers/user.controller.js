const express = require('express');
const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// jwt secret token passed as arg in auth token
const JWTSECRET = 'pawar5';

// for route1-getAllUsers
module.exports.getAllUsers = async (req, res) => {
    try {
        const user = await User.find();
        res.json(user);
    } catch (error) {
        console.log(error.message);
        res.status(500).send('internal server error');
    }
}

// for route2- createUser
module.exports.createUser = async (req, res) => {
    try {
        // check email already exist
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: 'Email already exist' });
        }

        // generate hash of password and store it in db
        var salt = await bcrypt.genSaltSync(10);
        var hashedPassword = await bcrypt.hash(req.body.password, salt);

        // creating user in db
        user = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: hashedPassword,
            email: req.body.email,
            contactNumber: req.body.contactNumber,
            role: req.body.role
        })

        // creating jwt token, payload
        const dataToken = {
            user: {
                id: user.id
            }
        }

        const authToken = jwt.sign(dataToken, JWTSECRET);

        // STORING JWT TOKEN IN SESSION 
        req.session['auth-token2'] = authToken;

        console.log("signup success");

        
        res.status(200).send({
            message: 'user created !',
            user: user,
            authToken: authToken
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).send('internal server error');
    }
}

// for route3- login user
module.exports.login = async (req, res) => {

    // destructuring req.body
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "please enter correct credentials" });
        }

        // comparing frontend entered passward with db stored hash password
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ error: "please enter correct credentials" });

        }
        // creating jwt token; payload
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWTSECRET);

        // storing jwt token in session token
        req.session["access-token"]= authToken;
        console.log("login success");
        res.status(200).send({
            message: "LoggedIn successfully",
            user: user,
            authToken: authToken
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error occured");
    }
}

// for route4- logout
module.exports.logout= async (req,res)=>{
    try {
        req.session.destroy();
        res.status(200).send("Successfully Logged Out");
    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error occured");
    }
}
