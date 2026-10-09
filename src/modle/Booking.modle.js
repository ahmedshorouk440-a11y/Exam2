
import mongoose from "mongoose";

export const BookingScema = mongoose.Schema({
    userId:  { type: mongoose.Schema.Types.ObjectId ,
        ref:"Auth",
         },
    title:{
        type: String
    },

      BookingDate :{
        type : Date
      },
       status: {
      type: String,
      enum: ["pending", "confirmed", "canceled"],
      default: "pending",
    },
  },
)
 
export const BookingModle = await mongoose.model('Booking' , BookingScema)