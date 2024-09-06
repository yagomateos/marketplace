'use server'
// utils/sendEmail.js
// import mailgun from 'mailgun-js';
import nodemailer from 'nodemailer';
import { confirmEmailTemplate } from './mailTemplates/confirmEmail'


async function sendMailFunc(email, subject, emailBody) {

  // SMTP configuration
  const transporter = nodemailer.createTransport({
    host: 'smtp.eu.mailgun.org', // Correct for EU region
    port: 587, // Mailgun SMTP port
    auth: {
      user: 'marketing@vendalia.es', // Your Mailgun SMTP username
      pass: process.env.MAILGUN_SMTP_PASSWORD, // Your Mailgun SMTP password
    },
  });

  try {
    // Send email
    const info = await transporter.sendMail({
      from: 'marketing@vendalia.es', // Sender's email address
      to: email,
      subject: subject,
      html: emailBody,
    });
    return info.messageId;

  } catch (error) {
    throw error;
  }
}

export default async function sendEmail(email, what) {

  if (!email) {
    throw new Error('Email is required');
  }

  // set body and subject
  switch (what) {
    case 'confirmEmail':
      {
        const conFirmEmail = confirmEmailTemplate()
        const sendEmailFunc = sendMailFunc(email, conFirmEmail.subject, conFirmEmail.body)
        return sendEmailFunc;
      }
      break;
  }


}
