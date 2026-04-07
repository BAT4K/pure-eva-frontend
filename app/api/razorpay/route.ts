import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function POST(req: Request) {
  try {
    const { amount } = await req.json();

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_dummy',
      key_secret: process.env.RAZORPAY_KEY_SECRET || 'dummy_secret',
    });

    const options = {
      amount: Math.round(amount * 100), 
      currency: 'INR',
      receipt: `receipt_order_${Math.floor(Math.random() * 10000)}`,
    };

    const order = await razorpay.orders.create(options);

    return NextResponse.json({ ...order, key_id: process.env.RAZORPAY_KEY_ID });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || 'Error processing payment' },
      { status: 500 }
    );
  }
}
