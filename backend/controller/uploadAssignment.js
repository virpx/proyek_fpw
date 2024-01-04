const multer = require("multer");
const fs = require("fs");
const path = require("path");
const { User, Kursus, Transaction, Tugas } = require("../models/data");
const jwt = require("jsonwebtoken");
const secret = "rahasia";
let id = 1;

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const folderName = `assignments/${req.body.email}`;
    if (!fs.existsSync(folderName)) {
      fs.mkdirSync(folderName, { recursive: true });
    }

    callback(null, folderName);
  },
  filename: (req, file, callback) => {
    const fileExtension = path.extname(file.originalname).toLowerCase();

    if (file.fieldname == "assignment_pdf") {
      callback(null, `${req.body.tugas_id}${fileExtension}`);
    } else if (file.fieldname == "pengguna_file[]") {
      callback(null, `${id}${fileExtension}`);
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
    const rules = /pdf/;

    const fileExtension = path.extname(file.originalname).toLowerCase();
    const fileMimeType = file.mimetype;

    const cekExt = rules.test(fileExtension);
    const cekMime = rules.test(fileMimeType);

    if (cekExt && cekMime) {
      callback(null, true);
    } else {
      callback(null, false);
      return callback(
        new multer.MulterError("Tipe file harus .pdf", file.fieldname)
      );
    }
  },
});

const singleFile = (req, res) => {
  const uploadingFile = upload.single("assignment_pdf");
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
    const tugasId = req.body.tugas_id;
    const email = req.body.email;

    const existingTugas = await Tugas.findOne({
      tugas_id: tugasId,
      user_id: id_user,
    });

    if (existingTugas) {
      const result = await Tugas.updateOne(
        {
          tugas_id: tugasId,
          user_id: id_user,
        },
        {
          $set: {
            path: `assignments/${email}/${fileName}`,
          },
        }
      );

      const body = req.body;
      return res.status(200).json(body);
    }

    const result = await Tugas.create({
      tugas_id: tugasId,
      user_id: id_user,
      path: `assignments/${email}/${fileName}`,
      score: -1,
    });

    const body = req.body;
    return res.status(200).json(body);
  });
};

const getPdf = (req, res) => {
  let { path, email, file } = req.params;
  const lokasinya = `${path}/${email}/${file}`;
  return res.status(200).sendFile(lokasinya, { root: "." });
};

module.exports = {
  singleFile,
  getPdf,
};
