const express = require("express");
const router = express.Router();

const { signup, logout, login } = require("../controllers/authController");

router.route("/signup").post(signup);
router.route("/logout").get(logout);
router.route("/login").post(login);

module.exports = router;
