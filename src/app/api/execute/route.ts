import { NextResponse } from "next/server";
import { connect } from "@/utils/lib/MongoDB";
import Commands from "@/models/Commands";

// Menjalankan command berdasarkan input user
export async function POST(req: Request) {
  try {
    await connect();
    const { command } = await req.json();

    const foundCommand = await Commands.findOne({ command });
    if (!foundCommand) {
      return NextResponse.json(
        { success: false, message: "Command not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, output: foundCommand.output });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
