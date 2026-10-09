
import { Router } from "express";
import { AddAuth, GetUserById, LoginUser } from "./Authentication.service.js";
import { auth } from "../../middleWare/auth.middleware.js";

const router = Router()

router.post("/AddAuth" , async(req, res , next)=>{
   try{
    let Auth = await AddAuth(req.body)
    res.status(200).json({
        message : "User Added Succesfully",
        Auth
    })

   }catch(error){
    next(error)
   }
})


router.post("/Login" , async(req, res , next)=>{
    try{
        let data = await LoginUser(req.body)
        res.status(201).json({
            message : "User Login Successfully",
            data
        })

    }catch(error){
     next(error)
    }
})
router.get("/GetUserById" ,auth ,async(req, res, next)=>{

    try{
let user = await GetUserById(req.user.id)
    res.status(200).json({
        message :"User Fetched Successfully",
        user})
    }catch(error){
       next(error)
    }
})
export default router