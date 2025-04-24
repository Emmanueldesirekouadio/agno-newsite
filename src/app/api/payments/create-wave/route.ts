import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { amount, currency, cardData } = body;

    if (!amount || !currency || !cardData) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    // Ici, vous intégrerez l'API Wave
    // Pour l'instant, on simule une redirection
    const paymentUrl = `https://api.wave.com/payment?amount=${amount}&currency=${currency}&ref=${userId}`;

    return NextResponse.json({ url: paymentUrl });
  } catch (error) {
    console.error("[WAVE_PAYMENT_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
