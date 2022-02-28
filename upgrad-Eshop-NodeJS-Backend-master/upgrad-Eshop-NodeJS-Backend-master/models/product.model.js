const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
    },
    price:{
        type:Number,
    },
    description: {
        type: String,
    },
    manufacturer: {
        type: String,
    },
    availableItems:{
        type:Number,
    },
    imageUrl: {
        type: String,
    }

});

productSchema.set('timestamps',true);

const Product = mongoose.model('product',productSchema);

module.exports=Product;