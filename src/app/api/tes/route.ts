import { NextResponse } from "next/server";
import { connect } from "@/utils/lib/MongoDB";

export async function GET() {
  try {
    const db = await connect();
    const collections = await db.listCollections();
    return NextResponse.json({ success: true, collections }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
