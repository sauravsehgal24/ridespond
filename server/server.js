const express = require("express");
const app = express();
let cors = require("cors");
const port = process.env.PORT || 3001;
const bodyParser = require("body-parser");
const User = require("./models/User");
const multer = require("multer");


const uploadsServe = express.static('uploads');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/uploads',uploadsServe);


const fileFilter = (req, file, next) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    next(null, true);
  } else {
    next(null, false);
  }
};

const upload = multer({
  dest: "uploads",
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter
});


app.post('/api/upload/avatar', upload.single('avatar'), (req, res) => {
  console.log('inside upload')
  res.json({
    message: 'uploaded',
    file: req.file,
  });
});

app.get("/api", (req, res) => {
  return User.findAll().then(collection =>
    res.json({
      collection
    })
  );
});

app.get("/", (req, res) => {
  // res.send({
  //   name: "root"
  // });
});

app.post("/api/add", (req, res) => {
  console.log("inside");
  return User.createOne(req)
    .then(res => res)
    .catch(err => err);
});

app.listen(port, function() {
  console.log("running : " + port);
});
