


const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

// CORS configuration
app.use(cors({
  origin: ["https://khuportfoliofrontend.vercel.app/"], 
  methods: ["POST", "GET"],
  credentials: true
}));

app.use(express.json());
app.use("/", router);

// Test endpoint
app.get("/", (req, res) => {
  res.json({ msg: "Welcome to my API" });
});

// Nodemailer setup
const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "12212103@nitkkr.ac.in",
    pass: "9466860492"
  },
});

// Verify email transport setup
contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

// POST endpoint to handle contact form submission
router.post("/contact", (req, res) => {
  const { firstName, lastName, email, message, phone } = req.body;
  const name = `${firstName} ${lastName}`;
  const mail = {
    from: name,
    to: "12212103@nitkkr.ac.in",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  // Send email
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email" });
    } else {
      console.log("Email sent successfully");
      res.status(200).json({ status: "Message Sent" });
    }
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
