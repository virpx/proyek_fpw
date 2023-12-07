const mongoose = require("mongoose");

const komponenKursusSchema = new mongoose.Schema(
  {
    path: String,
    type: String,
  },
  {
    versionKey: false,
  }
);

const kursusSchema = new mongoose.Schema(
  {
    nama_kursus: String,
    batas_waktu: Number, //dalam bulan
    kategori: String,
    harga: Number,
    komponen_kursus: [komponenKursusSchema],
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
    role: Number,
    active: Number,
    createdAt: Date,
    updatedAt: Date,
    listkursus: [
      {
        kursus: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Kursus",
        },
        start_enroll: Date,
        stop_enroll: Date,
        last_progress: Number,
        current_index: Number,
      },
    ],
  },
  {
    versionKey: false,
  }
);

const Kursus = mongoose.model("Kursus", kursusSchema);
const User = mongoose.model("User", userSchema);

module.exports = { Kursus, User };
