import { db } from "@/lib/firebase";
import { CardData } from "@/types/card";
import { getAuth } from "@clerk/nextjs/server";
import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { userId } = getAuth(req);
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const data: CardData = await req.json();

    // Validate required fields
    if (!data.name || !data.email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    const cardData = {
      name: data.name,
      email: data.email,
      title: data.title || "",
      company: data.company || "",
      phone: data.phone || "",
      website: data.website || "",
      theme: JSON.stringify(data.theme),
      templateId: data.templateId || "default",
      userId: userId,
      createdAt: new Date().toISOString(),
    };

    const docRef = await addDoc(collection(db, "cards"), cardData);
    const card = { id: docRef.id, ...cardData };

    return NextResponse.json(card);
  } catch (error) {
    console.error("Error creating card:", error);
    return NextResponse.json(
      { error: "Failed to create card" },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const { userId } = getAuth(req);
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const cardsQuery = query(
      collection(db, "cards"),
      where("userId", "==", userId),
      orderBy("createdAt", "desc")
    );

    const querySnapshot = await getDocs(cardsQuery);
    const cards = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json(cards);
  } catch (error) {
    console.error("Error fetching cards:", error);
    return NextResponse.json(
      { error: "Failed to fetch cards" },
      { status: 500 }
    );
  }
}
