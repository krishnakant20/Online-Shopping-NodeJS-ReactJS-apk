const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    // address:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref:'address'
    // },
    // product:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref:'product'
    // },    
    quantity:{
        type:Number,
    }

});

orderSchema.set('timestamps',true);

const Order = mongoose.model('order',orderSchema);

module.exports=Order;