const express = require("express");
const router = express.Router();

// @route   api/auth
// @desc
// @access  Public

router.get("/", (req, res) => {
  res.send("Auth route");
});

module.exports = router;
