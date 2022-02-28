const express = require('express');
const { body} = require('express-validator');
const {getOrder,addOrder,deleteOrder} = require('../controllers/order.controller');
const fetchuser = require('../middleware/fetchuser');

const router = express();

// Route1-- get order
router.get('/', getOrder)

// Route2-- add new order
router.post('/',fetchuser, [
    body('quantity', 'enter quantity').isLength({ min: 1 })
], async (req, res,next) => {
     next();
},addOrder)

// Route4-- delete note delete /api/notes/deletenote, login required
router.delete('/:id', fetchuser, async (req, res,next) => {
    next();
},deleteOrder)

module.exports = router;
