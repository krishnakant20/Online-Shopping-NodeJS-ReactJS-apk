const { validationResult } = require('express-validator');
const Product = require("../models/product.model");

//for route1- get all products
module.exports.getProduct = async (req, res) => {
    try {
        const product = await Product.find();
        res.json(product);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error occured");
    }
}

//for route2- add new product
module.exports.addProduct = async (req, res) => {
    try {
        const { name, category, price, description, manufacturer, availableItems, imageUrl } = req.body;

        // validate product
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // creating new product
        const product = new Product({
            name, category, price, description, manufacturer, availableItems, imageUrl, user: req.user.id
        })

        const createdProduct = await product.save();

        res.status(200).send({
            message: "product created succesfully",
            createdProduct: createdProduct
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error occured");
    }
}

// for route3 update product
module.exports.updateProduct = async (req, res) => {

    const { name, category, price, description, manufacturer, availableItems, imageUrl } = req.body;

    // creating new product also connecting with user id

    const newProduct = {};
    if (name) { newProduct.name = name };
    if (category) { newProduct.category = category };
    if (price) { newProduct.price = price };
    if (description) { newProduct.description = description };
    if (manufacturer) { newProduct.manufacturer = manufacturer };
    if (availableItems) { newProduct.availableItems = availableItems };
    if (imageUrl) { newProduct.imageUrl = imageUrl };

    // find the note to be updated 
    let product = await Product.findById(req.params.id);
    if (!product) { return res.status(404).send('product not found') }

    // check db user & frontend user
    if (product.user.toString() !== req.user.id) {
        { return res.status(401).send('hacking not allowed') }
    }

    // & update it
    product = await Product.findByIdAndUpdate(req.params.id, { $set: newProduct }, { new: true })
    // res.json({ product });

    res.status(200).send({
        message: "product updated succesfully",
        product: product
    });
}

// for route4- delete product
module.exports.deleteProduct= async (req,res)=>{

    // find the product to be deleted 
    let product = await Product.findById(req.params.id);
    if (!product) { return res.status(404).send('not found') }

    // check db user & frontend user
    if (product.user.toString() !== req.user.id) {
        { return res.status(401).send('deletion not allowed') }
    }

    // & delete it
    product = await Product.findByIdAndDelete(req.params.id);
    res.json({'note deleted':'successful', product: product });
}