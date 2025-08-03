"use server";

import { Resend } from "resend";
import EmailTemplate from "@/components/EmailTemplate";

export async function sendEmail(validatedData) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const { name, email, message } = validatedData;

  try {
    // Basic validation
    if (!name || !email || !message) {
      return {
        success: false,
        message: "Alle felt må fylles ut.",
      };
    }

    // Resend API call to send the email
    const { data, error } = await resend.emails.send({
      from: "Portefølje <" + process.env.SENDER_EMAIL + ">",
      to: process.env.CONTACT_EMAIL || "",
      subject: "Ny melding fra kontaktskjema",
      react: EmailTemplate({
        name,
        email,
        message,
      }),
    });

    if (error) {
      console.error("Error sending email:", error);
      return {
        success: false,
        message: "Noe gikk galt med sendingen av e-posten.",
        errors: [error.message],
      };
    }

    console.log("Email sent successfully:", data);
    return {
      success: true,
      message: "Meldingen ble sendt!",
    };
  } catch (error) {
    console.error("Unexpected error:", error);
    return {
      success: false,
      message: "Noe gikk galt. Vennligst prøv igjen senere.",
    };
  }
}
