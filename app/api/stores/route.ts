import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";
export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { name } = body;
    if (!userId)
      return new NextResponse(
        JSON.stringify({
          error: "Unauthorized. You must be logged in to do that",
        }),
        {
          status: 401,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

    if (!name)
      return new NextResponse(
        JSON.stringify({
          error: "Missing name data which is required",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    const store = await prismadb.store.create({
      data: {
        name,
        userId,
      },
    });
    return new NextResponse(JSON.stringify(store), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    console.log("store", e);
    return new NextResponse(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
