import nodemailer from "nodemailer";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, mobileCode, mobileNumber, email, location } = req.body;

  if (!name || !mobileNumber || !location) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: "johnparijv@gmail.com",
    subject: "New Enquiry - Talk to Expert",
    html: `
      <h2>New Enquiry Received</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Mobile:</strong> ${mobileCode} ${mobileNumber}</p>
      <p><strong>Email:</strong> ${email || "N/A"}</p>
      <p><strong>Location:</strong> ${location}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error: any) {
    console.error("Email sending failed:", error);
    res
      .status(500)
      .json({ message: "Failed to send email", error: error.message });
  }
}
