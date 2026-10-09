
import mongoose from "mongoose";

const AuthScema = mongoose.Schema({
    FullName :{
        type : String,
        required : true
    },
    Email:{
        type:String,
        unique:true
    },
    password:{
        type : String,
       
    }
})
export const AuthModle = mongoose.model('Auth' , AuthScema)