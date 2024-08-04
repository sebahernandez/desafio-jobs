const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController.js");

router.post("/usuarios", registerUser);
router.post("/login", loginUser);

module.exports = router;
