const express = require("express");
const router = express.Router();

const { deleteComment, postReview } = require("../controllers/reviewController");

router.route("/:id").delete(deleteComment);
router.route("/").post(postReview);

module.exports = router;
