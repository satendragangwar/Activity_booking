import mongoose from "mongoose";
import dotenv from "dotenv";
import { Activity } from "../src/models/activity.model.js";

dotenv.config({ path: "./.env" });

const activities = [
  {
    title: "Cricket Match - Evening",
    description: "Another friendly cricket match.",
    location: "School Oval",
    date: new Date("2024-08-16"),
    time: "05:00 PM",
  },
  {
    title: "Movie Marathon - Action",
    description: "Back-to-back action movies indoors.",
    location: "Community Hall",
    date: new Date("2024-08-21"),
    time: "06:00 PM",
  },
  {
    title: "Football Practice",
    description: "Weekly football practice session.",
    location: "Local Football Field",
    date: new Date("2024-08-26"),
    time: "04:30 PM",
  },
  {
    title: "Basketball Game",
    description: "Casual basketball pickup game.",
    location: "Outdoor Basketball Court",
    date: new Date("2024-08-17"),
    time: "11:00 AM",
  },
  {
    title: "Yoga Session",
    description: "Morning yoga and meditation.",
    location: "Park Pavilion",
    date: new Date("2024-08-18"),
    time: "08:00 AM",
  },
  {
    title: "Hiking Trip",
    description: "Moderate difficulty hike with scenic views.",
    location: "Mountain Trail Head",
    date: new Date("2024-08-22"),
    time: "09:00 AM",
  },
  {
    title: "Book Club Meeting",
    description: "Discussion on this month's book.",
    location: "Local Library",
    date: new Date("2024-08-23"),
    time: "03:00 PM",
  },
  {
    title: "Coding Workshop",
    description: "Introduction to web development.",
    location: "Tech Hub",
    date: new Date("2024-08-29"),
    time: "06:00 PM",
  },
  {
    title: "Photography Walk",
    description: "Exploring the city with cameras.",
    location: "Downtown Core",
    date: new Date("2024-08-30"),
    time: "09:30 AM",
  },
  {
    title: "Cooking Class - Italian",
    description: "Learn to make classic Italian dishes.",
    location: "Culinary Studio",
    date: new Date("2024-09-01"),
    time: "01:00 PM",
  },
  {
    title: "Art Exhibition Visit",
    description: "Visiting a new art gallery.",
    location: "City Art Gallery",
    date: new Date("2024-09-05"),
    time: "11:00 AM",
  },
  {
    title: "Live Music Gig",
    description: "Enjoying a band at a local venue.",
    location: "The Live House",
    date: new Date("2024-09-08"),
    time: "09:00 PM",
  },
  {
    title: "Volleyball Game",
    description: "Casual volleyball game at the beach.",
    location: "Sandy Beach Courts",
    date: new Date('2024-08-19'),
    time: "03:00 PM",
  },
  {
    title: "Board Games Night",
    description: "Evening of various board games.",
    location: "Community Center",
    date: new Date('2024-08-24'),
    time: "07:00 PM",
  },
  {
    title: "Running Group Meetup",
    description: "Morning run along the river.",
    location: "Riverfront Trail",
    date: new Date('2024-08-28'),
    time: "06:30 AM",
  },
  {
    title: "Gardening Workshop",
    description: "Tips and tricks for urban gardening.",
    location: "Botanical Garden",
    date: new Date('2024-09-02'),
    time: "10:00 AM",
  },
  {
    title: "Dance Class - Salsa",
    description: "Beginner salsa dance lesson.",
    location: "Dance Studio",
    date: new Date('2024-09-04'),
    time: "08:00 PM",
  },
  {
    title: "Chess Tournament",
    description: "Friendly chess competition.",
    location: "Chess Club",
    date: new Date('2024-09-07'),
    time: "01:00 PM",
  },
  {
    title: "Cycling Tour",
    description: "Guided cycling tour through the countryside.",
    location: "Countryside Path",
    date: new Date('2024-09-09'),
    time: "09:00 AM",
  },
  {
    title: "Poetry Slam",
    description: "Open mic night for poets.",
    location: "Cafe Venue",
    date: new Date('2024-09-10'),
    time: "07:00 PM",
  },
  {
    title: "Coding Challenge",
    description: "Problem-solving session for developers.",
    location: "Online Event", // Example of an online event
    date: new Date('2024-09-11'),
    time: "06:00 PM",
  }
];

const seedActivities = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected for seeding.");

    await Activity.deleteMany({}); // Clear existing activities
    console.log("Existing activities cleared.");

    await Activity.insertMany(activities);
    console.log(`Successfully seeded ${activities.length} sample activities.`);

  } catch (error) {
    console.error("Error seeding activities:", error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    console.log("MongoDB disconnected.");
  }
};

seedActivities();
