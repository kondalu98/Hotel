require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/api/send-email', (req, res) => {
  const { Name, Email, Address, Phone, Date, Time } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptionsUser = {
    from: process.env.EMAIL_USER,
    to: Email,
    subject: 'Thank you for your registration',
    text: `Hi ${Name},\n\nThank you for your registration.\n\nDetails:\nName: ${Name}\nEmail: ${Email}\nPhone: ${Phone}\nDate: ${Date}\nTime: ${Time}\nAddress: ${Address}\n\nBest regards,\nYour Company`,
  };

  transporter.sendMail(mailOptionsUser, (error, info) => {
    if (error) {
      return res.status(500).json({ error: error.toString() });
    }
    res.status(200).json({ message: 'Email sent successfully' });
  });
});

const PORT = process.env.PORT || 5002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
