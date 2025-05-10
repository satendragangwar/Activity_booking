import mongoose, { Schema } from "mongoose";

const activitySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: "",
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String, // Or consider a specific time type if needed
      required: true,
    },
  },
  { timestamps: true }
);

export const Activity = mongoose.model("Activity", activitySchema); 