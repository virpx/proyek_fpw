const multer = require("multer");
const AWS = require('aws-sdk');
const fs = require('@cyclic.sh/s3fs/promises')("cyclic-clean-tam-worm-ap-northeast-2");
const path = require("path");
const { User, Kursus, Transaction, Tugas } = require("../models/data");
const jwt = require("jsonwebtoken");
const secret = "rahasia";
let id = 1;
const s3 = new AWS.S3(); 
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
  storage: multer.memoryStorage(),
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

    const fileName = req.body.tugas_id + path.extname(req.file.originalname).toLowerCase();
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
      const params = {
        Bucket: 'cyclic-clean-tam-worm-ap-northeast-2',
        Key: `assignments/${email}/${fileName}`,
        Body: req.file.buffer,
      };

      s3.upload(params, (err, data) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Error uploading file');
        }
        const body = req.body;
        return res.status(200).json(body);
      })
    }

    const result = await Tugas.create({
      tugas_id: tugasId,
      user_id: id_user,
      path: `assignments/${email}/${fileName}`,
      score: -1,
    });
    const params = {
      Bucket: 'cyclic-clean-tam-worm-ap-northeast-2',
      Key: `assignments/${email}/${fileName}`,
      Body: req.file.buffer,
    };

    s3.upload(params, (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error uploading file');
      }
      const body = req.body;
      return res.status(200).json(body);
    })
  });
};

const getPdf = (req, res) => {
  let { path, email, file } = req.params;
  const lokasinya = `${path}/${email}/${file}`;
  const params = {
    Bucket: 'cyclic-clean-tam-worm-ap-northeast-2',
    Key: lokasinya,
  };
  const s3Stream = s3.getObject(params).createReadStream();
  res.setHeader('content-type', 'application/pdf');
  s3Stream.pipe(res);
  // return res.status(200).sendFile(lokasinya, { root: "." });
};

module.exports = {
  singleFile,
  getPdf,
};
