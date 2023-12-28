const mongoose = require("mongoose");

const materiKursusSchema = new mongoose.Schema(
  {
    path: String,
  },
  {
    versionKey: false,
  }
);

const answerSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    isCorrect: {
      type: Boolean,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const questionSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: true,
    },
    answers: [answerSchema],
    score: Number,
  },
  {
    versionKey: false,
  }
);

const quizSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  questions: [questionSchema],
});

const kursusSchema = new mongoose.Schema(
  {
    nama_kursus: String,
    kategori: String,
    harga: Number,
    materi: [materiKursusSchema],
    quiz: [quizSchema],
    createdAt: Date,
    updatedAt: Date,
  },
  {
    versionKey: false,
  }
);

const userSchema = new mongoose.Schema(
  {
    email: String,
    name: String,
    password: String,
    profile_path: String,
    role: Number, //student 0 || teacher 1
    active: Number,
    createdAt: Date,
    updatedAt: Date,
    listkursus: [
      {
        kursus: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Kursus",
        },
        last_progress: { type: Number, default: 1 },
        current_index: { type: Number, default: 1 },
        nilai_quiz: [
          {
            name: String,
            score: Number,
          },
        ],
      },
    ],
  },
  {
    versionKey: false,
  }
);

const transactionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  kursus: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Kursus",
    required: true,
  },
  status: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Transaction = mongoose.model("Transaction", transactionSchema);
const Kursus = mongoose.model("Kursus", kursusSchema);
const User = mongoose.model("User", userSchema);

module.exports = { Kursus, User };
