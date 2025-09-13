'use server'

import payment from "../models/payment"
import connectDB from "../src/db/connectdb";
import Razorpay from "razorpay";

// create Razorpay instance
// const instance = new Razorpay({
//   key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,      // your key id
//   key_secret: process.env.KEY_SECRET // your key secret
// });

export async function createOrder(amount , currency , formData) {
  try {
    // Connect to database
    await connectDB();
    
    const razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      key_secret: process.env.KEY_SECRET,
    })

    const options = {
      amount: amount * 100, // Convert to paise
      currency: currency,
    }
    
    // Create Razorpay order
    const response = await razorpay.orders.create(options)

    // Create payment record with only order details (no form data)
   await payment.create({
  orderId: response.id,
  amount: amount,
  currency: currency,
  done: false,

  fullName: formData.fullName,
  dateOfBirth: formData.dateOfBirth,
  age: formData.age,
  gender: formData.gender,
  fatherName: formData.fatherName,
  contactNumber: formData.contactNumber,
  email: formData.email,
  address: formData.address,
  playingRole: formData.playingRole,
  battingStyle: formData.battingStyle,
  bowlingStyle: formData.bowlingStyle,
  bowlingOther: formData.bowlingOther,
  previousExperience: formData.previousExperience,
  clubsRepresented: formData.clubsRepresented,
  medicalConditions: formData.medicalConditions,
  medicalDetails: formData.medicalDetails,
  bloodGroup: formData.bloodGroup,
  consent: formData.consent,
  parentConsent: formData.parentConsent,
  aadharCard: formData.aadharCard,
  passportPhoto: formData.passportPhoto, // array of URLs if uploaded to Cloudinary
  ageProof: formData.ageProof,
  cricketAchievements: formData.cricketAchievements,
});

    return response;
  } catch (error) {
    console.error("Error creating Razorpay order:", error)
    throw new Error("Failed to create order")
  }
}

// // New function to store form data after payment is completed
// export async function storeFormDataAfterPayment(orderId, formData) {
//   try {
//     await connectDB();
    
//     // Find the payment record
//     const paymentRecord = await payment.findOne({ orderId: orderId });
    
//     if (!paymentRecord) {
//       throw new Error("Payment record not found");
//     }
    
//     if (!paymentRecord.done) {
//       throw new Error("Payment not completed yet");
//     }
    
//     // Update payment record with form data
//     const updatedPayment = await payment.findOneAndUpdate(
//       { orderId: orderId },
//       {
//         // Essential form data
//         fullName: formData.fullName,
//         email: formData.email,
//         contactNumber: formData.contactNumber,
//         dateOfBirth: formData.dateOfBirth,
//         age: formData.age,
//         gender: formData.gender,
//         fatherName: formData.fatherName,
//         address: formData.address,
//         playingRole: formData.playingRole,
//         battingStyle: formData.battingStyle,
//         bowlingStyle: formData.bowlingStyle,
//         bowlingOther: formData.bowlingOther,
//         previousExperience: formData.previousExperience,
//         clubsRepresented: formData.clubsRepresented,
//         medicalConditions: formData.medicalConditions,
//         medicalDetails: formData.medicalDetails,
//         bloodGroup: formData.bloodGroup,
//         consent: formData.consent,
//         parentConsent: formData.parentConsent
//       },
//       { new: true }
//     );
    
//     return updatedPayment;
//   } catch (error) {
//     console.error("Error storing form data:", error);
//     throw new Error("Failed to store form data");
//   }
// }