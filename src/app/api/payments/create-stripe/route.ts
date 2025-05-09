import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
// import Stripe from "stripe";

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
//   apiVersion: "2025-03-31.basil",
// });

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // const { amount, currency = "usd" } = await req.json();

    // // Create Stripe checkout session
    // const session = await stripe.checkout.sessions.create({
    //   payment_method_types: ["card"],
    //   line_items: [
    //     {
    //       price_data: {
    //         currency,
    //         product_data: {
    //           name: "Digital Business Card",
    //           description: "Create your professional digital business card",
    //         },
    //         unit_amount: amount * 100, // Convert to cents
    //       },
    //       quantity: 1,
    //     },
    //   ],
    //   mode: "payment",
    //   success_url: `${process.env.NEXT_PUBLIC_APP_URL}/cards?success=true`,
    //   cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/cards?canceled=true`,
    //   metadata: {
    //     userId: userId,
    //   },
    // });

    // return NextResponse.json({ url: session.url });
    return NextResponse.json(
      { error: "Stripe integration is disabled (no key present)" },
      { status: 501 }
    );
  } catch (error) {
    console.error("Error creating Stripe session:", error);
    return NextResponse.json(
      { error: "Failed to create payment session" },
      { status: 500 }
    );
  }
}
