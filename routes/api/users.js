const express = require("express");
const router = express.Router();

const User = require('../../models/User');

router.get('/', (req, res) => {
  res.send('hello')
})

router.post('/', (req, res) => {
  User.findOne({userId:  req.body.userId}, (err, user) => {
    if(!user) {
      const newUser = new User({
        userName: req.body.name,
        userId: req.body.userId,
        email: req.body.email,
        picture: req.body.picture,
      })
      newUser.save().then(() => res.send('user saved'));
    } else {
      res.send(req.body)
    }
  })
  
})

module.exports = router;