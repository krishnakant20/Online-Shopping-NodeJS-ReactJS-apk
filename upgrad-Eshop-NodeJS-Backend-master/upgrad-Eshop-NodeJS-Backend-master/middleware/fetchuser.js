const jwt = require('jsonwebtoken');

// jwt token secret passed as argument in auth token
const JWTSECRET = 'pawar5';

const fetchuser = (req,res,next)=>{
    
    // get user from jwt token and add id to req object
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error:"please authenticate using vaild token"})
    }
    try {
        const data = jwt.verify(token,JWTSECRET)
        req.user = data.user;
        next();
        
    } catch (error) {
        res.status(401).send({error:"please authenticate using vaild token"})
    }

}

module.exports = fetchuser;