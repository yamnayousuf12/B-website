import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// POST endpoint for contact form
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Create transport using Gmail SMTP or any other
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'yamnayousuf1234@gmail.com',         // ✅ replace with your Gmail
      pass: 'jnjt wpqx nvpr qjic',           // ✅ use Gmail app password, not your login
    },
  });

  const mailOptions = {
    from: email,
    to: 'yourgmail@gmail.com',             // ✅ replace with your receiving email
    subject: `New Contact from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email.' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
