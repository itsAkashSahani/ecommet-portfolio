import { NextRequest, NextResponse } from 'next/server';
import {
  sendMail,
  prepareAdminEmailTemplate,
  prepareACustomerEmailTemplate,
} from "@/lib/send-mail";

export async function POST(
  req: NextRequest
) {
  try {
    const values = await req.json();

    console.log("Received values:", values);
    
    const [adminHtml, customerHtml] = await Promise.all([
      prepareAdminEmailTemplate(values),
      prepareACustomerEmailTemplate(values),
    ]);

    const mailText = `Name: ${values.name}\nEmail: ${values.email}\nMobile Number: ${values.mobile_number}\nMessage: ${values.message}`;
    const [response, customerResponse] = await Promise.all([
      sendMail({
        subject: "New Application Received",
        text: mailText,
        html: adminHtml,
      }),
      sendMail({
        subject: "Application Confirmation",
        text: `Thank you for your application, ${values.name}. We will get back to you soon.`,
        html: customerHtml,
        sendTo: values.email,
      }),
    ]);

    if (response?.messageId && customerResponse?.messageId) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false });
    }
  } catch (error) {
    console.error("Error in sending mail:", error);
    return NextResponse.json({ success: false });
  }
}
