import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import "dotenv/config";

const port = 6969;
const app = express();
app.use(cors({ options: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
console.log(process.env.MY_USERNAME);
console.log(process.env.PASSWORD);


app.post("/sendEmail", (req, res) => {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_USERNAME,
      pass: process.env.PASSWORD,
    },
  });

  let msg = {
    from: process.env.MY_USERNAME,
    to: process.env.MY_USERNAME,
    subject: "You have a new message from your fans",
    text: `${name} with email ${email} has a message for you - ${message}`,
  };

  transporter
    .sendMail(msg)
    .then((info) => {
      console.log("Email Sent: " + info.response);
    })
    .catch((err) => console.log(err));
});

app.listen(port, () => console.log("Server has started"));