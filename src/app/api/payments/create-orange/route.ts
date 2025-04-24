import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { userId } = await auth();

  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const { amount, currency, cardData } = await request.json();

    if (!amount || !currency || !cardData) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Here you would integrate with Orange Money API
    // This is a mock response
    const paymentData = {
      url: `https://orange.money/pay/${Math.random()
        .toString(36)
        .substring(7)}`,
      reference: `ORANGE-${Date.now()}`,
      amount,
      currency,
      status: "pending",
    };

    return NextResponse.json(paymentData);
  } catch (error) {
    console.error("Orange Money payment error:", error);
    return NextResponse.json(
      { error: "Failed to process payment" },
      { status: 500 }
    );
  }
}
