const express = require("express");
const router = express.Router();
const {updateProfile} =require("../routes/auth")

const {isAuthorized} =require("../middileware/authorization")

 router.route("/updateuserprofile").put( updateProfile);