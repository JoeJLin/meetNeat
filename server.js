const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

// const items = require("./routes/api/items");

const app = express();

// body parser middleware
app.use(bodyParser.json());

// DB config
const mongoURI = process.env.DB_PATH;

mongoose.connect(mongoURI, () => {
  console.log("connected to mongoDB");
});

// use routes
// app.use("/api/items", items);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});


app.get('/', (req, res) => {
  res.send('hello')
})