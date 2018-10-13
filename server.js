const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const yelp = require("yelp-fusion");
require("dotenv").config();

const items = require("./routes/api/items");
const users = require("./routes/api/users");

const app = express();

// body parser middleware
app.use(bodyParser.json());

var allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};


  app.use(allowCrossDomain);
  //some other code


// DB config
const mongoURI = process.env.DB_PATH;

mongoose.connect(mongoURI, () => {
  console.log("connected to mongoDB");
});

// use routes
app.use("/api/items", items);
app.use("/api/users", users);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});


app.get('/', (req, res) => {
  res.send('hello')
})



