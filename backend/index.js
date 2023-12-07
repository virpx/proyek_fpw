const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Kursus } = require("./models/data");
const app = express();
const port = 3000;
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:5173",
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const helper = require("./helper");

const secret = "rahasia";

app.get("/", (req, res) => {
  return res.status(200).json({
    message: "halo",
  });
});

app.post("/register", async (req, res) => {
  let { name, password, cpassword, email, role } = req.body;

  if (password.length < 8) {
    return res.status(400).json({
      message: "Minimum password length is 8 characters!",
    });
  }

  if (password !== cpassword) {
    return res.status(400).json({
      message: "Password and Confirm Password Unmatched!",
    });
  }

  let checkEmail = await User.find({ email: email });

  if (checkEmail.length !== 0) {
    return res.status(400).json({ message: "Email already in use" });
  }

  let hashedPassword;
  await bcrypt.hash(password, 10).then((hash) => {
    hashedPassword = hash;
  });

  const addUser = await User.insertMany([
    {
      name: name,
      password: hashedPassword,
      email: email,
      profile_path: null,
      role: parseInt(role),
      active: 1,
      createdAt: helper.formatDate(new Date()),
      updatedAt: helper.formatDate(new Date()),
    },
  ]);

  return res.status(200).json({
    message: "Registered Succesfully!",
  });
});

app.post("/login", async (req, res) => {
  let { email, password } = req.body;
  const findUser = await User.find({
    email: email,
  });

  if (findUser == 0) {
    return res
      .status(400)
      .json({ message: "The user has not been registered" });
  }

  const checkPassword = await bcrypt.compare(password, findUser[0].password);

  if (!checkPassword) {
    return res.status(400).json({ message: "Incorrect Password" });
  }

  let token = jwt.sign(
    {
      id: findUser[0].id,
      role: findUser[0].role,
      api_key: findUser[0].api_key,
    },
    secret,
    { expiresIn: "3600s" }
  );
  return res.status(200).json({
    email: email,
    token: token,
    message: "You have successfully logged in to your account.",
  });
});

app.listen(port, async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/proyeksdp");
    console.log("Database connected");
  } catch (e) {
    console.log("Error database connection \n", e);
  }
  console.log(`Example app listening on port ${port}!`);
});
