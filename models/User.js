const mongoose =require('mongoose');
//user model for the database
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true    
    }
    ,email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    verified:{
        type:Boolean,
        default:false
    },
    resetLink:{
        type:String,
        default:false
    }
},{
    timestamps:true
});

const User = mongoose.model('User',userSchema);
module.exports =  User;