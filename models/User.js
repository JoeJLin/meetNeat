const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  picture: {
    type: String
  },
  history: [
    {
      restaurant: {
        type: String
      },
      time: {
        type: Date,
        default: Date.now
      }
    }
  ]
});

module.exports = User = mongoose.model("User", UserSchema);