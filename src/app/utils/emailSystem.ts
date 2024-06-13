import nodemailer from "nodemailer";

export const emailSystem = async () => {
  const transporter = nodemailer.createTransport({
    host: "smtp.example.com",
    port: 587,
    secure: false,
  });

  const mailOptions = {
    from: "your-email@example.com",
    to: "shag.sin3012@gmail.com",
    subject: "Hello from ReactJS",
    text: "Hiiiiii",
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
