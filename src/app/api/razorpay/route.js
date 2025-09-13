import { NextResponse } from "next/server";
import connectDB from "@/db/connectdb";
import payment from "@/../models/payment";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";

export async function POST(req) {
  await connectDB();

  // ✅ Read the raw body text
  const text = await req.text();

  // ✅ Convert URL-encoded string to an object
  const params = new URLSearchParams(text);
  const body = Object.fromEntries(params);

  // Now body.razorpay_order_id etc. are available
  const p = await payment.findOne({ orderId: body.razorpay_order_id });
  if (!p) {
    return NextResponse.json({ error: "Order not found" }, { status: 404 });
  }

  const isValid = validatePaymentVerification(
    {
      order_id: body.razorpay_order_id,
      payment_id: body.razorpay_payment_id,
    },
    body.razorpay_signature,
    process.env.KEY_SECRET
  );

  if (!isValid) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  await payment.findOneAndUpdate(
    { orderId: body.razorpay_order_id },
    { done: true },
    { new: true }
  );

  return NextResponse.redirect(
  `https://power100-beryl.vercel.app/register?payment=true` 
);
}

