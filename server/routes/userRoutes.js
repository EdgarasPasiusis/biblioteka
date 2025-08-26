const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  searchUsers,
} = require("../controllers/userController");

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").put(updateUser).delete(deleteUser);
router.route("/search").get(searchUsers);

module.exports = router;
