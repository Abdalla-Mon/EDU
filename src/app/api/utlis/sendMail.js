import nodemailer from "nodemailer";

export async function sendEmail(to, subject, text) {
  // Create a transporter
  let transporter = nodemailer.createTransport({
    service: "gmail", // Use Gmail as the email service
    auth: {
      user: process.env.EMAIL_USERNAME, // Your Gmail address
      pass: process.env.EMAIL_PASSWORD, // Your Gmail password
    },
  });

  // Set up email data with unicode symbols
  let mailOptions = {
    from: process.env.EMAIL_USERNAME, // Sender address
    to: to, // List of receivers
    subject: subject, // Subject line
    text: text, // Plain text body
  };

  // Send the email
  let info = await transporter.sendMail(mailOptions);

  console.log("Message sent: %s", info.messageId);
}
