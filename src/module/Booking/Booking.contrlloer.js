
import { Router } from "express";
import { AddBooking, CancelBooking, GetAllBooking, GetBookingById, GetMyBookings, UpdateBooking } from "./Booking.service.js";
import { auth } from "../../middleWare/auth.middleware.js";

const router = Router();

router.post("/AddBooking", auth, async (req, res, next) => {
  try {
    let data = await AddBooking(req.user.id, req.body);
    res.status(200).json({ message: "Booking Added Successfully", data });
  } catch (error) {
    next(error);
  }
});

router.get("/api/bookings", auth, async (req, res, next) => {
  try {
    let bookings = await GetMyBookings(req.user.id);
    res.status(200).json({ message: "Bookings Fetched Successfully", bookings });
  } catch (error) {
    next(error);
  }
});

router.get("/GetBookingById/:id", auth, async (req, res, next) => {
  try {
    let data = await GetBookingById(req.params.id, req.user.id);
    res.status(200).json({ message: "Booking Fetched Successfully", data });
  } catch (error) {
    next(error);
  }
});

router.get("/GetAllBooking", auth, async(req, res, next)=>{
    try{
     let data = await GetAllBooking(req.user.id)
     res.status(200).json({
        message : "All Booking Fetched",
        data
     })
    }catch(error){
      next(error)
    }
})



router.put("/UpdatedBooking/:id", auth , async(req, res, next)=>{
    try{
      let data = await UpdateBooking( req.params.id,
      req.user.id,
      req.body)
      res.status(200).json({
        message : "Booking Updated Successfully",
        data
      })
    }catch(error){
      next(error)
    }
})

router.delete("/api/bookings/:id" , auth , async(req, res, next)=>{
    try{
         let data = await CancelBooking(req.params.id,
      req.user.id)
      if(!data){
        return res.status(404).json("Booking Not Found")
      }
      res.status(200).json({message :"Booking Cancelled Successfully" , data})

    }catch(error){
     next(error)
    }
})



export default router;

