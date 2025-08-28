const express = require("express");
const router = express.Router();

const { deleteComment } = require("../controllers/commentsController");

router.route("/:id").delete(deleteComment);

module.exports = router;
