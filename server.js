import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

let resend = null;
if (process.env.RESEND_API_KEY) {
  resend = new Resend(process.env.RESEND_API_KEY);
}

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'support@envirocore.com';

app.post('/api/send-verification-code', async (req, res) => {
  try {
    const { email, code, name } = req.body;

    if (!email || !code || !name) {
      return res.status(400).json({ ok: false, error: 'Missing required fields' });
    }

    if (!resend) {
      console.log(`[DEMO] Would send verification code ${code} to ${email}`);
      return res.json({ ok: true, demo: true });
    }

    const result = await resend.emails.send({
      from: ADMIN_EMAIL,
      to: email,
      subject: 'EnviroCore Community - Verify Your Account',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #071220; font-size: 28px; margin-bottom: 16px;">Verify Your Community Account</h1>
          <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
            Hi <strong>${name}</strong>,
          </p>
          <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
            Use this 6-digit code to verify your EnviroCore community account and unlock article publishing:
          </p>
          <div style="background: #f5f5f5; border: 2px solid #34d399; border-radius: 12px; padding: 24px; text-align: center; margin: 32px 0;">
            <p style="font-size: 12px; color: #999; margin: 0 0 12px 0; text-transform: uppercase; letter-spacing: 2px;">Verification Code</p>
            <p style="font-size: 48px; font-weight: bold; color: #071220; margin: 0; letter-spacing: 8px; font-family: 'Courier New', monospace;">
              ${code.split('').join(' ')}
            </p>
          </div>
          <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
            This code will expire in 30 minutes. If you didn't request this, please ignore this email.
          </p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 32px 0;" />
          <p style="color: #999; font-size: 12px; text-align: center;">
            EnviroCore Environmental Engineering & Management Consultants<br/>
            <a href="https://envirocore-emc.me" style="color: #34d399; text-decoration: none;">envirocore-emc.me</a>
          </p>
        </div>
      `,
    });

    res.json({ ok: result.data?.id ? true : false, id: result.data?.id, error: result.error });
  } catch (error) {
    console.error('Email send error:', error);
    res.status(500).json({ ok: false, error: error.message });
  }
});

app.post('/api/send-approval-email', async (req, res) => {
  try {
    const { authorEmail, authorName, title, status, reviewNote } = req.body;

    if (!authorEmail || !authorName || !title) {
      return res.status(400).json({ ok: false, error: 'Missing required fields' });
    }

    if (!resend) {
      console.log(`[DEMO] Would send ${status} notification to ${authorEmail} for "${title}"`);
      return res.json({ ok: true, demo: true });
    }

    const isApproved = status === 'approved';
    const result = await resend.emails.send({
      from: ADMIN_EMAIL,
      to: authorEmail,
      subject: isApproved ? `Article Approved: ${title}` : `Article Review: ${title}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #071220; font-size: 28px; margin-bottom: 16px;">
            ${isApproved ? '✓ Article Approved' : '📝 Article Under Review'}
          </h1>
          <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
            Hi <strong>${authorName}</strong>,
          </p>
          <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
            ${isApproved 
              ? `Your article "<strong>${title}</strong>" has been approved and is now live on the community page.` 
              : `Your article "<strong>${title}</strong>" is under review by our editorial team.`
            }
          </p>
          ${reviewNote ? `
            <div style="background: #f5f5f5; border-left: 4px solid #34d399; padding: 16px; margin: 24px 0;">
              <p style="color: #999; font-size: 12px; margin: 0 0 8px 0; text-transform: uppercase;">Admin Note</p>
              <p style="color: #4b5563; margin: 0;">${reviewNote}</p>
            </div>
          ` : ''}
          <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">
            <a href="https://envirocore-emc.me/community" style="color: #34d399; text-decoration: none; font-weight: bold;">
              View Article →
            </a>
          </p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 32px 0;" />
          <p style="color: #999; font-size: 12px; text-align: center;">
            EnviroCore Community Platform
          </p>
        </div>
      `,
    });

    res.json({ ok: result.data?.id ? true : false, id: result.data?.id, error: result.error });
  } catch (error) {
    console.error('Email send error:', error);
    res.status(500).json({ ok: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`\n✓ API server running on http://localhost:${PORT}`);
  if (resend) {
    console.log(`  ✓ Email service configured with Resend`);
  } else {
    console.log(`  ⚠ Running in DEMO mode (check browser console for verification codes)`);
    console.log(`  To enable real emails: Add RESEND_API_KEY to .env.local`);
  }
  console.log();
});
