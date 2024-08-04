const express = require("express");
const router = express.Router();
const { getUser } = require("../controllers/userControllers");
const verifyToken = require("../middleware/authMiddleware");

router.get("/usuarios", verifyToken, getUser);

module.exports = router;
