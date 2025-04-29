import { db } from "@/lib/firebase";
import { auth } from "@clerk/nextjs/server";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { cardId, amount, currency } = body;

    if (!cardId || !amount || !currency) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    const cardRef = doc(db, "cards", cardId);
    const cardSnap = await getDoc(cardRef);
    const card =
      cardSnap.exists() && cardSnap.data().userId === userId
        ? cardSnap.data()
        : null;

    if (!card) {
      return new NextResponse("Card not found", { status: 404 });
    }

    // Créer un paiement dans la base de données
    const paymentData = {
      cardId,
      userId,
      amount,
      currency,
      status: "pending",
      provider: "mobile_money",
    };
    const paymentRef = await addDoc(collection(db, "payments"), paymentData);
    const payment = { id: paymentRef.id, ...paymentData };

    // Simuler l'intégration avec l'API Mobile Money
    // Dans un environnement de production, vous utiliseriez l'API réelle de Mobile Money
    const paymentUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/payments/mobile-money/checkout?paymentId=${payment.id}`;

    return NextResponse.json({ paymentUrl });
  } catch (error) {
    console.error("[PAYMENT_MOBILE_MONEY_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
