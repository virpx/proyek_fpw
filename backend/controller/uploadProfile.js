const multer = require("multer");
const fs = require("fs");
const path = require("path");
const { User, Kursus, Transaction } = require("../models/data");
const jwt = require("jsonwebtoken");
const secret = "rahasia";
let id = 1;

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const folderName = `profiles/`;

    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName, { recursive: true });
    }

    callback(null, folderName);
  },
  filename: (req, file, callback) => {
    console.log(file);
    const fileExtension = path.extname(file.originalname).toLowerCase();
    if (file.fieldname == "profile_image") {
      callback(null, `${req.body.email}${fileExtension}`);
    } else if (file.fieldname == "pengguna_file[]") {
      callback(null, `${req.body.email}${fileExtension}`);
      id++;
    } else {
      callback(null, false);
    }
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 50000000,
  },
  fileFilter: (req, file, callback) => {
    const rules = /jpeg|jpg|png/;

    const fileExtension = path.extname(file.originalname).toLowerCase();
    const fileMimeType = file.mimetype;

    const cekExt = rules.test(fileExtension);
    const cekMime = rules.test(fileMimeType);

    if (cekExt && cekMime) {
      callback(null, true);
    } else {
      callback(null, false);
      return callback(
        new multer.MulterError(
          "Tipe file harus .png, .jpg atau .jpeg",
          file.fieldname
        )
      );
    }
  },
});

const singleFile = (req, res) => {
  const uploadingFile = upload.single("profile_image");
  uploadingFile(req, res, async (err) => {
    if (err) {
      console.log(err);
      return res
        .status(400)
        .send((err.message || err.code) + " pada field " + err.field);
    }

    let user, id_user;
    const token = req.headers["x-auth-token"] || "";

    if (token) {
      try {
        const data = jwt.verify(token, secret);
        user = await User.findOne({ _id: data._id });

        if (user) {
          flag = true;
          id_user = data._id;
        }
      } catch (err) {
        return res.status(400).json({
          message: err.message,
        });
      }
    }

    const fileName = req.file.filename;

    const result = await User.updateOne(
      { _id: id_user },
      {
        $set: {
          profile_path: "profiles/" + fileName.toString(),
          updatedAt: new Date(),
        },
      }
    );

    return res.status(200).json({ fileName });
  });
};

const getImage = async (req, res) => {
  let user, id_user;
  const token = req.headers["x-auth-token"] || "";

  if (token) {
    try {
      const data = jwt.verify(token, secret);
      user = await User.findOne({ _id: data._id });

      if (user) {
        flag = true;
        id_user = data._id;
      }
    } catch (err) {
      return res.status(400).json({
        message: err.message,
      });
    }
  }

  if (user.profile_path == null) {
    const lokasinya = "profiles/dummy.jpeg";

    return res.status(200).sendFile(lokasinya, { root: "." });
  }
  const lokasinya = user.profile_path;
  return res.status(200).sendFile(lokasinya, { root: "." });
};

module.exports = {
  singleFile,
  getImage,
};
