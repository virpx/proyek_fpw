const multer = require("multer");
const AWS = require('aws-sdk');
const fs = require('@cyclic.sh/s3fs/promises')("cyclic-clean-tam-worm-ap-northeast-2");
const path = require("path");
const { User, Kursus, Transaction } = require("../models/data");
const jwt = require("jsonwebtoken");
const secret = "rahasia";
let id = 1;
const { ObjectId } = require("mongodb");
const s3 = new AWS.S3();
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

const getPPTeacher = async (req, res) => {
  let { id_user } = req.query;
  const user = await User.findOne({ _id: new ObjectId(id_user) });

  if (user.profile_path == null) {
    const lokasinya = "profiles/dummy.jpeg";
    return res.status(200).sendFile(lokasinya, { root: "." });
  }
  const lokasinya = user.profile_path;
  const params = {
    Bucket: 'cyclic-clean-tam-worm-ap-northeast-2',
    Key: lokasinya,
  };
  const s3Stream = s3.getObject(params).createReadStream();
  res.setHeader('content-type', 'image/'+lokasinya.split('.')[1]);
  s3Stream.pipe(res);
  // return res.status(200).sendFile(lokasinya, { root: "." });
};

module.exports = {
  getPPTeacher,
};
