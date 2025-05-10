import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Booking } from "../models/booking.model.js";
import { Activity } from "../models/activity.model.js";

const bookActivity = asyncHandler(async (req, res) => {
  const { activityId } = req.body;
  const userId = req.user?._id;

  if (!activityId) {
    throw new ApiError(400, "Activity ID is required");
  }

  const activity = await Activity.findById(activityId);
  if (!activity) {
    throw new ApiError(404, "Activity not found");
  }

  const existingBooking = await Booking.findOne({
    activity: activityId,
    user: userId,
  });
  if (existingBooking) {
    throw new ApiError(400, "You have already booked this activity");
  }

  const booking = await Booking.create({
    activity: activityId,
    user: userId,
  });

  const createdBooking = await Booking.findById(booking._id)
    .populate("activity", "title description location date time")
    .populate("user", "name email phoneNumber");

  if (!createdBooking) {
    throw new ApiError(500, "Something went wrong while booking the activity");
  }

  return res
    .status(201)
    .json(new ApiResponse(201, createdBooking, "Activity booked successfully"));
});

const getMyBookings = asyncHandler(async (req, res) => {
  const userId = req.user?._id;
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const bookings = await Booking.find({ user: userId })
    .populate("activity", "title description location date time")
    .skip(skip)
    .limit(limit);

  const totalBookings = await Booking.countDocuments({ user: userId });

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        bookings,
        total: totalBookings,
        page,
        limit,
        totalPages: Math.ceil(totalBookings / limit),
      },
      "My bookings fetched successfully with pagination"
    )
  );
});

export { bookActivity, getMyBookings };
