
// import express from "express";
// import cors from "cors";
// import nodemailer from "nodemailer";
// import dotenv from "dotenv";
// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // POST route for contact form
// app.post("/api/contact", async (req, res) => {
//   const { name, email, company, phone, message } = req.body;

//   if (!name || !email || !message) {
//     return res.status(400).json({ error: "Name, email, and message are required." });
//   }

//   // Setup transporter
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//     },
//   });

//   // Mail options
//   const mailOptions = {
//     from: email,
//     to: "your_email@gmail.com",
//     subject: `Contact Form Submission from ${name}`,
//     text: `
// Name: ${name}
// Email: ${email}
// Company: ${company}
// Phone: ${phone}
// Message: ${message}
//     `,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: "Message sent successfully!" });
//   } catch (error) {
//     console.error("Email send error:", error);
//     res.status(500).json({ error: "Failed to send message." });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });


import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });

/* ✅ Mongoose schema */
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  company: String,
  phone: String,
  message: String,
});
const Contact = mongoose.model("Contact", contactSchema);

/* ✅ Contact form POST route */
app.post("/api/contact", async (req, res) => {
  const { name, email, company, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  // Save to MongoDB
  try {
    const newContact = new Contact({ name, email, company, phone, message });
    await newContact.save();
    console.log("✅ Contact saved to DB");

    // Send email
    const transporter = nodemailer.createTransport({
       host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false, // use true for port 465, false for 587
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: `Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Company: ${company}
Phone: ${phone}
Message: ${message}
      `,
    };
await transporter.sendMail(mailOptions);

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent:", info.response);
      res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
      console.error("Email send error:", error);
      res.status(500).json({ error: "Failed to send message." });
    }
  } catch (error) {
    console.error("❌ Error saving/sending:", error);
    res.status(500).json({ error: "Failed to process the request." });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
