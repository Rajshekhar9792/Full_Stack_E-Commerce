// server.js

const express = require('express');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const users = {}; // Simplified storage for demonstration
const resetTokens = {}; // Simplified storage for demonstration

app.post('/api/forgot-password', (req, res) => {
  const { email } = req.body;
  const token = crypto.randomBytes(20).toString('hex');
  resetTokens[token] = email;

  // Configure your email service
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: { user: 'your-email@gmail.com', pass: 'your-email-password' }
  });

  const resetURL = `http://localhost:3000/reset-password/${token}`;

  transporter.sendMail({
    to: email,
    subject: 'Password Reset',
    text: `Click the following link to reset your password: ${resetURL}`
  }, (err) => {
    if (err) return res.status(500).send('Error sending email');
    res.status(200).send('Reset link sent');
  });
});

app.post('/reset-password', (req, res) => {
  const { token, password } = req.body;
  const email = resetTokens[token];

  if (!email) return res.status(400).send('Invalid token');

  // Save the new password (hash it in a real application)
  users[email] = password;

  // Remove the token
  delete resetTokens[token];

  res.status(200).send('Password reset successfully');
});

app.listen(3001, () => console.log('Server running on port 3001'));
