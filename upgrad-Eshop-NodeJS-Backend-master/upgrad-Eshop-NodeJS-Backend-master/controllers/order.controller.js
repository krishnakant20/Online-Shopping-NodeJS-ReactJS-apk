const { validationResult } = require('express-validator');
const Order = require("../models/order.model");

//for route1- get all orders
module.exports.getOrder = async (req, res) => {
    try {
        const order = await Order.find();
        res.json(order);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error occured");
    }
}

//for route2- add new order
module.exports.addOrder = async (req, res) => {
    try {
        const {quantity} = req.body;

        // validate order
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // creating new order
        const order = new Order({
            quantity, user: req.user.id
        })

        const createdOrder = await order.save();

        res.status(200).send({
            message: "product created succesfully",
            createdOrder: createdOrder
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error occured");
    }
}

// for route4- delete order
module.exports.deleteOrder= async (req,res)=>{

    // find the order to be deleted 
    let order = await Order.findById(req.params.id);
    if (!order) { return res.status(404).send('not found') }

    // check db user & frontend user
    if (order.user.toString() !== req.user.id) {
        { return res.status(401).send('deletion not allowed') }
    }

    // & delete it
    order = await Order.findByIdAndDelete(req.params.id);
    res.json({'note deleted':'successful', order: order });
}