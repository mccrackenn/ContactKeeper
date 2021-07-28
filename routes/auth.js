const express = require("express");
const router = express.Router();

//Submitting to the server, adding a contact
//A put is to update something already on the server

// @route   GET api/auth
// @desc    Get logged user
// @access  Private
router.get("/", (req, res) => {
  res.send("Get logged in user");
});

// @route   POST api/auth
// @desc    Auth user & get token
// @access  Public
router.post("/", (req, res) => {
  res.send("Log in user");
});

module.exports = router;
