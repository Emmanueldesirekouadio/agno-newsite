import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

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

    // Créer un paiement dans la base de données
    const payment = await db.payment.create({
      data: {
        cardId,
        userId: user.id,
        amount,
        currency,
        status: "pending",
        provider: "mobile_money",
      },
    });

    // Simuler l'intégration avec l'API Mobile Money
    // Dans un environnement de production, vous utiliseriez l'API réelle de Mobile Money
    const paymentUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/payments/mobile-money/checkout?paymentId=${payment.id}`;

    return NextResponse.json({ paymentUrl });
  } catch (error) {
    console.error("[PAYMENT_MOBILE_MONEY_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
