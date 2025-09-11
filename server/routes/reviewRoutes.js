const express = require("express");
const router = express.Router();

const { protect } = require("../controllers/authController");
const { deleteComment, postReview, getReviews } = require("../controllers/reviewController");

router.route("/book/:id").get(getReviews).post(protect, postReview);
router.route("/:id").delete(protect, deleteComment);

module.exports = router;
