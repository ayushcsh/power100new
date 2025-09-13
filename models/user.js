import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
  // Payment reference (optional, if using separate payments collection)
  paymentId: { type: mongoose.Schema.Types.ObjectId, ref: "Payment" },

  // Form data fields
  fullName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  fatherName: { type: String },
  contactNumber: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String },
  playingRole: { type: String },
  battingStyle: { type: String },
  bowlingStyle: { type: String },
  bowlingOther: { type: String },
  previousExperience: { type: String },
  clubsRepresented: { type: String },
  medicalConditions: { type: Boolean, default: false },
  medicalDetails: { type: String },
  bloodGroup: { type: String },
  consent: { type: Boolean, default: false },
  parentConsent: { type: Boolean, default: false },

  // Document upload fields
  aadharCard: { type: String }, // URL or path
  passportPhoto: [{ type: String }], // array of URLs or paths
  ageProof: { type: String }, // URL or path
  cricketAchievements: { type: String }, // URL or path

  // Timestamps
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Middleware to update updatedAt on save
userSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.models.User || model("User", userSchema);
