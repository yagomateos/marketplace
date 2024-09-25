'use server'
// utils/sendEmail.js
// import mailgun from 'mailgun-js';
import nodemailer from 'nodemailer';
import { confirmEmailTemplate } from './mailTemplates/confirmEmail'
import { ResetPasswordEmailTemplate } from './mailTemplates/resetEmail'
import{PasswordSuccessEmailTemplate} from './mailTemplates/passwordSuccess'
import {EmailSuccessEmailTemplate} from './mailTemplates/emailSuccess'
import { TokenManager } from './tokenManager'


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
        try {
          const tokenInserted = await TokenManager('email', email)
          if (tokenInserted) {
            const conFirmEmail = confirmEmailTemplate(email, tokenInserted)
            const sendEmailFunc = sendMailFunc(email, conFirmEmail.subject, conFirmEmail.body)
            return sendEmailFunc;
          }

        } catch (error) {
          console.log(error)
        }

      }
      break;

    case 'resetPassword':
      {
        try {
          const tokenInserted = await TokenManager('email', email)
          if (tokenInserted) {
            const conFirmEmail = ResetPasswordEmailTemplate(email, tokenInserted)
            const sendEmailFunc = sendMailFunc(email, conFirmEmail.subject, conFirmEmail.body)
            return sendEmailFunc;
          }

        } catch (error) {
          console.log(error)
        }
      }
      break;
    case 'passwordsuccess' : 
    {
      try {
        const conFirmEmail = PasswordSuccessEmailTemplate()
        const sendEmailFunc = sendMailFunc(email, conFirmEmail.subject, conFirmEmail.body)
        return sendEmailFunc;
      } catch (error) {
        console.log(error)
      }
      
    }
    break;
    case 'emailsuccess' : 
    {
      try {
        const conFirmEmail = EmailSuccessEmailTemplate()
        const sendEmailFunc = sendMailFunc(email, conFirmEmail.subject, conFirmEmail.body)
        return sendEmailFunc;
      } catch (error) {
        console.log(error)
      }

    }
    break;
  }


}
