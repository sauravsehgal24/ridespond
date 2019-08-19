const express = require("express");
const app = express();
let cors = require("cors");
const port = process.env.PORT || 3001;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get("/api", (req, res) => {
  res.send({
    name: "hi"
  });
});

app.get("/", (req, res) => {
  res.send({
    name: "root"
  });
});

app.listen(port, function() {
  console.log("running : " + port);
});