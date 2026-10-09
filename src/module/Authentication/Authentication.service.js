
import { compare, hash } from "../../common/Hash/index.js";
import { AuthModle } from "../../modle/Authentication.modle.js";
import jwt from 'jsonwebtoken'

export const  AddAuth=async (body)=>{
    try{
        let { FullName , Email ,password} = body

        let user = await AuthModle.create({ FullName , Email ,password: await hash(password)})
        return user

        

    }catch(error){
    throw error
    }
}
export const LoginUser=async(body)=>{
    try{
    let { Email ,password} = body

    let user = await AuthModle.findOne({Email})
    if(!user){
        throw new Error ("user email or password invalid")
    }
    let match = await compare(password ,user.password)
    if(!match){
            throw new Error ("user email or password invalid")
    }
    if(match){
        let token = await jwt.sign({id: user._id} , "token")
        return ({
            message : "User Login Successfully",
            token
        })
    }
    }catch(error){
  throw error
    }
}
export const GetUserById=async(Id)=>{
    let data = await AuthModle.findById(Id)
    return data
}