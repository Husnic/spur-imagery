import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface BookingPayload {
  firstName: string;
  lastName: string;
  email: string;
  service: string;
  message: string;
}

export async function POST(req: NextRequest) {
  let body: BookingPayload;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ message: "Invalid request body" }, { status: 400 });
  }

  const { firstName, lastName, email, service, message } = body;

  if (!firstName || !lastName || !email || !service || !message) {
    return NextResponse.json({ message: "All fields are required" }, { status: 400 });
  }

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASSWORD;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!smtpUser || !smtpPass || !contactEmail) {
    console.error("Missing SMTP environment variables");
    return NextResponse.json({ message: "Server configuration error" }, { status: 500 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.zoho.com",
      port: parseInt(process.env.SMTP_PORT || "465"),
      secure: true,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || smtpUser,
      to: contactEmail,
      replyTo: email,
      subject: `Spur Imagery — New Booking Request: ${service}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #D35400; margin-bottom: 4px;">New Booking Request</h2>
          <p style="color: #888; margin-top: 0;">Spur Imagery Website</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #555; width: 140px; vertical-align: top;"><strong>Name</strong></td>
              <td style="padding: 8px 0; color: #111;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #555; vertical-align: top;"><strong>Email</strong></td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #D35400;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #555; vertical-align: top;"><strong>Service</strong></td>
              <td style="padding: 8px 0; color: #111;">${service}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #555; vertical-align: top;"><strong>Message</strong></td>
              <td style="padding: 8px 0; color: #111; white-space: pre-wrap;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="color: #aaa; font-size: 12px;">Sent from spurimagery.com</p>
        </div>
      `,
    });

    /* Auto-reply to the client */
    await transporter.sendMail({
      from: process.env.SMTP_FROM || smtpUser,
      to: email,
      subject: "Spur Imagery — We received your booking request",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #D35400;">Thank you, ${firstName}!</h2>
          <p style="color: #333;">We've received your booking request for <strong>${service}</strong> and will be in touch with you shortly.</p>
          <p style="color: #333;">In the meantime, feel free to browse our portfolio at <a href="${process.env.NEXT_PUBLIC_SITE_URL || "https://spurimagery.com"}" style="color: #D35400;">spurimagery.com</a>.</p>
          <p style="color: #888; font-size: 13px; margin-top: 32px;">— The Spur Imagery Team<br/>spurimagery@gmail.com · +234 (090) 23567745</p>
        </div>
      `,
    });

    return NextResponse.json({ message: "Booking request sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Booking form error:", error);
    return NextResponse.json({ message: "Failed to send booking request" }, { status: 500 });
  }
}
