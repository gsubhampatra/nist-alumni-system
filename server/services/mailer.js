import { FRONTEND_URL, GMAIL_USER, mailer } from "../configs/config.js";
import crypto from "crypto";
import log from "../utils/logger.js";

// Function to generate a random verification token
const generateVerificationToken = () => {
  return crypto.randomBytes(32).toString("hex");
};

// Function to send verification email
const sendVerificationEmail = async (userEmail) => {
  try {
    // Generate a verification token
    const verificationToken = generateVerificationToken();

    // Construct verification link (This link can point to your frontend or backend verification route)
    const verificationLink = `${FRONTEND_URL}/verify-email?token=${verificationToken}`;

    // Create email options
    const mailOptions = {
      from: GMAIL_USER, // Sender address
      to: userEmail, // Receiver's email
      subject: "Email Verification",
      text: `Please verify your email by clicking on the following link: ${verificationLink}`,
      html: `
        <h1>Verify Your Email</h1>
        <p>Hello,</p>
        <p>Thank you for signing up! Please verify your email by clicking on the following link:</p>
        <a href="${verificationLink}">Verify Email</a>
        <p>If you did not request this, please ignore this email.</p>
      `,
    };

    // Send email
    let info = await mailer.sendMail(mailOptions);
    log.info(`Email sent: ${info.messageId}`);
    // Return token for saving to the database
    return verificationToken;
  } catch (error) {
    log.error(error.message);
    throw error;
  }
};

export { sendVerificationEmail, generateVerificationToken };
