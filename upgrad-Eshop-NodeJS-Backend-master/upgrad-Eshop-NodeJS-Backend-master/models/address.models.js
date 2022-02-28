const mongoose = require('mongoose');
const { Schema } = mongoose;

const addressSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    contactNumber:{
        type:Number,
        required:true
    },
    street:{
        type:String,
        required:true
    },
    landmark:{
        type:String,
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    zipcode:{
        type:Number,
        required:true
    }
})

addressSchema.set('timestamps',true);

const Address = mongoose.model('address',addressSchema);

module.exports=Address;