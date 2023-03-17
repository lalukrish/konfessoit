const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("Students");
// const bcrypt = require("bcryptjs");

router.post("/register", (req, res) => {
  const { noParticipant, name1, name2, clgname, item } = req.body;
  // if (!noParticipant || !item) {
  //   return res.status(422).json({ error: "please add all the fields" });
  //  }

  //user is validate with name for duplication

  User.findOne({
    name1: name1,
  })
    .then((savedUser) => {
      if (savedUser) {
        return res
          .status(422)
          .json({ error: "user already register,try another" });
      }

      //store the new user with encrypted passwd

      const user = new User({
        noParticipant,
        name1,
        name2,
        clgname,
        item,
      });
      user
        .save()
        .then((user) => {
          res.json({ message: "registered sucessfully", user });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});
router.get("/students", (req, res) => {
  User.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
