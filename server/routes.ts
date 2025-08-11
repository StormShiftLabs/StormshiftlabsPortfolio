import type { Express } from "express";
import { createServer, type Server } from "http";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = contactFormSchema.parse(req.body);
      
      // Create transporter for sending emails
      const transporter = nodemailer.createTransporter({
        host: process.env.SMTP_HOST || "smtp.gmail.com",
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: false,
        auth: {
          user: process.env.SMTP_USER || process.env.EMAIL_USER,
          pass: process.env.SMTP_PASS || process.env.EMAIL_PASS,
        },
      });

      // Email to site owner
      const ownerMailOptions = {
        from: process.env.SMTP_USER || process.env.EMAIL_USER,
        to: "justin@stormshiftlabs.com",
        subject: `Portfolio Contact: ${validatedData.subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Subject:</strong> ${validatedData.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
        `,
      };

      // Auto-reply to sender
      const autoReplyOptions = {
        from: process.env.SMTP_USER || process.env.EMAIL_USER,
        to: validatedData.email,
        subject: "Thank you for contacting StormShift Labs",
        html: `
          <h2>Thank you for reaching out!</h2>
          <p>Hi ${validatedData.name},</p>
          <p>Thank you for your interest in working together. I've received your message about "${validatedData.subject}" and will get back to you within 24-48 hours.</p>
          <p>In the meantime, feel free to check out my latest projects on the portfolio.</p>
          <p>Best regards,<br>Justin Madanayake<br>StormShift Labs</p>
        `,
      };

      // Send both emails
      await Promise.all([
        transporter.sendMail(ownerMailOptions),
        transporter.sendMail(autoReplyOptions),
      ]);

      res.json({ 
        success: true, 
        message: "Message sent successfully" 
      });
      
    } catch (error) {
      console.error("Contact form error:", error);
      
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      
      res.status(500).json({ 
        success: false, 
        message: "Failed to send message. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
