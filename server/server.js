const express = require("express");
const app = express();
let cors = require("cors");
const port = process.env.PORT || 3001;
const bodyParser = require("body-parser");
const path = require('path');
const getSqlConnection = require('./database/config/connectionPool');
const Promise = require('bluebird');
const User = require('./models/User')


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());



app.get("/api", (req, res) => {
  return User.findAll()
      .then(collection =>
        res.json({
          collection,
        }))
});

app.get("/", (req, res) => {
  // res.send({
  //   name: "root"
  // });
  

});

app.post("/api/add",(req,res)=>{
    const {body:{message}} = req;
    res.send(message+' hi hello');
});

app.listen(port, function() {
  console.log("running : " + port);
});
