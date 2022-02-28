const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/eshop';

const connectToMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log('nodejs apk connected to mongodb');
    })
}

module.exports = connectToMongo;