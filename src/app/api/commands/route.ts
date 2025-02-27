import { NextResponse } from "next/server";
import { connect } from "@/utils/lib/MongoDB";
import Commands from "@/models/Commands";

// Menambahkan command baru
export async function POST(req: Request) {
  try {
    await connect();
    const { command, output, hidden } = await req.json();

    // Cek apakah command sudah ada
    const existingCommand = await Commands.findOne({ command });
    if (existingCommand) {
      return NextResponse.json(
        {
          success: false,
          message: "Command already exists.",
        },
        { status: 400 }
      ); // Status 400 (Bad Request)
    }

    // Jika belum ada, simpan ke database
    const newCommand = new Commands({
      command,
      output,
      hidden: hidden || false,
    });
    await newCommand.save();

    return NextResponse.json({ success: true, message: "Command added!" });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: (error as Error).message,
      },
      { status: 500 }
    ); // Status 500 (Internal Server Error)
  }
}

// Mengambil semua command
export async function GET() {
  try {
    await connect();
    const commands = await Commands.find({ hidden: false });

    return NextResponse.json({ success: true, commands });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
