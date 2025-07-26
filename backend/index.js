// import express from 'express';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import nodemailer from 'nodemailer';

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // POST endpoint for contact form
// app.post('/api/contact', async (req, res) => {
//   const { name, email, message, } = req.body;

//   // Create transport using Gmail SMTP or any other
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'yamnayousuf1234@gmail.com',         // ✅ replace with your Gmail
//       pass: 'jnjt wpqx nvpr qjic',           // ✅ use Gmail app password, not your login
//     },
//   });

//   const mailOptions = {
//     from: email,
//     to: 'yourgmail@gmail.com',             // ✅ replace with your receiving email
//     subject: `New Contact from ${name}`,
//     text: message,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     console.log('Email sent successfully');
//     res.status(200).json({ success: true, message: 'Email sent successfully!' });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).json({ success: false, message: 'Failed to send email.' });
//   }
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Backend running at http://localhost:${PORT}`);
// });


import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// POST route for contact form
app.post("/api/contact", async (req, res) => {
  const { name, email, company, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  // Setup transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
    },
  });

  // Mail options
  const mailOptions = {
    from: email,
    to: "your_email@gmail.com",
    subject: `Contact Form Submission from ${name}`,
    text: `
Name: ${name}
Email: ${email}
Company: ${company}
Phone: ${phone}
Message: ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ error: "Failed to send message." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
