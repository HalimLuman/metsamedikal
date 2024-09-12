import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// Set up the SMTP transporter using your Outlook credentials
const transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.NEXT_PUBLIC_LUMANHALIM_EMAIL, // Your Outlook email address
        pass: process.env.NEXT_PUBLIC_LUMANHALIM_EMAIL_PASS // Your Outlook password
    },
    debug: true // Enable debugging output
});
export async function POST(req) {
    const { fullName, email, phone, message,  subject} = await req.json();
    try {

    // Email content
    const mailOptions = {
      from: `Metsamedikal MK <${process.env.NEXT_PUBLIC_LUMANHALIM_EMAIL}>`, // Masked sender address
      to: 'lumanhalim2004@gmail.com', // Your customer's email address
      subject: `${subject ? `${subject}` : `Metsamedikal MK contact: ${fullName}`}`,
      html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ccc; border-radius: 10px;">
                    <h2 style="color: #5985d0;">Contact from the user ${fullName}</h2>
                    <p style="font-size: 16px;">Received from:<strong>${email}</strong></p>
                    <p style="font-size: 16px;">${message}</p>
                    <p style="font-size: 16px;">${phone}</p>
                    <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
                    <p style="font-size: 12px; color: #777;">This is an automated message, please do not reply directly to this email.</p>
                </div>
            `
    };
    // Send email
    await transporter.sendMail(mailOptions);
    console.log('here 2')

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email', error: error.message }, { status: 500 });
  }
}
