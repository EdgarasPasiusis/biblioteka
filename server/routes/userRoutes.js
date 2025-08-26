const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  searchUsers,
} = require("../controllers/userController");

router.route('/').get(getAllUsers);

module.exports = router;
