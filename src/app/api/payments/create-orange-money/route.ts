import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

const ORANGE_MONEY_API_KEY = process.env.ORANGE_MONEY_API_KEY!;
const ORANGE_MONEY_MERCHANT_ID = process.env.ORANGE_MONEY_MERCHANT_ID!;

export async function POST(request: Request) {
  try {
    const { amount, currency, planType, cardId } = await request.json();

    // Générer un ID de transaction unique
    const transactionId = uuidv4();

    // Obtenir le token d'accès
    const authResponse = await fetch("https://api.orange.com/oauth/v3/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${Buffer.from(
          `${ORANGE_MONEY_MERCHANT_ID}:${ORANGE_MONEY_API_KEY}`
        ).toString("base64")}`,
      },
      body: "grant_type=client_credentials",
    });

    const { access_token } = await authResponse.json();

    // Créer la transaction
    const payload = {
      merchant_key: ORANGE_MONEY_MERCHANT_ID,
      currency: currency,
      order_id: transactionId,
      amount: amount,
      return_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment/cancel`,
      notif_url: `${process.env.NEXT_PUBLIC_APP_URL}/api/payments/orange-money-webhook`,
      lang: "fr",
      reference: `plan_${planType}`,
      metadata: {
        planType,
        cardId,
      },
    };

    const response = await fetch(
      "https://api.orange.com/orange-money-webpay/dev/v1/webpayment",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json();

    if (data.status === "SUCCESS") {
      return NextResponse.json({ paymentUrl: data.payment_url });
    } else {
      throw new Error(
        data.message || "Erreur lors de l'initialisation du paiement"
      );
    }
  } catch (error) {
    console.error("Orange Money payment error:", error);
    return NextResponse.json(
      { error: "Erreur lors de la création du paiement" },
      { status: 500 }
    );
  }
}
