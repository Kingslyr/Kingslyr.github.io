import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Verification codes store (in-memory for demo)
const verificationCodes = new Map();

// API endpoint to send verification code
app.post("/api/send-verification-code", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    // Generate a random 6-digit code
    const code = Math.floor(100000 + Math.random() * 900000).toString();

    // Store the code (expires in 10 minutes)
    verificationCodes.set(email, {
      code,
      expiresAt: Date.now() + 10 * 60 * 1000,
    });

    // In production, use Resend to send email
    console.log(`Verification code for ${email}: ${code}`);

    res.json({
      success: true,
      message: "Verification code sent. Check your email.",
      // Development only: return code for testing
      code: process.env.NODE_ENV === "development" ? code : undefined,
    });
  } catch (error) {
    console.error("Error sending verification code:", error);
    res.status(500).json({ error: "Failed to send verification code" });
  }
});

// API endpoint to verify code
app.post("/api/verify-code", (req, res) => {
  try {
    const { email, code } = req.body;

    if (!email || !code) {
      return res.status(400).json({ error: "Email and code are required" });
    }

    const stored = verificationCodes.get(email);

    if (!stored) {
      return res.status(400).json({ error: "No verification code found for this email" });
    }

    if (Date.now() > stored.expiresAt) {
      verificationCodes.delete(email);
      return res.status(400).json({ error: "Verification code expired" });
    }

    if (stored.code !== code) {
      return res.status(400).json({ error: "Invalid verification code" });
    }

    // Code is valid
    verificationCodes.delete(email);

    res.json({
      success: true,
      message: "Email verified successfully",
    });
  } catch (error) {
    console.error("Error verifying code:", error);
    res.status(500).json({ error: "Failed to verify code" });
  }
});

// API endpoint to send approval notification email
app.post("/api/send-approval-email", async (req, res) => {
  try {
    const { email, articleTitle } = req.body;

    if (!email || !articleTitle) {
      return res.status(400).json({ error: "Email and article title are required" });
    }

    // In production, use Resend to send email
    console.log(`Sending approval email to ${email} for article: ${articleTitle}`);

    res.json({
      success: true,
      message: "Approval email sent",
    });
  } catch (error) {
    console.error("Error sending approval email:", error);
    res.status(500).json({ error: "Failed to send approval email" });
  }
});

// Contact form endpoint
app.post("/api/contact", (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Log the contact form submission
    console.log(`📧 New contact form submission:
    From: ${name} (${email})
    Subject: ${subject}
    Message: ${message}
    Time: ${new Date().toISOString()}`);

    // In production, you could send this to Formspree, email service, or database
    // For now, we just log it and return success
    res.json({
      success: true,
      message: "Thank you for your inquiry. We'll get back to you soon!"
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    res.status(500).json({ error: "Failed to process your request" });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`EnviroCore API server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
});
