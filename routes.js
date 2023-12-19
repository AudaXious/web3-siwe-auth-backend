const express = require("express");
const router = express.Router();
const fs = require("fs");
const authController = require("./controllers/authController");

//Authentication/Backend

router.get("/api/nonce", authController.Nonce);
router.post("/api/verify", authController.Verify);

module.exports = router;
