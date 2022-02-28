const express = require('express');
const { body} = require('express-validator');
const {getProduct,addProduct,updateProduct,deleteProduct} = require('../controllers/product.controller');
const fetchuser = require('../middleware/fetchuser');

const router = express();

// Route1-- get product
router.get('/', getProduct )

// Route2-- add new product
router.post('/',fetchuser, [
    body('name', 'enter name').isLength({ min: 3 })
], async (req, res,next) => {
     next();
},addProduct)

// Route3-- update product
router.put('/:id',fetchuser, async (req, res, next) => {
    next();
},updateProduct)

// Route4-- delete note delete /api/notes/deletenote, login required
router.delete('/:id', fetchuser, async (req, res,next) => {
    next();
},deleteProduct)

module.exports = router;
