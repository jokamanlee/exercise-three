const express = require("express");

const router = express.Router();
//works after /about/
router.get("/", (req, res) => res.send("About This Page:Exercise Three"));
router.get("/me", (req, res) => res.send("About Me Page:Exercise Three"));
router.get("/json", (req, res) =>
  res.send({ item: "cool", itemTwo: "cooler" })
);

module.exports = router;
