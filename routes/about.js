const express = require("express");

const router = express.Router();

router.get("/", (req, res) => res.send("About This Page:Exercise Three"));
router.get("/me", (req, res) => res.send("About Me Page:Exercise Three"));

module.exports = router;
