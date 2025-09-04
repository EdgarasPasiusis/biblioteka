const express = require("express");
const router = express.Router();

const {
  postBook,
  deleteBook,
  updateBook,
  getAllBooks,
  getBookByID,
  searchBook
} = require("../controllers/bookController");

router.route("/").post(postBook).get(getAllBooks);
router.route("/search").get(searchBook);
router.route("/:id").delete(deleteBook).put(updateBook).get(getBookByID);

module.exports = router;
