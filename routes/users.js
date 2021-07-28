const express = require("express");
const router = express.Router();

//Submitting to the server, adding a contact
//A put is to update something already on the server

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post("/", (req, res) => {
  res.send("Register a user");
});

module.exports = router;
