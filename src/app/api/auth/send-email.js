// pages/api/send-email.js
 
import nodemailer from 'nodemailer';

const { GMAIL_USER, GMAIL_PASS} = process.env;

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { to, subject, text, html } = req.body;

    console.log(to, subject, text, html)
    console.log(GMAIL_USER, GMAIL_PASS)
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: GMAIL_USER,
          pass: GMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: `"Your Name" <${GMAIL_USER}>`,
        to,
        subject,
        text,
        html,
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
