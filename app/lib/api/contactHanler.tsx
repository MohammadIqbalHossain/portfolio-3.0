import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, message } = req.body;

    // Validate form data
    if (!email || !message) {
      return res.status(400).json({ error: "Email and message are required." });
    }

    try {
      // Nodemailer setup
      const transporter = nodemailer.createTransport({
        service: "Gmail", // Use your email provider
        auth: {
          user: process.env.EMAIL_USER, // Your email address
          pass: process.env.EMAIL_PASS, // Your email password
        },
      });

      const mailOptions = {
        from: `"Contact Form" <${email}>`, // Sender's email
        to: process.env.EMAIL_USER, // Your email address (recipient)
        subject: "New Contact Form Submission",
        text: `Message from ${email}: \n\n${message}`,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to send email." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: `Method ${req.method} not allowed.` });
  }
}
