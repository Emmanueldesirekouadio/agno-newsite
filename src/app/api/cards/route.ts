import prisma from "@/lib/prisma";
import { CardData } from "@/types/card";
import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const user = await currentUser();
    if (!user) {
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

    // Create card in database
    const card = await prisma.card.create({
      data: {
        name: data.name,
        email: data.email,
        title: data.title || "",
        company: data.company || "",
        phone: data.phone || "",
        website: data.website || "",
        theme: JSON.stringify(data.theme),
        templateId: data.templateId || "default",
        userId: user.id,
      },
    });

    return NextResponse.json(card);
  } catch (error) {
    console.error("Error creating card:", error);
    return NextResponse.json(
      { error: "Failed to create card" },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const user = await currentUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const cards = await prisma.card.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(cards);
  } catch (error) {
    console.error("Error fetching cards:", error);
    return NextResponse.json(
      { error: "Failed to fetch cards" },
      { status: 500 }
    );
  }
}
