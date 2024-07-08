const nodemailer = require("nodemailer")

const sendEmail = async (options) => {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  
    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: options.email,
      subject: options.subject,
      text: options.message,
    };
  
    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
  
      const errorMessage = error.message?.includes('ECONNREFUSED')
        ? 'There seems to be a problem with the email server connection. Please try again later.'
        : (error.message?.includes('Invalid login')
            ? 'The provided email credentials might be incorrect. Please check your .env file.'
            : 'An error occurred while sending the password reset email.');
  
      throw new Error(errorMessage);
    }
  };

  module.exports = sendEmail;
  