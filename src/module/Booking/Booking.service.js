
import { BookingModle } from "../../modle/Booking.modle.js";

const httpError = (message, status) => {
  const err = new Error(message);
  err.status = status;
  return err;
};

export const AddBooking = async (userId, body) => {
  const { title, BookingDate } = body;

  if (!title || !BookingDate) {
    throw httpError("title and BookingDate are required", 400);
  }

  const date = new Date(BookingDate);

  if (isNaN(date)) throw httpError("Invalid date", 400);
  if (date < new Date()) throw httpError("Booking date cannot be in the past", 400);

  return await BookingModle.create({ userId, title, BookingDate: date });
};

export const GetMyBookings = async (userId) => {
  return await BookingModle.find({ userId });
};

export const GetBookingById = async (id, userId) => {
  const data = await BookingModle.findOne({ _id: id, userId });
  if (!data) throw httpError("Booking not found", 404);
  return data;
};

export const GetAllBooking=async(userId)=>{
    try{
      let user = await BookingModle.find({ userId })
      return user
    }catch(error){
   throw error
    }
}

export const UpdateBooking=async(bookingId, userId, body)=>{
    try{
      let {title } = body
   const data = await BookingModle.findOneAndUpdate(
 { _id: bookingId, userId: userId },

    { $set: { title } },
    { new: true }             
  );
  return data

    }catch(error){
    throw error
    }
}
export const CancelBooking = async (bookingId, userId) => {
  try {
    const booking = await BookingModle.findOneAndUpdate(
      {
        _id: bookingId,
        userId: userId
      },{
        $set: {
          status: "cancelled"}
      },{new: true}
    );

    return booking;
  } catch (error) {
    throw error;
  }
};