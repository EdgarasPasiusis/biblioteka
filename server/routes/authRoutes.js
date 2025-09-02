const express = require("express");
const router = express.Router();

const {
  signup,
  logout,
  login,
  getAuthenticatedUser,
  protect
} = require("../controllers/authController");

router.route("/signup").post(signup);
router.route("/logout").get(logout);
router.route("/login").post(login);
router.route("/me").get(protect, getAuthenticatedUser);

module.exports = router;
