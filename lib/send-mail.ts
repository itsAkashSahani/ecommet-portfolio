"use server";

import nodemailer from "nodemailer";
import { promises as fs } from "fs";
import path from "path";

const SMTP_SERVER_HOST = process.env.SMTP_SERVER_HOST;
const SMTP_SERVER_USERNAME = process.env.SMTP_SERVER_USERNAME;
const SMTP_SERVER_PASSWORD = process.env.SMTP_SERVER_PASSWORD;
const SITE_MAIL_RECIEVER = process.env.SEND_EMAIL_TO;
const SITE_MAIL_SENDER = process.env.SEND_EMAIL_FROM;

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: SMTP_SERVER_HOST,
  port: 587,
  secure: true,
  auth: {
    user: SMTP_SERVER_USERNAME,
    pass: SMTP_SERVER_PASSWORD,
  },
});

export const sendMail = async ({
  email,
  sendTo,
  subject,
  text,
  html,
}: {
  email?: string;
  sendTo?: string;
  subject: string;
  text?: string;
  html?: string;
}) => {
  try {
    const isVerified = await transporter.verify();
  } catch (error) {
    console.error(
      "Something Went Wrong",
      SMTP_SERVER_USERNAME,
      SMTP_SERVER_PASSWORD,
      error
    );
    return;
  }

  const info = await transporter.sendMail({
    from: email || SITE_MAIL_SENDER,
    to: sendTo || SITE_MAIL_RECIEVER,
    subject: subject,
    text: text,
    html: html ? html : "",
  });

  console.log("Message Sent", info.messageId);
  console.log("Mail sent to", SITE_MAIL_RECIEVER);

  return info;
};

export const prepareAdminEmailTemplate = async ({
  name,
  email,
  mobile_number,
  message,
}: {
  name: string;
  email: string;
  mobile_number: string;
  message: string;
}) => {
  const adminTemplate = path.join(
    process.cwd(),
    "emails",
    "admin-notification.html"
  );
  let compiledAdminHtml = await fs.readFile(adminTemplate, "utf8");

  // Replace placeholders with actual data
  return (compiledAdminHtml = compiledAdminHtml
    .replace("{{name}}", name)
    .replace("{{email}}", email)
    .replace("{{mobile}}", mobile_number)
    .replace("{{message}}", message));
};

export const prepareACustomerEmailTemplate = async ({
  name,
  email,
  mobile_number,
  message,
}: {
  name: string;
  email: string;
  mobile_number: string;
  message: string;
}) => {
  const customerTemplate = path.join(
    process.cwd(),
    "emails",
    "customer-confirmation.html"
  );
  let compiledHtml = await fs.readFile(customerTemplate, "utf8");

  // Replace placeholders with actual data
  return (compiledHtml = compiledHtml
    .replace("{{name}}", name)
    .replace("{{email}}", email)
    .replace("{{mobile}}", mobile_number)
    .replace("{{message}}", message));
};
