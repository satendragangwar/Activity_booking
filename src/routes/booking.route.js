import { Router } from "express";
import { bookActivity, getMyBookings } from "../controllers/booking.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { validate } from "../validators/validate.js";
import { mongoIdRequestBodyValidator } from "../validators/common/mongodb.validator.js";

const router = Router();

// Protected routes
router.use(verifyJWT); // Apply JWT verification middleware to all routes in this router

router.route("/").post(mongoIdRequestBodyValidator("activityId"), validate, bookActivity);
router.route("/my-bookings").get(getMyBookings);

export default router; 