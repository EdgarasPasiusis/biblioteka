const express = require("express");
const router = express.Router();

const {
  postCategory,
  deleteCategory,
  updateCategory,
  getAllCategorys,
} = require("../controllers/categoryController");
const restrictToAdmin = require("../middleware/restrictToAdmin");
const { protect } = require("../controllers/authController"); 

router.route("/").post(protect, restrictToAdmin, postCategory).get(getAllCategorys);
router.route("/:id").delete(protect, restrictToAdmin, deleteCategory).put(protect, restrictToAdmin, updateCategory);

module.exports = router;
