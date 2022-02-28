const express = require('express');
const { validationResult } = require('express-validator');
const Address = require("../models/address.models")

//for route1- get address
module.exports.getAddress = async (req, res) => {
    try {
        const address = await Address.find();
        res.json(address);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error occured");
    }
}

//for route2- add new addresses
module.exports.addAddress = async (req, res) => {
    try {
        const { name, contactNumber, street, landmark, city, state, zipcode } = req.body;

        // validate address
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // creating new address
        const address = new Address({
            name, contactNumber, street, landmark, city, state, zipcode
        })

        const createdAddress = await address.save();

        res.status(200).send({
            message: "address created succesfully",
            createdAddress: createdAddress
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error occured");
    }
}