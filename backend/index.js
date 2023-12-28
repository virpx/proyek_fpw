const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User, Kursus, Transaction } = require("./models/data");
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
      listkursus: [],
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
      _id: findUser[0]._id,
      role: findUser[0].role,
    },
    secret,
    { expiresIn: "3600s" }
  );
  return res.status(200).json({
    email: email,
    token: token,
    _id: findUser[0]._id,
    message: "You have successfully logged in to your account.",
  });
});

//get activeuser
app.get("/activeUser", async (req, res) => {
  let flag = false;
  let user;
  let data;
  const token = req.headers["x-auth-token"] || "";
  if (token) {
    try {
      data = jwt.verify(token, secret);
      user = await User.find({ _id: data._id });
      if (user) {
        flag = true;
      }
    } catch (err) {}
  }
  return res.status(200).json({
    user,
  });
});

//get all kursus
app.get("/kursus", async (req, res) => {
  const kursus = await Kursus.find();
  return res.status(200).json({
    kursus,
  });
});

//get list kursus user
app.get("/listKursus", async (req, res) => {
  let flag = false;
  let user;
  let data;
  const token = req.headers["x-auth-token"] || "";
  if (token) {
    try {
      data = jwt.verify(token, secret);
      user = await User.find({ _id: data._id });
      if (user) {
        flag = true;
      }
    } catch (err) {
      return res.status(400).json({
        err,
      });
    }
  }

  const kursus = await User.aggregate([
    {
      $lookup: {
        from: "kursus",
        localField: "listkursus.kursus",
        foreignField: "_id",
        as: "kursus",
      },
    },
    {
      $match: {
        _id: user[0]._id,
      },
    },
  ]);

  var listkursus = [];

  kursus[0].listkursus.map((k, index) => {
    const newData = {
      kursus: kursus[0].kursus[index],
      start_enroll: k.start_enroll,
      stop_enroll: k.stop_enroll,
      last_progress: k.last_progress,
      current_index: k.current_index,
    };
    listkursus.push(newData);
  });

  return res.status(200).json({
    listkursus,
  });
});

app.get("/kursus/:_id", async (req, res) => {
  const kursus = await Kursus.find({ _id: req.params._id });
  return res.status(200).json({
    kursus,
  });
});

//update current index
app.put("/currentindex", async (req, res) => {
  let { id_kursus, current_index } = req.body;
  let user, id_user;
  const token = req.headers["x-auth-token"] || "";
  if (token) {
    try {
      data = jwt.verify(token, secret);
      user = await User.find({ _id: data._id });
      if (user) {
        flag = true;
        id_user = data._id;
      }
    } catch (err) {
      return res.status(400).json({
        err,
      });
    }
  }

  const updateUser = await User.updateOne(
    {
      _id: id_user,
      "listkursus.kursus": id_kursus,
    },
    {
      $set: {
        "listkursus.$.current_index": current_index,
      },
    }
  );
  return res.status(200).json({ message: "sukses" });
});

//update last progress
app.put("/lastprogress", async (req, res) => {
  let { id_kursus, last_progress } = req.body;
  let user, id_user;
  const token = req.headers["x-auth-token"] || "";
  if (token) {
    try {
      data = jwt.verify(token, secret);
      user = await User.find({ _id: data._id });
      if (user) {
        flag = true;
        id_user = data._id;
      }
    } catch (err) {
      return res.status(400).json({
        err,
      });
    }
  }

  const getUser = await User.findOne(
    { _id: id_user },
    { listkursus: { $elemMatch: { kursus: id_kursus } } }
  );

  let specificListKursus;
  if (getUser) {
    specificListKursus = getUser.listkursus[0];
  }

  if (specificListKursus.last_progress < last_progress) {
    const updateUser = await User.updateOne(
      {
        _id: id_user,
        "listkursus.kursus": id_kursus,
      },
      {
        $set: {
          "listkursus.$.last_progress": last_progress,
        },
      }
    );
  }

  return res.status(200).json({ message: "sukses" });
});

//get current course progress info
app.get("/currentCourse", async (req, res) => {
  let { id_kursus } = req.query;
  let user, id_user;
  const token = req.headers["x-auth-token"] || "";
  if (token) {
    try {
      data = jwt.verify(token, secret);
      user = await User.find({ _id: data._id });
      if (user) {
        flag = true;
        id_user = data._id;
      }
    } catch (err) {
      return res.status(400).json({
        err,
      });
    }
  }
  const getUser = await User.findOne(
    { _id: id_user },
    { listkursus: { $elemMatch: { kursus: id_kursus } } }
  );

  let specificListKursus;
  if (getUser) {
    specificListKursus = getUser.listkursus[0];
  }

  return res.status(200).json({ specificListKursus });
});

//submit jawaban
app.post("/submitquiz", async (req, res) => {
  let { id_quiz, id_kursus, jawaban } = req.body;
  const getKursus = await Kursus.findOne({ _id: id_kursus });

  let filteredQuiz = getKursus.quiz.filter(
    (quiz) => quiz._id.toString() === id_quiz
  );

  let score = 0;
  let maxScore = 0;
  filteredQuiz[0].questions.map((q, index) => {
    q.answers.map((a) => {
      if (a.isCorrect) {
        if (jawaban[index] == a.text) {
          score += q.score;
        }
        maxScore += q.score;
      }
    });
  });

  let user, id_user;
  const token = req.headers["x-auth-token"] || "";
  if (token) {
    try {
      data = jwt.verify(token, secret);
      user = await User.find({ _id: data._id });
      if (user) {
        flag = true;
        id_user = data._id;
      }
    } catch (err) {
      return res.status(400).json({
        err,
      });
    }
  }
  const newData = { name: filteredQuiz[0].name, score: score };
  const pushNilai = await User.updateOne(
    { _id: id_user, "listkursus.kursus": id_kursus },
    { $push: { "listkursus.$.nilai_quiz": newData } }
  );
  console.log(pushNilai);
  return res.status(200).json({ score, maxScore });
});

app.listen(port, async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/proyekfpw");
    console.log("Database connected");
  } catch (e) {
    console.log("Error database connection \n", e);
  }
  console.log(`Example app listening on port ${port}!`);
});
