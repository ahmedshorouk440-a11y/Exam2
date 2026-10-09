
import express, { json } from "express";
import dotenv from 'dotenv';
import AuthenticationRouter from './module/Authentication/Authentication.contrlloer.js'
import BooingRouter from './module/Booking/Booking.contrlloer.js'
import './database/connection.js'
import { main } from "./database/connection.js";
import { handler } from "./middleWare/GlobalError/index.js";
const app = express()
dotenv.config(process.env.PORT)
app.use(express.json())
app.use(AuthenticationRouter)
app.use(BooingRouter)
main()

app.use(handler)
app.listen(process.env.PORT , ()=>{
    console.log(`server is running on port ${process.env.PORT}`)
})