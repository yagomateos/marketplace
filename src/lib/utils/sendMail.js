'use server'
// utils/sendEmail.js
import mailgun from 'mailgun-js';

const sendEmail = async (email) => {
  if (!email) {
    throw new Error('Email is required');
  }

  const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN
  });

  const data = {
    from: 'consulta@vendalia.es',
    to: email,
    subject: 'Please verify your account',
    text: `Please verify your account by following the URL below.\n\nhttps://yourwebsite.com/verify?email=${email}`
  };

  try {
    await new Promise((resolve, reject) => {
      mg.messages().send(data, (error, body) => {
        if (error) {
          console.error('Mailgun Error:', error);
          reject(error);
        } else {
          console.log('Mailgun Response:', body);
          resolve(body);
        }
      });
    });
  } catch (error) {
    console.error('Failed to send email:', error);
    throw new Error('Failed to send email');
  }
};

export default sendEmail;
