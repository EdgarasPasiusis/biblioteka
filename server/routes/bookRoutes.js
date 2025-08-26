const express = require("express");
const router = express.Router();

const {
  postBook,
  deleteBook,
  updateBook,
  getAllBooks,
} = require("../controllers/bookController");

router.route("/").post(postBook).get(getAllBooks);
router.route("/:id").delete(deleteBook).put(updateBook);

module.exports = router;
