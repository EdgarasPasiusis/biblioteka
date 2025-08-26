const express = require("express");
const router = express.Router();

const {
  postBook,
  deleteBook,
  updateBook,
} = require("../controllers/bookController");

router.route("/").post(postBook);
router.route("/:id").delete(deleteBook).put(updateBook);

module.exports = router;