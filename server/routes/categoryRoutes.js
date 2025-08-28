const express = require("express");
const router = express.Router();

const {
  postCategory,
  deleteCategory,
  updateCategory,
  getAllCategorys,
} = require("../controllers/categoryController");

router.route("/").post(postCategory).get(getAllCategorys);
router.route("/:id").delete(deleteCategory).put(updateCategory);

module.exports = router;
