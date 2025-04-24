"use server";

import { Resend } from "resend";
import MyEmail from "@/emails/MyEmail";


export const sendEmail = async (formData: FormData) => {
        try {
          const name = formData.get("name")?.toString();
          const email = formData.get("email")?.toString();
          const message = formData.get("message")?.toString();
      
          if (!name || !email || !message) {
            return { error: "Name or Email or message is missed. Please fill all" };
            
          }
          const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: "haftish4516@gmail.com", 
      subject: `New message from ${name}`,
      text: message,
      react: <MyEmail name={name} email={email} message={message} />,
    });
    console.log(data)
    if (error) {
        throw new Error(error.message);
      }
  
      return { success: true, messages: "Email sent successfully" };
    } catch (error) {
      console.error("Failed to send email:", error);
      return { 
        success: false, 
        message: error instanceof Error ? error.message : "Failed to send email" 
      };
    }
  };