// Import the mongoose module to interact with the MongoDB database.
import mongoose from "mongoose";

// This schema will represent how user data is stored in MongoDB.
const UserSchema = new mongoose.Schema({
  // The user's email, must be unique and is required.
  email: { type: String, required: true, unique: true },
  // The user's password, required for authentication.
  password: { type: String, required: true },
  // The user's name, a required field.
  name: { type: String, required: true },
  // The user's phone number, not required.
  phone: { type: Number },
  // A URL to a user's profile picture, not required.
  photo: { type: String },
  // The user's role within the system (e.g., patient or admin). Default is 'patient'.
  role: {
    type: String,
    enum: ["patient", "admin"], // Only these values are permitted.
    default: "patient",
  },
  // The user's gender, can be 'male', 'female', or 'other'.
  gender: { type: String, enum: ["male", "female", "other"] },
  // The user's blood type, not required.
  bloodType: { type: String },
  // Array of appointment IDs associated with the user, referencing the 'Appointment' model.
  appointments: [{ type: mongoose.Types.ObjectId, ref: "Appointment" }],
});

// Export the User model with the defined schema so it can be used in other parts of the application.
export default mongoose.model("User", UserSchema);
