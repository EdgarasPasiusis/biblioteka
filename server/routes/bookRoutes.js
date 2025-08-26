const express = require("express");
const router = express.Router();

const { postBook, deleteBook } = require("../controllers/bookController");

router.route("/").post(postBook);
router.route('/:id').delete(deleteBook);

module.exports = router;
