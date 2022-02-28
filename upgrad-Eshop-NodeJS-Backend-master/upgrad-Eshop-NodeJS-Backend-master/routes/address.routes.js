const express = require('express');
const { body} = require('express-validator');
const {getAddress,addAddress} = require('../controllers/address.controller');

const router = express();

// Route1-- get address
router.get('/getAddress', getAddress )

// Route2-- add new addAddress
router.post('/', [
    body('contactNumber', 'Invalid contact number!').isLength({ min: 10 }),
    body('zipcode', 'Invalid zipcode number!').isLength({ min: 5 })
], async (req, res,next) => {
     next();
},addAddress)

module.exports = router;