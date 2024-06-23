import mailgun from "mailgun-js";

const mg = mailgun({ apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN });

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { to, subject, text } = req.body;
    
    const data = {
      from: "your-email@example.com",
      to,
      subject,
      text,
    };

    try {
      await mg.messages().send(data);
      console.log("Email sent successfully");
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email", error);
      res.status(500).json({ error: "Error sending email" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
