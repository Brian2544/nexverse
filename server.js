const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();
const app = express();

// Middleware for parsing JSON bodies
app.use(express.json());

// Create a transporter using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'drmuchiriconsulting@gmail.com',
    pass: process.env.EMAIL_PASSWORD, // Use environment variable for security
  },
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Email options
    const mailOptions = {
      from: 'drmuchiriconsulting@gmail.com',
      to: 'drmuchiriconsulting@gmail.com',
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Serve static files with caching headers
app.use('/assets/images', express.static(path.join(__dirname, 'public/assets/images'), {
  maxAge: '1y',
  setHeaders: (res, path) => {
    if (path.endsWith('.webp')) {
      res.setHeader('Content-Type', 'image/webp');
    }
    res.setHeader('Cache-Control', 'public, max-age=31536000');
  }
}));

// Serve other static files
app.use(express.static(path.join(__dirname, 'public')));

// Handle all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 