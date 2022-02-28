const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    contactNumber:{
        type:Number,
        required:true
    },
    role:{
        type:String,
        default:"user"
    }
})

userSchema.set('timestamps',true);

const User = mongoose.model('user',userSchema);

module.exports=User;

