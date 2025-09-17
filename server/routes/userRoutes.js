const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  searchUsers,
  getUserByID,
} = require("../controllers/userController");

router.route("/search").get(searchUsers);
router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").put(updateUser).delete(deleteUser).get(getUserByID);

module.exports = router;
