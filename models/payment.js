import mongoose from "mongoose";

const { Schema, model } = mongoose;

const paymentSchema = new Schema({
  orderId: { type: String, required: true },
  amount: { type: Number, required: true },
  currency: { type: String, required: true },
  done: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  
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
  updatedAt: { type: Date, default: Date.now },

  
});

export default mongoose.models.Payment || model("Payment", paymentSchema);