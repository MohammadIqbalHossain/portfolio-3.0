import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email) {
      return NextResponse.json({ error: "email is required" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New neswletter subscription.`,
      text: email,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Thank you for subscribing." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error subscribing...:", error);
    return NextResponse.json({ error: "Failed subscribe." }, { status: 500 });
  }
}
