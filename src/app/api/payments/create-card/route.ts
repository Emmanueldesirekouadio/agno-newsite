import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-03-31.basil",
});

export async function POST(req: Request) {
  try {
    const user = await currentUser();
    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { cardId, amount, currency } = body;

    if (!cardId || !amount || !currency) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    const card = await db.card.findUnique({
      where: {
        id: cardId,
        userId: user.id,
      },
    });

    if (!card) {
      return new NextResponse("Card not found", { status: 404 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency,
            product_data: {
              name: `Carte de visite - ${card.name}`,
              description: `${card.title}${
                card.company ? ` - ${card.company}` : ""
              }`,
            },
            unit_amount: amount * 100, // Stripe expects amounts in cents
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/cards/${cardId}?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/cards/create?canceled=true`,
      metadata: {
        cardId,
        userId: user.id,
      },
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (error) {
    console.error("[PAYMENT_CARD_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
