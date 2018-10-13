const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const yelp = require("yelp-fusion");
require("dotenv").config();

// const items = require("./routes/api/items");
const users = require("./routes/api/users");

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
app.use("/api/users", users);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});


app.get('/', (req, res) => {
  res.send('hello')
})



const client = yelp.client(process.env.YELP_KEY);

// client
//   .search({
//     term: "Sushi",
//     location: "san francisco, ca"
//   })
//   .then(response => {
//     console.log(response.jsonBody.businesses);
//   })
//   .catch(e => {
//     console.log(e);
//   });