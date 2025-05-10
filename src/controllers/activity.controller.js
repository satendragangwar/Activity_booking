import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Activity } from "../models/activity.model.js";

const listActivities = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const activities = await Activity.find({})
    .skip(skip)
    .limit(limit);

  const totalActivities = await Activity.countDocuments({});

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        activities,
        total: totalActivities,
        page,
        limit,
        totalPages: Math.ceil(totalActivities / limit),
      },
      "Activities fetched successfully with pagination"
    )
  );
});

export { listActivities }; 